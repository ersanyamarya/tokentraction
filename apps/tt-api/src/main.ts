import { koaMiddleware } from '@as-integrations/koa'
import { mongoDbConfig, serverConfig } from '@tokentraction/config'
import { connectMongoDB, disconnectMongoDB } from '@tokentraction/mongodb'
import apolloServerPlugin from '@ersanyamarya/apollo-graphql-helper'
import { LOG_LEVEL, logger, setLogLevel } from '@ersanyamarya/common-node-utils'
import { exceptions, getRootRoute, gracefulShutdown, koaApp, router } from '@ersanyamarya/essential-server-utils'
import { createServer } from 'http'
import { Context } from 'koa'
import { exit } from 'process'
import getSchema from './graphqlResources'

const port = serverConfig.port
setLogLevel(serverConfig.logLevel as LOG_LEVEL)

const start = async (): Promise<void> => {
  exceptions()

  const mongoDB = connectMongoDB(mongoDbConfig.uri, mongoDbConfig.options)
  const app = await koaApp()
  const httpServer = createServer(app.callback())
  const schema = await getSchema()
  const apolloServer = await apolloServerPlugin(schema, httpServer)
  router.post(
    '/graphql',
    koaMiddleware(apolloServer, {
      context: async ({ ctx }: any) => {
        logger.debug(`operationName: ${ctx.request.body.operationName}`)
        return ctx
      },
    })
  )
  router.get('/graphql', koaMiddleware(apolloServer))
  router.get('/health', (ctx: Context) => {
    // send 200 status OK
    ctx.status = 200
  })

  await getRootRoute({
    healthChecks: { database: mongoDB.healthCheck },
    name: 'Token Traction API',
    version: process.env.npm_package_version || '0.0.0',
    developer: {
      name: 'Sanyam Arya',
      email: 'er.sanyam.arya@gmail.com',
    },
  })
  app.use(router.routes())

  app.use(router.allowedMethods())

  const server = app
    .listen(port, async () => {
      logger.info(`Server listening ${serverConfig.host}`)
      logger.info(`GraphQL server listening on ${serverConfig.graphqlURL}`)
    })
    .on('error', err => {
      logger.error(err)
      exit(1)
    })

  const onShutdown = async (): Promise<void> => {
    disconnectMongoDB()
  }

  gracefulShutdown(server, onShutdown)
}

start()

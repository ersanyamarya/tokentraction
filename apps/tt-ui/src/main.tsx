import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'
import { serverConfig } from '@tokentraction/config'
import { ThemeContainer } from '@tokentraction/tt-design'
import { CssBaseline } from '@mui/material'
import { StrictMode } from 'react'
import * as ReactDOM from 'react-dom/client'
import Routing from './routing'
import { MetaMaskProvider } from 'metamask-react'

const cache = new InMemoryCache()
const client = new ApolloClient({
  uri: serverConfig.graphqlURL,
  cache: cache,
})

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <StrictMode>
    <ThemeContainer>
      <CssBaseline />
      <ApolloProvider client={client}>
        <MetaMaskProvider>
          <Routing />
        </MetaMaskProvider>
      </ApolloProvider>
    </ThemeContainer>
  </StrictMode>
)

import { ApolloError } from '@apollo/client'
import { CreateOneOrganizationInput, useOrganizationCreateMutation } from '@tokentraction/api-operations'
import { useState } from 'react'
import { useAuth } from '../../../../state'

interface OrganizationStateReturn {
  createOrganization: (organization: CreateOneOrganizationInput) => void
  error: ApolloError | undefined
  loading: boolean
  setLoading: (loading: boolean) => void
  orgFormOpen: boolean
  setOrgFormOpen: (orgFormOpen: boolean) => void
}

export default function useOrganizationState(): OrganizationStateReturn {
  const { user, getUser } = useAuth()
  const [error, setError] = useState<ApolloError | undefined>()
  const [loading, setLoading] = useState(false)
  const [orgFormOpen, setOrgFormOpen] = useState(false)

  const [createOrg] = useOrganizationCreateMutation({
    refetchQueries: ['UserConnectWallet'],
    onCompleted: async data => {
      await getUser()
      setLoading(false)
      setOrgFormOpen(false)
    },
    onError: error => {
      setError(error)
      setLoading(false)
    },
  })

  const createOrganization = async (organization: CreateOneOrganizationInput) => {
    setLoading(true)
    await createOrg({
      variables: {
        record: organization,
        userId: user._id,
      },
    })
  }

  return {
    createOrganization,
    error,
    loading,
    setLoading,
    orgFormOpen,
    setOrgFormOpen,
  }
}

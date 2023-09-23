import { ApolloError } from '@apollo/client'
import {
  User,
  useUserConnectWalletLazyQuery,
  useUserCreateMutation,
  useUserUpdateMutation,
} from '@tokentraction/api-operations'
import { useMetaMask } from 'metamask-react'
import { useState } from 'react'
import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'

export interface IStateDBUser {
  user: User
  setUser: (user: User) => void
  clear: () => void
}

const defaultUser: User = {
  walletAddress: '',
  displayName: '',
  pictureUrl: '',
  age: null,
  country: null,
  state: null,
  city: null,
  gender: null,
  languages: [],
  maritalStatus: null,
  householdSize: null,
  householdIncome: null,
  employmentStatus: null,
  employmentIndustry: null,
  religion: null,
  politicalAffiliation: null,
  accessibilityNeeds: null,
  healthStatus: null,
  veteranStatus: null,
  skills: [],
  techSkills: [],
  education: [],
  workExperience: [],
  interests: [],
  _id: '',
  createdAt: null,
  updatedAt: null,
  __typename: 'User',
}

export const useAuthStore = create(
  persist<IStateDBUser>(
    (set, get) => ({
      user: defaultUser,
      setUser: (user: User) => set({ user }),
      clear: () => set({ user: defaultUser }),
    }),
    {
      name: 'auth-storage',
      storage: createJSONStorage(() => localStorage),
    }
  )
)

export const useAuth = () => {
  const { setUser, clear, user } = useAuthStore()
  const { account, status } = useMetaMask()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<ApolloError>()
  const [getUser] = useUserConnectWalletLazyQuery({
    variables: {
      walletAddress: account || '',
    },
    onCompleted: data => {
      if (data?.userConnectWallet) {
        console.log('data.userConnectWallet', data.userConnectWallet)

        setUser(data.userConnectWallet)
      }

      setLoading(false)
    },
    onError: error => {
      setError(error)
      setLoading(false)
    },
    fetchPolicy: 'network-only',
    notifyOnNetworkStatusChange: true,
  })

  const [createUser] = useUserCreateMutation({
    refetchQueries: ['UserConnectWallet'],
    onCompleted: async data => {
      await getUser()
    },
    onError: error => {
      setError(error)
      setLoading(false)
    },
  })

  const [updatePersona] = useUserUpdateMutation({
    refetchQueries: ['UserConnectWallet'],
    onCompleted: async data => {
      await getUser()
    },
    onError: error => {
      setError(error)
      setLoading(false)
    },
  })

  if (status !== 'connected') clear()

  // if (account && !user.id) getUser()

  return {
    user,
    getUser,
    loading,
    error,
    clear,
    walletAddress: account || '',
    createUser,
    setLoading,
    updatePersona,
  }
}

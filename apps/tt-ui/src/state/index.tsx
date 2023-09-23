import {
  User,
  useUserConnectWalletLazyQuery,
  useUserConnectWalletQuery,
  useUserCreateMutation,
} from '@tokentraction/api-operations'
import { useMetaMask } from 'metamask-react'
import { useState } from 'react'
import { create } from 'zustand'
import { persist } from 'zustand/middleware'

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
  location: null,
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
  _id: '650ea62f43477d7e33a77cbd',
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
      getStorage: () => window.localStorage,
    }
  )
)

export const useAuth = () => {
  const { setUser, clear, user } = useAuthStore()
  const { account, status } = useMetaMask()
  const [loading, setLoading] = useState(false)
  const [getUser, { error }] = useUserConnectWalletLazyQuery({
    variables: {
      walletAddress: account || '',
    },
    onCompleted: data => {
      if (data?.userConnectWallet) {
        setUser(data.userConnectWallet)
      }
      setLoading(false)
    },
  })

  const [createUser] = useUserCreateMutation({
    refetchQueries: ['UserConnectWallet'],
    onCompleted: data => {
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
  }
}

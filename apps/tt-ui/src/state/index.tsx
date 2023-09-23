import {
  useUserConnectWalletLazyQuery,
  useUserConnectWalletQuery,
  useUserCreateMutation,
} from '@tokentraction/api-operations'
import { useMetaMask } from 'metamask-react'
import { useState } from 'react'
import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export interface IStateDBUser {
  id: string
  displayName: string
  walletAddress: string
  pictureUrl: string
  setUser: (user: User) => void
  clear: () => void
}

export interface User {
  id: string
  displayName: string
  walletAddress: string
  pictureUrl: string
}
const defaultUser: User = {
  id: '',
  displayName: '',
  walletAddress: '',
  pictureUrl: '',
}

export const useAuthStore = create(
  persist<IStateDBUser>(
    (set, get) => ({
      ...defaultUser,
      setUser: (user: User) => set(user),
      clear: () => set(defaultUser),
    }),
    {
      name: 'auth-storage',
      getStorage: () => window.localStorage,
    }
  )
)

export const useAuth = () => {
  const { setUser, clear, ...user } = useAuthStore()
  const { account, status } = useMetaMask()
  const [loading, setLoading] = useState(false)
  const { error } = useUserConnectWalletQuery({
    variables: {
      walletAddress: account || '',
    },
    onCompleted: data => {
      if (data?.userConnectWallet) {
        setUser({
          id: data.userConnectWallet._id,
          displayName: data.userConnectWallet.displayName,
          walletAddress: account || '',
          pictureUrl: data.userConnectWallet.pictureUrl || '',
        })
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
    ...user,
    loading,
    error,
    clear,
    walletAddress: account || '',
    createUser,
    setLoading,
  }
}

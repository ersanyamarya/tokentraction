import { User } from '@tokentraction/api-operations'
import { useState } from 'react'
import { useAuth } from '../../../state'
import { ApolloError } from '@apollo/client'

interface PersonaStateReturn {
  persona: User
  error: ApolloError | undefined
  loading: boolean
  editMode: boolean
  setEditMode: (editMode: boolean) => void
  savePersona: (persona: User) => void
}

export default function usePersonaState(): PersonaStateReturn {
  const { user, loading, setLoading, updatePersona, error } = useAuth()
  const [editMode, setEditMode] = useState(false)

  const savePersona = async (persona: User) => {
    setLoading(true)
    await updatePersona({
      variables: {
        record: persona,
        userUpdateId: user._id,
      },
    })
    setEditMode(false)
  }

  return {
    persona: user,
    error,
    loading,
    editMode,
    setEditMode,
    savePersona,
  }
}

import { User } from '@tokentraction/api-operations'
import { useState } from 'react'
import { useAuth } from '../../../state'

interface PersonaStateReturn {
  persona: User
  error: string
  loading: boolean
  editMode: boolean
  setEditMode: (editMode: boolean) => void
}

export default function usePersonaState(): PersonaStateReturn {
  const { user } = useAuth()
  const [editMode, setEditMode] = useState(false)

  return {
    persona: user,
    error: '',
    loading: false,
    editMode,
    setEditMode,
  }
}

import { capitalize } from '@mui/material'
import { useMemo, useReducer, useState } from 'react'

interface ErrorState {
  [key: string]: string | boolean
}
interface Validator {
  [key: string]: (value: string) => boolean | string
}
interface Action {
  type: string
  field?: string
  value?: string
}

const reducer = (state: Record<string, any>, action: Action) => {
  switch (action.type) {
    case 'updateFieldValue':
      if (action.field) return { ...state, [action.field]: action.value }
      return state

    case 'reset':
    default:
      return {}
  }
}

export default function useForm(defaultState?: Record<string, any | undefined>) {
  const [state, dispatch] = useReducer(reducer, defaultState || {})
  const [errors, setErrors] = useState<ErrorState>({})
  const validators: Validator = {}

  const updateFieldValue = (field: string) => (event: any) => {
    event.preventDefault && event.preventDefault()
    const value = event.target.value
    if (validators[field]) {
      const error = validators[field](value)
      if (error) setErrors({ ...errors, [field]: error })
      else {
        delete errors[field]
        setErrors({ ...errors })
      }
    }
    dispatch({ type: 'updateFieldValue', field, value: event.target.value })
  }

  /**
   * It validates the field and updates the field value
   * @param {string} field - The name of the field to update.
   * @param {string} value - the value of the field
   */
  const updateField = (field: string, value: any) => {
    if (validators[field]) {
      const error = validators[field](value)
      if (error) setErrors({ ...errors, [field]: error })
      else {
        delete errors[field]
        setErrors({ ...errors })
      }
    }
    dispatch({ type: 'updateFieldValue', field, value })
  }

  /**
   * It resets the state, clears the errors, and deletes the validators
   */
  const reset = () => {
    dispatch({ type: 'reset' })
    setErrors({})
    Object.keys(validators).forEach(field => {
      delete validators[field]
    })
  }

  /* Checking if there are any errors in the form. */
  const noErrors = useMemo(() => {
    return Object.values(errors).every(error => !error)
  }, [errors])

  const valueExists = (field: string[]) => {
    return field.every(field => state[field])
  }

  /**
   * It returns an object with the value, label, placeholder, onChange, helpertext, error,
   * aria-describedby, autoComplete, and aria-label properties
   * @param {string} key - The name of the field.
   * @param [options] - {
   * @returns An object with the following properties:
   *   value: The value of the field
   *   label: The label of the field
   *   placeholder: The placeholder of the field
   *   onChange: The onChange event handler
   *   helpertext: The helper text of the field
   *   error: The error state of the field
   *   aria-describedby: The aria-describedby attribute
   */
  const registerField = (
    key: string,
    options?: {
      showLabel?: boolean
      validator?: (value: string) => string | boolean
      beforeValueUpdate?: (value: any) => void
      required?: boolean
    }
  ): any => {
    if (options && options.validator) validators[key] = options.validator

    return {
      value: state[key] || '',
      label: options?.showLabel ? camelCaseToSpaces(key) : null,
      placeholder: camelCaseToSpaces(options?.required ? `${key}*` : key),
      onChange: (event: any) => {
        updateFieldValue(key)(event)
        if (options && options.beforeValueUpdate) options.beforeValueUpdate(event.target.value)
      },
      helperText: errors[key] ? errors[key] : '',
      error: errors[key] ? true : false,
      'aria-describedby': `${key}-helper-text`,
      autoComplete: key,
      'aria-label': key,
    }
  }

  return { state, registerField, reset, errors, noErrors, valueExists, updateField }
}

function camelCaseToSpaces(str: string) {
  return capitalize(str.replace(/([A-Z])/g, ' $1').trim())
}

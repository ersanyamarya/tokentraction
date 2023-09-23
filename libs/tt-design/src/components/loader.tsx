import { CircularProgress } from '@mui/material'

interface LoaderProps {
  size?: number
  className?: string
}

export function TTLoader({ size = 32, className }: LoaderProps) {
  return <CircularProgress size={size} className={className} />
}

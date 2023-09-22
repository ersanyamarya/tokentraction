import { CircularProgress } from '@mui/material'

interface LoaderProps {
  size?: number
  className?: string
}

export function Loader({ size = 32, className }: LoaderProps) {
  return <CircularProgress size={size} className={className} />
}

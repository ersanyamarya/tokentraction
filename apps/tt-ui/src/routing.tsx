import { CircularProgress } from '@mui/material'
import { useMetaMask } from 'metamask-react'
import { Suspense } from 'react'
import { Navigate, Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import { Dashboard, LandingPage, PersonaPage } from './pages'
import { NavBarLayout } from './templates'
function LazyLoaded({ children }: { children: React.ReactNode }) {
  return <Suspense fallback={<CircularProgress size={256} thickness={2} />}>{children}</Suspense>
}
function AuthRoute({ children }: { children: React.ReactNode }) {
  const { status } = useMetaMask()
  if (status !== 'connected') return <Navigate to="/" />
  return <LazyLoaded>{children}</LazyLoaded>
}
export default function Routing() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />

        <Route
          path="/app"
          element={
            <AuthRoute>
              <NavBarLayout />
            </AuthRoute>
          }
        >
          <Route path="/app" element={<Dashboard />} />
          <Route path="/app/persona" element={<PersonaPage />} />
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  )
}

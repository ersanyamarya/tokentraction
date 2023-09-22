import { CircularProgress } from '@mui/material'
import { Suspense } from 'react'
import { Navigate, Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import { Dashboard, NotFound, LandingPage } from './pages'
import { NavBarLayout } from './templates'
function LazyLoaded({ children }: { children: React.ReactNode }) {
  return <Suspense fallback={<CircularProgress size={256} thickness={2} />}>{children}</Suspense>
}
export default function Routing() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route
          path="/dashboard"
          element={
            <LazyLoaded>
              <NavBarLayout />
            </LazyLoaded>
          }
        >
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  )
}

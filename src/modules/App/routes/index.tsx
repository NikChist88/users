import { MainLayout } from '@/modules/App/layouts/MainLayout'
import { HomePage, AuthPage, ErrorPage } from '@/pages'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom'

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path="/"
      element={<MainLayout />}
    >
      <Route
        index
        element={<HomePage />}
      />
      <Route
        path="auth"
        element={<AuthPage />}
      />
      <Route
        path="*"
        element={<ErrorPage />}
      />
    </Route>
  )
)

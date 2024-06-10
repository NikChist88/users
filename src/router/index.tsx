import { MainLayout } from '@/layouts/MainLayout'
import {
  HomePage,
  AddUserPage,
  ErrorPage,
  AuthPage,
  EditUserPage,
} from '@/pages'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom'

export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route
        path="/"
        element={<MainLayout />}
      >
        <Route
          index
          element={<HomePage />}
        />
        <Route
          path="add"
          element={<AddUserPage />}
        />
        <Route
          path="edit/:id"
          element={<EditUserPage />}
        />
        <Route
          path="*"
          element={<ErrorPage />}
        />
      </Route>
      <Route
        path="auth"
        element={<AuthPage />}
      />
    </>
  )
)

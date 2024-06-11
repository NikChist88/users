import { MainLayout } from '@/layouts/MainLayout'
import {
  HomePage,
  AddEmployeePage,
  ErrorPage,
  AuthPage,
  EditEmployeePage,
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
          element={<AddEmployeePage />}
        />
        <Route
          path="edit/:id"
          element={<EditEmployeePage />}
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

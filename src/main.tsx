import ReactDOM from 'react-dom/client'
import { ChakraProvider } from '@chakra-ui/react'
import { Provider } from 'react-redux'
import { store } from '@/store/store'
import { ToastContainer } from 'react-toastify'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom'
import { HomePage, AuthPage, ErrorPage, AddUserPage } from './pages'
import { AuthProvider } from './modules/Auth'
import { MainLayout } from './layouts/MainLayout'
import 'react-toastify/dist/ReactToastify.min.css'
import './index.css'

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

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <ChakraProvider>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
      <ToastContainer
        position="top-center"
        autoClose={1500}
        theme="light"
      />
    </ChakraProvider>
  </Provider>
)

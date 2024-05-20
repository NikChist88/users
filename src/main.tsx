import ReactDOM from 'react-dom/client'
import { ChakraProvider } from '@chakra-ui/react'
import { Provider } from 'react-redux'
import store from '@/store/store'
import { App } from './modules/App'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.min.css'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <ChakraProvider>
      <App />
      <ToastContainer
        position="top-center"
        autoClose={1500}
        theme="light"
      />
    </ChakraProvider>
  </Provider>
)

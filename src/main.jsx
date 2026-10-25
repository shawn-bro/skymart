import { createRoot } from 'react-dom/client'
import './index.css'
import Approutes from './routes/Approutes.jsx'
import { Provider } from 'react-redux'
import { store } from './app/store.jsx'
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import { ToastContainer } from 'react-toastify';


const queryClient = new QueryClient()


createRoot(document.getElementById('root')).render(
  <QueryClientProvider client={queryClient}>
  <Provider store={store}>
    <Approutes />
    <ToastContainer />
  </Provider>
   </QueryClientProvider> 
  
)

import React from 'react'
import ReactDOM from 'react-dom/client'
import { HelmetProvider } from 'react-helmet-async';
import './index.css'
 import {
  RouterProvider,
} from "react-router-dom"; 
import { router } from './Router/Router.jsx';
import AuthProvider from './Providers/AuthProvider';
import {
  
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
const queryClient = new QueryClient()
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <QueryClientProvider client={queryClient}>
      <HelmetProvider><AuthProvider>
        <div className='max-w-screen-xl mx-auto'>
      <RouterProvider router={router} />
   </div></AuthProvider></HelmetProvider>
    </QueryClientProvider >
  </React.StrictMode >
  
)

    
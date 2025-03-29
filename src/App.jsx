import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router'
import PrivateRoute from './routes/PrivateRoute'
import Error from './components/error/Error'
import LandingPage from './pages/LandingPage'
import Home from './pages/Home'

const App = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <LandingPage />,
      children:[
        { 
          path: '/',
          element: <Home />
        },
      ]
    },

    {
      path: '/private',
      element: <PrivateRoute />
    },

    {
      path: '*',
      element: <Error />
    }
  ])
  return (
    <RouterProvider router={router}/>
  )
}

export default App
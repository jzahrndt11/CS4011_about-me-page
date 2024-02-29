import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom'

import React from 'react';
import { createRoot } from 'react-dom/client';

import { AboutMe } from './modules/aboutMe';


const router = createBrowserRouter([
  {
      path: '/',
      element: <AboutMe />
  }
])


const App = () => {
  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

createRoot(document.getElementById('root') as Element).render(<App />)

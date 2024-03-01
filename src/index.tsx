import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom'

import React from 'react';
import { createRoot } from 'react-dom/client';

import { AboutMe } from './modules/aboutMe';
import { PetsContainer } from './modules/pets/PetContainer';


const router = createBrowserRouter([
  {
      path: '/',
      element: <AboutMe />
  },
  {
    path: '/pets',
    element: <PetsContainer />
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

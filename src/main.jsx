import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import PostUsers from './components/PostUsers.jsx';
import GetUsers from './components/GetUsers.jsx';
import Update from './components/Update.jsx';




const router = createBrowserRouter([
  {
    path: "/",
    element: <PostUsers></PostUsers>,
  },
  {
    path: "/users",
    element:<GetUsers></GetUsers>,
    loader: ()=> fetch(`http://localhost:5003/users`),
  },
  {
    path: "/users/:id",
    element:<Update></Update>,
    loader: ({params}) => {
      console.log(params)
      return fetch(`http://localhost:5003/users/${params.id}`)
    }
  }
]);



createRoot(document.getElementById('root')).render(
  <StrictMode>
      <RouterProvider router={router} />
  </StrictMode>,
)

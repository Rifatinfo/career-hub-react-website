import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Root from './Components/Root/Root.jsx';
import Home from './Components/Home/Home.jsx';
import Statistics from './Components/Statistics/Statistics.jsx';
import AppliedJobs from './Components/AppliedJobs/AppliedJobs.jsx';
import Blog from './Components/Blog/Blog.jsx';
import ErrorPage from './Components/ErrorPage/ErrorPage.jsx';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";



const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement : <ErrorPage></ErrorPage>,
    children : [
      {
        path  : '/',
        element : <Home></Home>
      },
      {
        path : '/statistics',
        element : <Statistics></Statistics>
      },
      {
        path: "/applied-jobs",
        element : <AppliedJobs></AppliedJobs>
      },
      {
        path: "/blog",
        element : <Blog></Blog>
      }
    ]
  },
  
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
        <RouterProvider router={router} />
  </StrictMode>,
)

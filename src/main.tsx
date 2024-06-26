import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css'
import Error from './pages/Error/Error';
import Layout from './layout/Layout/Layout';
import Analysis from './pages/Analisys/Analysis';
import * as React from 'react';
import Grammatic from './pages/Grammatic/Grammatic';

const Router = createBrowserRouter([
  {
    path: '/main',
    element: <Layout />,
     children: [
      {
        path: 'analysis',
        element: <Analysis />
      },
      {
        path: 'grammatic',
        element: <Grammatic />
      },
      {
        path: '*',
        element: <Error /> // сделать страницу ошибки 
      }
    ]
  },
 
]); 

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={Router} />
  </React.StrictMode>,
)


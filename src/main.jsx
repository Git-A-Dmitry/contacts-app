import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom';
// import App from './App';
import './index.css';
import { Root, loader as rootLoader } from './routes/root';
import { ErrorPage } from './error-page';
import { Contact } from './routes/contact';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    loader: rootLoader,
    // the new route as a child
    children: [
      {
        path: 'contacts/:contactId',
        element: <Contact />,
      },
    ],
  },
  // the new route
  // {
  //   path: 'contacts/:contactId',
  //   element: <Contact />,
  // },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

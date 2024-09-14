// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import { Provider } from 'react-redux';
// import store from './store';
// import App from './App.tsx'
// // import './index.css'

// createRoot(document.getElementById('root')!).render(
//   <StrictMode>
//     <Provider store={store}>
//       <App />
//     </Provider>
//   </StrictMode>,
// )

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import store from './store';
import Layout from './components/Layout';
import SongList from './components/Songlist';
import SongForm from './pages/SongForm';
import UpdateSongForm from './pages/UpdateForm';
import Statistics from './pages/Statistics';
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />, // Parent layout component
    children: [
      {
        path: "/",
        element: <SongList />, // Child component for Home
      },
      {
        path: "create",
        element: <SongForm />, 
      },
      {
        path: "update/:id",
        element: <UpdateSongForm />,
      },
      {
        path: "statistics",
        element: <Statistics />,
      },
    ],
  },
]);

const rootElement = document.getElementById('root');

if (rootElement) {
  createRoot(rootElement).render(
    <StrictMode>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </StrictMode>
  );
} else {
  console.error("Root element not found");
}

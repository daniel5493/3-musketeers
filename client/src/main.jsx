import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import "./app.css"
import App from './app.jsx'
import Home from './components/Home';
import Signup from './components/Signup';
import Login from './components/Login';
import ErrorPage from './components/ErrorPage';

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
          {
            index: true,
            element: <Home />
          }, 
          {
            path: '/home',
            element: <Home />
          },
          {
            path: '/login',
            element: <Login />
          }, 
          {
            path: '/signup',
            element: <Signup />
          }
        ]
      },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);

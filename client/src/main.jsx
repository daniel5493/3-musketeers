import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import "./app.css"
import App from './app.jsx';
// import Home from './pages/Home';
// import NotFound from './pages/NotFound';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App style={{margin: "auto"}} />,
   // errorElement: <NotFound />,
    children: [
//      {
//        index: true,
//        element: <Home />
//      }, {
//        path: '/matchup',
//        element: <Matchup />
//      }, {
//        path: '/matchup/:id',
//        element: <Vote />
//      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);

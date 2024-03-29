import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home';

const appRouting = createBrowserRouter([
      {
         path : '/',
         element : <App/>,
         children : [
          {
            path : '/',
            element : <Home/>
          }
         ]
      },
      
])


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouting}/>);


import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import route from './routingPath/route'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={route}></RouterProvider>
  </React.StrictMode>,
)


// portfulio link 
// https://harnishdesign.net/demo/react/simone/demo/?classicHeader=false&darkTheme=false&bgImage=true&themeColor=cyan
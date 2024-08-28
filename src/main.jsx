import React from "react"
// import ReactDOM from 'react-dom/client'
import { createRoot } from 'react-dom/client'
//import App from './App.jsx'
import './index.css'
import {createBrowserRouter,RouterProvider} from "react-router-dom";
import Layout from './Layout.jsx';
import HOME from './components/Home/Home.jsx'
import About from './components/About/About.jsx' 
import Contact from "./components/Contact/Contact.jsx";
import User from "./components/User/User.jsx";
import App from "./App.jsx"
import Github, {githubInfoLoader} from "./components/Github/Github.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children:[
      {
        path: "",
        element: <HOME/>
      },
      {
        path: "about",
        element:<About/>
      },
      {
        path: "/contact-us",
        element: <Contact/>
      },
      {
         path: "/app",   
        element: <App/>
      },
      {
        path: "user/:myid",   // Taking dynamic values
        element: <User/>
      },
      { 
        loader: githubInfoLoader,
        path: "/github",
        element: <Github/>
      }
   
    ]
   
  },
]);

//or Second way 
// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path='/' element={<Layout/>}>

//       <Route path="" element={<Home/>}/>
//       <Route path="about" element={<About/>}/>
//       <Route path="/contact-us" element={<Contact/>}/>

//     </Route>
//   )
// )

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

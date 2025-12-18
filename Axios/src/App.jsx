import React, { useState } from 'react'
import { createBrowserRouter, RouterProvider, Routes } from "react-router"
import Home from './Home'
import Loginpage from './Loginpage'
import Signup from './Signup'
import Data from './Data'
import LoginData from './LoginData'
import Shopping from './Shopping'
import Editdetails from './Editdetails'
import Cart from './Cart'
import Home1 from './Home1'




const App = () => {
  const [isLoggedIn,setIsLoggedIn ]=useState(false);

  
let router=createBrowserRouter([{
  
  
  path:"/",
  element:<Home></Home>,
  children:[
    {
      path:"/login",
      element:  <Loginpage setIsLoggedIn={setIsLoggedIn} isLoggedIn={isLoggedIn}></Loginpage>   
    },
    {
      path:"/signup",
      element:<Signup  ></Signup> 
    },
    {
      path:"/data",
      element:<Data></Data>
    },
    {
      path:"/logindata",
      element:<LoginData></LoginData>
    },
    {
      path:"/shoppy",
      element: <Shopping></Shopping> 
    },
    {
      path:"/edit/:id",
      element:<Editdetails></Editdetails>
    },
    {
      path:"/cart",
      element:<Cart></Cart>
    },
    {
      path:"vid",
      element:<Home1></Home1>
    }
    
  ]
}])


  
    
  return (
    <div>
       <div >
          <RouterProvider router={router}>
          
          </RouterProvider>
       </div>
    </div>
  )
}


export default App

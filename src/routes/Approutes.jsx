import React, { useEffect } from 'react'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import AuthProtected from './protected/AuthProtected';
import Authlayout from '../app/layouts/Authlayout';
import Register from '../features/auth/ui/pages/Register';
import MainProtected from './protected/MainProtected';
import Mainlayout from '../app/layouts/Mainlayout';
import Home from '../features/Home/ui/pages/Home';
import Shop from '../features/Shop/ui/pages/Shop';
import Login from '../features/auth/ui/pages/Login';
import { useAuth } from '../features/auth/hook/useAuth';
import { hydratedapi } from '../features/auth/state/authactions';
import { useDispatch, useSelector } from 'react-redux';
import Cartpage from '../features/About/ui/pages/Cartpage';
import About from '../know/ui/pages/About';


function Approutes() {
let dispatch = useDispatch();

   
useEffect(() => {
    (() => {
        dispatch(hydratedapi());
    })();
}, []);





    const router = createBrowserRouter([
        {
            path:"/",
            element:<AuthProtected />,
            children:[
                {
                    path:"",
                    element:<Authlayout />,
                    children:[
                        {
                            path:"",
                            element:<Login />
                        },
                        {
                            path:"register",
                            element:<Register />
                        },
                    ]
                }
            ]
        },
        {
    path: "/home",
    element: <MainProtected />,
    children: [
        {
            path: "",
            element: <Mainlayout />,
            children: [
                {
                    path: "",
                    element: <Home />
                },
                {
                    path: "shop",
                    element: <Shop />
                },
                {
                    path:"cart",
                    element:<Cartpage />
                },
                {
                    path:"about",
                    element:<About />
                }
            ]
        }
    ]
}
    ],
)
 return <RouterProvider router={router}/>
}

export default Approutes

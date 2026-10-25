//import React from 'react'
//import { useSelector } from 'react-redux'
//import { Navigate, Outlet } from 'react-router'
//
//function AuthProtected() {
//    let {login,isLoading} = useSelector((store)=> store.auth)
//
//    if(isLoading) return <h1>loading...</h1>
//
//    if(login){
//       return <Navigate to={'/home'}/>
//    }
//  return <Outlet />
//}
//
//export default AuthProtected
import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router";

function AuthProtected() {
  let {isAuthenticated,isLoading} = useSelector((store)=> store.auth)

    if(isLoading) return <h1>loading...</h1>

    if (isAuthenticated) {
  return <Navigate to="/home" replace />;
}
  return <Outlet />
}

export default AuthProtected;
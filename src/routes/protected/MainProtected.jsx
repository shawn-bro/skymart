//import React from 'react'
//import { useSelector } from 'react-redux'
//import { Navigate, Outlet } from 'react-router'
//
//function MainProtected() {
//    let { login, isLoading } = useSelector(
//        (store) => store.auth
//    );
//
//    if (isLoading) return <h1>loading...</h1>;
//
//    if (!login) {
//        return <Navigate to="/" />;
//    }
//
//    return <Outlet />;
//}
//
//export default MainProtected

import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router";

function MainProtected() {
   let {isAuthenticated,isLoading} = useSelector((store)=> store.auth)

    //if(isloading) return <h1>loading...</h1>
    if (isLoading) {
    return <h1>Loading...</h1>;
  }

    if(!isAuthenticated){
      return  <Navigate to={'/'}/>
    }

  return <Outlet />
}

export default MainProtected;
import { useForm } from 'react-hook-form';
import {Navigate, useNavigate} from 'react-router'
import { loginapi, registerapi } from '../state/authactions';
import { useDispatch } from 'react-redux';

export const useAuth = ()=>{
    let navigate = useNavigate();
    let dispatch = useDispatch();

    const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  //login
const loginapicaller = (data)=>{
console.log("login`s data = ",data);
dispatch(loginapi(data));
reset();
  }


  //register 
  const registerapicaller = (data)=>{
console.log("login`s data = ",data);
dispatch(registerapi(data));
reset();
  }

  return{
    navigate,
    register,
    errors,
    handleSubmit,
    reset,
    registerapicaller,
    loginapicaller
  }
}
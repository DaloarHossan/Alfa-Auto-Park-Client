import React, { useState } from "react";
import loginpng from "../../image/login.png";
import avater from "../../image/avater.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from "react-firebase-hooks/auth";
import auth from "../../firebase.config";


const Login = () => {
	const navigate=useNavigate();
  const [errorMessage,setErrorMessage]=useState('');
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
	const [signInWithGoogle, googleuser, gloading, googleerror] = useSignInWithGoogle(auth);

	const [
		signInWithEmailAndPassword,
		user,
		loading,
		error,
	  ] = useSignInWithEmailAndPassword(auth);
    if (error) {
      setErrorMessage(error)
      
    }

    if(loading || gloading){
      return <div className="text-center mt-24">
      <svg role="status" className="inline w-10 h-10 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
      </svg>
    </div>
    }
   
    

	  if(user || googleuser){
      navigate(from, { replace: true });
	  }
 
	  const handelSubmit=(e)=>{
		e.preventDefault()
		const email=e.target.email.value;
		const pass=e.target.password.value;
		
		signInWithEmailAndPassword(email,pass);
    
		
	   
	}
	const handelGoogle=()=>{
		signInWithGoogle()
    
	}

  return (
    <div className=" grid md:grid-cols-2">
      <div className="hidden md:block">
        <img src={loginpng} alt=""  />
      </div>
      <div className="flex flex-col justify-start items-start m-auto">
        <form className="mt-6" onSubmit={handelSubmit}>
			<div className="flex justify-center">
			<img className="w-32 "  src={avater} alt=""  />
			</div>
          
          <h1 className="text-center font-bold text-3xl text-gray-700 mt-6">
            Welcome to you
          </h1>
		  <button onClick={handelGoogle} className="relative w-full mt-6 border rounded-md py-2 text-sm bg-primarycolor text-white hover:translate-y-2 translate-all duration-500">
      <span className="absolute left-0 top-0 flex items-center justify-center h-full w-10 text-blue-500">
	 
	  </span>
      <span>Login with Google</span>
    </button>
          <div className="relative my-10 h-px bg-gray-300">
            <div className="absolute flex justify-center w-full -mt-2">
              <span className="bg-white px-4 text-xs text-gray-500 uppercase">
                Or Login With Email
              </span>
            </div>
          </div>
          <div className="relative">
            <FontAwesomeIcon
              className="absolute text-xl text-primarycolor"
              icon={faUser}
            />
            <input
              type="text"
              placeholder="Email"
			  name='email'
              className="text-xl pl-8 border-b-2 outline-none focus:border-primarycolor transition-all duration-500" required
            />
          </div>
          <div className="relative mt-8">
            <FontAwesomeIcon
              className="absolute text-xl text-primarycolor"
              icon={faLock}
            />
            <input
              type="password"
              placeholder="Password"
			  name='password'
              className="text-xl pl-8 border-b-2 outline-none focus:border-primarycolor transition-all duration-500" required
            />
          </div>
          <p>
            {
              error? <span>email or password incorrect</span> : undefined
            }
          </p>
		  <p className="my-3 flex justify-end"><button className="text-sm text-blue-400">Forgot Your Password?</button></p>
          <button
            className="border-2
				   px-20 py-3 rounded-full bg-primarycolor text-white hover:translate-y-2 translate-all duration-500 ml-4"
          >
            Login
          </button>
		  <p className="my-3 text-sm">Don't have an account?<span className="text-primarycolor"><Link to='/signup'>Sign up</Link></span></p>
        </form>
		
      </div>
    </div>
  );
};

export default Login;

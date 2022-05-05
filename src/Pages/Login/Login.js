import React from "react";
import loginpng from "../../image/login.png";
import avater from "../../image/avater.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from "react-firebase-hooks/auth";
import auth from "../../firebase.config";


const Login = () => {
	const navigate=useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
	const [signInWithGoogle, googleuser, gloading, googleerror] = useSignInWithGoogle(auth);

	const [
		signInWithEmailAndPassword,
		user,
		loading,
		error,
	  ] = useSignInWithEmailAndPassword(auth);

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

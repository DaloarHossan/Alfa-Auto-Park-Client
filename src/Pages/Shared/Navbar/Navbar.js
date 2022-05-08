import { faBars, faX } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { signOut } from 'firebase/auth';
import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, NavLink } from 'react-router-dom';
import auth from '../../../firebase.config';

const Navbar = () => {
	const [user, loading, error] = useAuthState(auth);
	const [open,setOpen]=useState(false);
	const handelSignOut=()=>{
		signOut(auth)
	}
	return (
		<div className='bg-slate-700 p-4  text-white sticky top-0'>
			
		    <div>
			<ul className={`md:flex justify-center  w-full block absolute bg-slate-700 md:static duration-500 ease-in-out ${open? 'top-10':'top-[-500px]'}`}>
			<li className='p-3'>
					<NavLink
					  to="/"
					  className={({ isActive }) =>
						isActive ? 'text-primarycolor' : undefined
					  }
					>
					  Home
					</NavLink>
				  </li>
				  <li className='p-3'>
					<NavLink
					  to="/inventory"
					  className={({ isActive }) =>
						isActive ? 'text-primarycolor' : undefined
					  }
					>
					 Inventory
					</NavLink>
				  </li>
				{
					user?<>
					<li className='p-3'>
					<NavLink
					  to="/myitem"
					  className={({ isActive }) =>
						isActive ? 'text-primarycolor' : undefined
					  }
					>
					  My item
					</NavLink>
				  </li>
				  </>
				  :<li></li>
				}
					 
					 <li className='p-3'>
					<NavLink
					  to="/blogs"
					  className={({ isActive }) =>
						isActive ? 'text-primarycolor' : undefined
					  }
					>
					  Blogs
					</NavLink>
				  </li>
					 <li className='p-3'>
						 {
							 user?<NavLink
							 to="/login"
							 className={({ isActive }) =>
							   isActive ? 'text-white' : undefined
							 }
						   ><span onClick={handelSignOut}>Signout</span>
							 
						   </NavLink>:
						   <NavLink
						   to="/login"
						   className={({ isActive }) =>
							 isActive ? 'text-white' : undefined
						   }
						 >
						   Login
						 </NavLink>
						 }
					
				  </li>
				
				
			</ul>
			</div>
			<div onClick={()=>setOpen(!open)} className='md:hidden'>
				{
					open? <FontAwesomeIcon className='w-6 hi-6' icon={faX}/> : <FontAwesomeIcon className='w-6 h-6' icon={faBars}/>
				}
				
			</div>
		</div>
	);
};

export default Navbar;
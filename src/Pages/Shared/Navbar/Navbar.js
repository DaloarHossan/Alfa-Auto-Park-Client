import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, NavLink } from 'react-router-dom';
import auth from '../../../firebase.config';

const Navbar = () => {
	const [user, loading, error] = useAuthState(auth);
	const handelSignOut=()=>{
		signOut(auth)
	}
	return (
		<div className='bg-slate-600 p-4 flex justify-between text-white sticky top-0'>
			<h1>Alfa Auto Park</h1>
			<ul className='flex mr-4'>
			<li className='mr-3'>
					<NavLink
					  to="/"
					  className={({ isActive }) =>
						isActive ? 'text-primarycolor' : undefined
					  }
					>
					  Home
					</NavLink>
				  </li>
				{
					user?<><li className='mr-3'>
					<NavLink
					  to="tasks"
					  className={({ isActive }) =>
						isActive ? 'text-primarycolor' : undefined
					  }
					>
					  Add item
					</NavLink>
				  </li>
				  <li className='mr-3'>
					<NavLink
					  to="tasks"
					  className={({ isActive }) =>
						isActive ? 'text-primarycolor' : undefined
					  }
					>
					  Manage
					</NavLink>
				  </li>
				  </>
				  :<li></li>
				}
					 
					 <li className='mr-3'>
					<NavLink
					  to="/blogs"
					  className={({ isActive }) =>
						isActive ? 'text-primarycolor' : undefined
					  }
					>
					  Blogs
					</NavLink>
				  </li>
					 <li>
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
	);
};

export default Navbar;
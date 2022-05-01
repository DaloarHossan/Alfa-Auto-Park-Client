import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
	return (
		<div className='bg-slate-600 p-4 flex justify-between text-white sticky top-0'>
			<h1>Navbar</h1>
			<ul>
				<li><Link to='/login'>Login</Link></li>
			</ul>
		</div>
	);
};

export default Navbar;
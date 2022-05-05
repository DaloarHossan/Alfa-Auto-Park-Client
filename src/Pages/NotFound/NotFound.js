import React from 'react';
import { useNavigate } from 'react-router-dom';
import page404 from '../../image/page404.png'

const NotFound = () => {
	const navigate =useNavigate();
	const handelBack=()=>{
		navigate('/')
	}
	return (
		<div className='grid md:grid-cols-2 gap-8 mt-6'>
			<div>
               <img src={page404} alt="" />
			</div>
			<div className='flex flex-col justify-center ml-2'>
                   <h1 className='text-4xl font-bold'>Oops, <br/> <span className='text-primarycolor'>nothing </span>here... </h1>
				   <p className='text-sm text-gray-600 mt-1'>The page you are looking for doesn't exist or an <br /> other error occurred,go back to home page.</p>
				   <p className='inline'><button onClick={handelBack} className='mt-6 border-2 px-6 py-2 rounded-full bg-primarycolor text-white'>Go to Home</button></p>
			</div>
		</div>
	);
};

export default NotFound;
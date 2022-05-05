import React from 'react';
import { useNavigate } from 'react-router-dom';

const Inventory = (props) => {
	
	const {img,price,name,description,seller,quantity,_id}=props.car;
	const navigate=useNavigate()
   
	const handelUpdate=(id)=>{
       navigate(`/inventory/${id}`)
	}
	
	return (
		<div className='shadow-xl p-4 rounded-2xl'>
			<div >
			<img src={img} alt="" srcset="" />
			</div>
			
			<h1>{name}</h1>
			<p>Price=${price}</p>
			<p>{seller}</p>
			<p>Quantity:{quantity}</p>
			<p className='mb-3'>{description.slice(0,120)}<span className='ml-6 text-orange-500'>Read more ....</span></p>
			<button onClick={()=>handelUpdate(_id)} className='border-2 px-6 py-2 bg-primarycolor rounded-full text-white hover:scale-105 translate-all duration-500'>Update</button>
		</div>
	);
};

export default Inventory;
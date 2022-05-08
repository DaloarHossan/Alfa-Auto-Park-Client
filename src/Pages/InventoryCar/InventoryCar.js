import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const InventoryCar = () => {
	const {id}=useParams();
	const [carDetails,SetCarDetails]=useState([]);
	useEffect(()=>{
		(async()=>{
            const {data}=await axios.get(`http://localhost:5000/inventory/${id}`)
			SetCarDetails(data.data)
		})()
	},[id])
  const handelRestock =()=>{
	  
  }
	const {name,img,price,description,quantity,seller}=carDetails
	return (
		<div className='grid md:grid-cols-2  p-8'>
			<div className='flex items-center justify-center'>
				<img className='w-3/4 rounded-lg' src={img} alt="" />
			</div>
			<div className='mx-auto mt-12'>
				<h1 className='text-3xl font-bold'>Model:{name}</h1>
				<h1 className='text-2xl font-bold py-1'>price:${price}</h1>
				<p>Quantity:{quantity}</p>
				<p>Seller:{seller}</p>
				<p>Description:{description}</p>
				<button className='px-6 py-3 border-2 rounded-full bg-yellow-500'>Delivery</button>
				
				<div>
				<div className=' mt-4'>
					<input className='outline-none border-2 p-4 rounded-md' placeholder='Input Stock quantity' type="number" name='search' required />
					
				</div>
				<button className='px-6 py-3 border-2 rounded-full bg-green-500 mt-4'>Restock</button>
				</div>
			</div>
		</div>
	);
};

export default InventoryCar;
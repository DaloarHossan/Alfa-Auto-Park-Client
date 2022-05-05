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
	},[])
	console.log(carDetails);
	const {name,img,price,description,quantity,seller}=carDetails
	return (
		<div className='grid md:grid-cols-2 gap-4'>
			<div className='flex items-center'>
				<img className='w-full' src={img} alt="" />
			</div>
			<div className='mx-auto mt-12'>
				<h1 className='text-3xl font-bold'>Model:{name}</h1>
				<h1 className='text-2xl font-bold py-1'>price:${price}</h1>
				<p>Quantity:{quantity}</p>
				<p>Seller:{seller}</p>
				<p>Description:{description}</p>
				<button className='px-6 py-3 border-2 rounded-full bg-primarycolor'>Delivery</button>
			</div>
		</div>
	);
};

export default InventoryCar;
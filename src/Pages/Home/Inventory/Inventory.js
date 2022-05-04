import React from 'react';

const Inventory = (props) => {
	console.log(props)
	const {img,price,name,description,seller,quantity}=props.car
	
	return (
		<div className='shadow-xl p-4 rounded-2xl'>
			<div >
			<img src={img} alt="" srcset="" />
			</div>
			
			<h1>{name}</h1>
			<p>Price=${price}</p>
			<p>{seller}</p>
			<p>Quantity:{quantity}</p>
			<p>{description.slice(0,120)}<span className='ml-6 text-orange-500'>Read more ....</span></p>
			<button className='border-2 px-6 py-2'>Update</button>
		</div>
	);
};

export default Inventory;
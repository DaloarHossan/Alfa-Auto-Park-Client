import axios from 'axios';
import React, { useEffect, useState } from 'react';
import About from './About/About';
import Banner from './Banner/Banner';
import Inventory from './Inventory/Inventory';


const Home = () => {
	const [carCollection,setCarCollection]=useState([]);
	useEffect(()=>{
		(async()=>{
       const {data}=await axios.get('http://localhost:5000/inventory')
		   setCarCollection(data.data)
	   
		})()
	},[])
	const carSlice=carCollection.slice(0,6)
	return (
		<div>
			
			<Banner></Banner>
			<h1 className='text-center text-3xl font-bold mt-4'>Inventory Iteam</h1>
			<div className='grid md:grid-cols-3 gap-4 mt-12'>
			
				{
					carSlice.map(car=><Inventory key={car._id}
					car={car}></Inventory>
					)
				}
			</div>
            <About></About>
		</div>
	);
};

export default Home;
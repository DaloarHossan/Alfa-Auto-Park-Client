import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import searchImg from '../../../image/Search.png'
import { faCheck } from '@fortawesome/free-solid-svg-icons';

const InventoryFilter = () => {
	return (
		<div className='grid md:grid-cols-2 mt-8 ml-4'>
			<div>
                <img src={searchImg} alt="" />
			</div>
			<div className='flex flex-col justify-center'>
                  <h1 className='text-2xl md:text-5xl font-bold'>Advanced <span className='text-primarycolor'>Inventory Filters</span> </h1>
				  <p className='mb-3'>Find the vehicle by any criteria you want.</p>
				  <div className='grid grid-cols-2 gap-4'>
					  <div>
						  <ul>
							  <li className='mb-1'><FontAwesomeIcon className='rounded-full border-2 text-primarycolor ' icon={faCheck}/>Filter by Makes</li>
							  <li className='mb-1'><FontAwesomeIcon className='rounded-full border-2 text-primarycolor ' icon={faCheck}/> Filter by Price</li>
							  <li className='mb-1'><FontAwesomeIcon className='rounded-full border-2 text-primarycolor ' icon={faCheck}/> Filter by Body Style</li>
							  <li className='mb-1'><FontAwesomeIcon className='rounded-full border-2 text-primarycolor ' icon={faCheck}/> Filter by Condition</li>
						  </ul>
					  </div>
					  <div>
                          <ul>
							  <li className='mb-1'><FontAwesomeIcon className='rounded-full border-2 text-primarycolor ' icon={faCheck}/> Filter by Fuel Type</li>
							  <li className='mb-1'><FontAwesomeIcon className='rounded-full border-2 text-primarycolor ' icon={faCheck}/> Filter by Transmission</li>
							  <li className='mb-1'><FontAwesomeIcon className='rounded-full border-2 text-primarycolor ' icon={faCheck}/> Filter by Mileage</li>
							  <li className='mb-1'><FontAwesomeIcon className='rounded-full border-2 text-primarycolor ' icon={faCheck}/> Filter by Year</li>
						  </ul>
					  </div>
					  
				  </div>
			</div>
		</div>
	);
};

export default InventoryFilter;
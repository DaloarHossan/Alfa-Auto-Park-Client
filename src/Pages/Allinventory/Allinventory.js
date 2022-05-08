import React from 'react';
import useCarCollection from '../../Hocks/CarCollection';
import CarInventory from './CarInventory';

const Allinventory = () => {
	const [carCollection]=useCarCollection([]);
	return (
		<div>
			{
				carCollection.map(car=><CarInventory key={car._id}
				car={car}></CarInventory>)
			}
		</div>
	);
};

export default Allinventory;
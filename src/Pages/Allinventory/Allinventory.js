import React from "react";
import {useNavigate } from "react-router-dom";
import useCarCollection from "../../Hocks/CarCollection";

const Allinventory = () => {
	const navigate=useNavigate()
   
	const handelUpdate=(id)=>{
       navigate(`/inventory/${id}`)
	}
	
  const [carCollection] = useCarCollection([]);
  return (
    <div>
      <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
			<th scope="col" class="px-6 py-3">
                Car Image
              </th>
              <th scope="col" class="px-6 py-3">
                Car Model
              </th>
              <th scope="col" class="px-6 py-3">
                price
              </th>
              <th scope="col" class="px-6 py-3">
                seller
              </th>
              <th scope="col" class="px-6 py-3">
                Quantity
              </th>
              <th scope="col" class="px-6 py-3">
                <span class="sr-only">Edit</span>
              </th>
            </tr>
          </thead>
          <tbody>
            {
				carCollection.map(car=>{
					return (
						<tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th
                scope="row"
                class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
              >
                <img className="w-24" src={car.img} alt="" />
              </th>
              <td class="px-6 py-4">{car.name}</td>
              <td class="px-6 py-4">${car.price}</td>
              <td class="px-6 py-4">{car.seller}</td>
              <td class="px-6 py-4">{car.quantity}</td>
              <td class="px-6 py-4 text-right">
			  <button onClick={()=>handelUpdate(car._id)} className='border-2 px-6 py-2 bg-primarycolor rounded-full text-white hover:scale-105 translate-all duration-500'>Update</button>
              </td>
            </tr>
					);
				})
			}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Allinventory;

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import carImg from '../../../image/car.jpg'
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faCar } from '@fortawesome/free-solid-svg-icons';

const About = () => {
	return (
		<div className='grid md:grid-cols-2 gap-4 mt-8 ml-4'>
			<div className='md:order-2'>
				<img src={carImg} alt="" srcset="" />
			</div>
			<div>
                <h1 className='text-2xl md:text-4xl font-bold'>About <span className='text-primarycolor'>Alfa Auto Park</span> </h1>
				<div className='grid grid-cols-2 mt-6 gap-x-2 gap-y-6' >
					<div>
						<p><FontAwesomeIcon className='text-4xl text-primarycolor'  icon={faSearch}/></p>
                        <h1 className='text-2xl font-semibold'>Search Your Dream Car</h1>
						<p>You can search your dream car like brand,model,feature wise .</p>
					</div>
					<div>
					<p><FontAwesomeIcon className='text-4xl text-primarycolor'  icon={faPaperPlane}/></p>
                         <h1 className='text-2xl font-semibold'>Suggested email alerts</h1>
						 <p>When import a new car or add some feature of a car automatic email sent to you.</p>
					</div>
					<div>
					<p><FontAwesomeIcon className='text-4xl text-primarycolor'  icon={faPhone}/></p>
						<h1 className='text-2xl font-semibold'>Support 24/7</h1>
						<p>Our customer or Client service active 24/7 </p>
					</div>
					<div>
					<p><FontAwesomeIcon className='text-4xl text-primarycolor'  icon={faCar}/></p>
						<h1 className='text-2xl font-semibold'>All Brands</h1>
						<p>We are provided all brand of car and also market available model and also latest feature car import every-time.</p>
					</div>
				</div>
			</div>
			
		</div>
	);
};

export default About;
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';
import React from 'react';
const Footer = () => {
	return (
		<div className="text-center bg-black text-white p-6">
			<div className='mx-auto'>
				<ul className='flex justify-center'>
				   <li className='mr-2 p-4'><FontAwesomeIcon icon={faGoogle} /></li>
				   <li className='mr-2 p-4'><FontAwesomeIcon icon={faFacebookF} /></li>
				   <li className='mr-2 p-4'><FontAwesomeIcon icon={faInstagram} /></li>
				   <li className='mr-2 p-4'><FontAwesomeIcon icon={faYoutube} /></li>

				</ul>
			</div>
			<div>
				<h4>
				Terms of Use Privacy Policy</h4>
				<p className='text-sm text-gray-400'>Copyright &copy; 2022 Alfa Auto Park,All Rights Reserved </p>
			</div>
		</div>
	);
};

export default Footer;
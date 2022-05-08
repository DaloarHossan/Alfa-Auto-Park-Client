import { faArrowRight} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import useCarCollection from '../../Hocks/CarCollection';
import About from './About/About';
import Banner from './Banner/Banner';
import Inventory from './Inventory/Inventory';
import InventoryFilter from './InventoryFilter/InventoryFilter';


const Home = () => {
	const [carCollection]=useCarCollection([]);
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
				<p className='mt-4 text-primarycolor font-semibold ml-4
				'><Link to='/inventory'>See All <FontAwesomeIcon icon={faArrowRight}/> </Link></p>
			</div>
			<InventoryFilter></InventoryFilter>
            <About></About>
		</div>
	);
};

export default Home;
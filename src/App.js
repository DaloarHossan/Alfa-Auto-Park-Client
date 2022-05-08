
import { Route, Routes } from 'react-router-dom';

import './App.css';
import Allinventory from './Pages/Allinventory/Allinventory';
import Blogs from './Pages/Blogs/Blogs';
import Home from './Pages/Home/Home';
import InventoryCar from './Pages/InventoryCar/InventoryCar';
import Login from './Pages/Login/Login';
import NotFound from './Pages/NotFound/NotFound';
import Footer from './Pages/Shared/Footer/Footer';
import Navbar from './Pages/Shared/Navbar/Navbar';
import SignUp from './Pages/SignUp/SignUp';
import PrivetRoute from './PrivetRoute/PrivetRoute';
function App() {

  return (
    <div className="">
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}>
        </Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/inventory' element={<Allinventory></Allinventory>}></Route>
        <Route path='/inventory/:id' element={<PrivetRoute><InventoryCar></InventoryCar></PrivetRoute>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
     
    </div>
  );
}

export default App;

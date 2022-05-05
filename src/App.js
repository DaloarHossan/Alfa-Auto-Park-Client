
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home';
import InventoryCar from './Pages/InventoryCar/InventoryCar';
import Login from './Pages/Login/Login';
import NotFound from './Pages/NotFound/NotFound';
import Navbar from './Pages/Shared/Navbar/Navbar';
import SignUp from './Pages/SignUp/SignUp';
import PrivetRoute from './PrivetRoute/PrivetRoute';
function App() {

  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}>
        </Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>
        <Route path='/inventory/:id' element={<PrivetRoute><InventoryCar></InventoryCar></PrivetRoute>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;

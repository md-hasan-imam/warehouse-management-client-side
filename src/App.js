import logo from './logo.svg';
import './App.css';
import Home from './Pages/Home/Home';
import { Route, Routes } from 'react-router-dom';
import Inventories from './Pages/Inventories/Inventories';
import Header from './Pages/Shared/Header/Header';
import Login from './Pages/Login/Login';
import Footer from './Pages/Shared/Footer/Footer';
import Inventory from './Pages/Inventory/Inventory';
import SignUp from './Pages/Login/SignUp/SignUp';
import RequireAuth from './RequireAuth/RequireAuth';
import AddInventory from './Pages/AddInventory/AddInventory';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/inventories' element={<Inventories></Inventories>}></Route>
        <Route path='/inventory/:id' element={
          <RequireAuth>
            <Inventory></Inventory>
          </RequireAuth>
        }></Route>
        <Route path='/additem' element={
          <RequireAuth>
            <AddInventory></AddInventory>
          </RequireAuth>
        }></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;

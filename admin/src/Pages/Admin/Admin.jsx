import React from 'react';
import './Admin.css'
import Sidebar from '../../components/Sidebar/Sidebar';
import { Routes,Route} from 'react-router-dom';
import AddProducts from '../../components/AddProduct/AddProducts';
import ListProduct from '../../components/ListProduct/ListProduct';
const Admin = () => {
  return (
    <div className='admin'>
      <Sidebar/>
      <Routes>
       <Route path='/addproduct' element={<AddProducts/>}/>
       <Route path='/listProduct' element={<ListProduct/>}/>
         
      </Routes>
    </div>
  );
}

export default Admin;


import React from 'react';
import { useNavigate } from 'react-router-dom';
import useInventories from '../../Hooks/useInventories';
// import Inventory from '../Inventory/Inventory';
import './Inventories.css'

const Inventories = () => {
  const [inventories, setInventories] = useInventories();
  const navigate= useNavigate();

  const handleRemove = (id) => {
    const proceed = window.confirm('Do you really want to remove that item from your stock?')
    if (proceed) {
      console.log('deleting data with id', id);

      const url = `http://localhost:5000/inventory/${id}`
      fetch(url, {
        method: 'DELETE'
      })
        .then(res => res.json())
        .then(data => {
          if (data.deletedCount > 0) {
            console.log('deleted')
            const remaining = inventories.filter(inventory => inventory._id !== id);
            setInventories(remaining);
          }
        })
    }
  }

  const navigateToAddItemPage=()=>{
    navigate('/additem')
  }

  return (
    <div className='inventory-container'>
      <h2 className='mb-5 mt-4'>All Inventories</h2>
      <div className="div text-end me-5">
        <button className='btn btn-primary mb-4' onClick={navigateToAddItemPage}> Add New Stock Item</button>
      </div>
      <table className="table table-bordered table-light  table-striped ">
        <thead>
          <tr className='fs-4'>

            <th scope="col">Product Name</th>
            <th scope="col">Price</th>
            <th scope="col">Supplier Name</th>
            <th scope="col">Stock Quantity</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody >
          {
            inventories.map(inventory =>
              <tr
                inventory={inventory}
                key={inventory._id}>
                {/* <th scope="row" className='text-start'></th> */}
                <td className='text-start'><h5>{inventory.name}</h5></td>
                <td><h6> ${inventory.price}</h6></td>
                <td><h6>{inventory.supplier}</h6></td>
                <td><h5><small> {inventory.quantity} </small></h5></td>
                <td><button onClick={() => handleRemove(inventory._id)} className='btn btn-danger'>Remove Item</button></td>
              </tr>
            )
          }
        </tbody>
      </table>
    </div>
  );
};

export default Inventories;
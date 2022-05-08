import React from 'react';
import { useNavigate } from 'react-router-dom';
import useInventories from '../../Hooks/useInventories';
// import Inventory from '../Inventory/Inventory';
import './Inventories.css'

const Inventories = () => {
  const [inventories, setInventories] = useInventories();

  const navigate = useNavigate();

  const navigateToSingleItem = (id) => {
    const url = `/inventory/${id}`;
    navigate(url);
  }


  return (
    <div className='inventory-container'>
      <table className="table table-bordered table-light">
        <thead>
          <tr className='fs-4'>
            <th scope="col">Product Id</th>
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
                <th scope="row" className='text-start'><h6><small>{inventory._id}</small></h6></th>
                <td><h5>{inventory.name}</h5></td>
                <td><h6> ${inventory.price}</h6></td>
                <td><h6>{inventory.supplier}</h6></td>
                <td><h5><small> {inventory.quantity} </small></h5></td>
                <td><button className='btn btn-danger'>Remove This Item</button></td>
              </tr>
            )
          }
        </tbody>
      </table>

    </div>
  );
};

export default Inventories;


{/* <div className='inventory-card d-flex' inventory={inventory} key={inventory._id}>
<div className="car-img">
    <img src={inventory.img} alt=""/>
</div>
<div className="car-details text-start p-3">
    <h3>{inventory.name}</h3>
    <p>{inventory.description}</p>
    <h5>Price: ${inventory.price}</h5>
    <h6> <small> Available in Stock: </small> {inventory.quantity}</h6>
    <h6><small> Supplier: </small>{inventory.supplier}</h6>
    <button className='my-2 px-2 rounded' onClick={() => navigateToSingleItem(inventory._id)}>Update</button>
</div>
</div> */}
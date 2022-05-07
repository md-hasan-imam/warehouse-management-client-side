import React from 'react';
import { useNavigate } from 'react-router-dom';
import useInventories from '../../Hooks/useInventories';
// import Inventory from '../Inventory/Inventory';
import './Inventories.css'

const Inventories = () => {
    const [inventories, setInventories] = useInventories();

    const navigate =useNavigate();

    const navigateToSingleItem =(id)=>{
        const url =`/inventory/${id}`;
        navigate(url);
    }


    return (
        <div className='inventory-container'>
            {
                inventories.map(inventory =><div className='inventory-card d-flex' inventory={inventory} key={inventory._id}>
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
            </div>)
            }
        </div>
    );
};

export default Inventories;
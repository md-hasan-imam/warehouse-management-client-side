import React from 'react';
import { useNavigate } from 'react-router-dom';
import useInventories from '../../Hooks/useInventories';
import Inventories from '../Inventories/Inventories';
import Inventory from '../Inventory/Inventory';
import Banner from './Banner/Banner';
import './Home.css'

const Home = () => {

    const [inventories, setInventories] = useInventories([]);
    const homePageInventories = inventories.slice(0, 6);

    const navigate = useNavigate()

    const navigateToSingleItem =(id)=>{
        const url =`/inventory/${id}`;
        navigate(url);
    }

    return (
        <div className='my-5'>
            <Banner></Banner>
            <h2 className='my-5'>Available Inventories </h2>
            {
                homePageInventories.map(inventory =><div className='inventory-card d-flex' inventory={inventory} key={inventory._id}>
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

            <button onClick={() => navigate("/inventories")} className='p-2 rounded'>
                Manage All Inventories
            </button>

        </div>
    );
};

export default Home;
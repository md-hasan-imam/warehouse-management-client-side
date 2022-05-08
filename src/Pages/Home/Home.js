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

    const navigateToSingleItem = (id) => {
        const url = `/inventory/${id}`;
        navigate(url);
    }

    return (
        <div className='my-5'>
            <Banner></Banner>
            <h2 className='my-5 fw-bold'>Available Inventories </h2>
            <div className='home-inventory-container'>
            {
                homePageInventories.map(inventory => <div className='inventory-card' inventory={inventory} key={inventory._id}>
                    <div className="car-img">
                        <img src={inventory.img} alt="" className=''/>
                    </div>
                    <div className="car-details text-start p-3">
                        <h4 className='fw-bold text-center mb-2'>{inventory.name}</h4>
                        <p>{inventory.description.slice(0,150)}</p>
                        <div className="d-flex justify-content-between">
                            <div className="">
                                <h6 className='fs-5'>Price: ${inventory.price}</h6>
                                <h6 className=''><small> Supplier: </small>{inventory.supplier}</h6>
                                <h6> <small> Available in Stock: </small> {inventory.quantity}</h6>
                            </div>
                            <div>
                                <button className='my-2 px-2 rounded btn btn-primary me-5' onClick={() => navigateToSingleItem(inventory._id)}>Update Stock</button>
                            </div>
                        </div>
                    </div>
                </div>)
            }
            </div>
            
            <button onClick={() => navigate("/inventories")} className='p-2 rounded btn btn-primary mt-5'>
                Manage All Inventories
            </button>

        </div>
    );
};

export default Home;
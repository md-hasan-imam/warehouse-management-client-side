import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useInventories from '../../Hooks/useInventories';
import AboutUs from './AboutUs/AboutUs';
import Awards from './Awards/Awards';
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
                            <img src={inventory.img} alt="" className='' />
                        </div>
                        <div className="car-details text-start p-3">
                            <h4 className='fw-bold text-center mb-3 fs-4'>{inventory.name}</h4>
                            <p className='text-center mb-3  ' title={inventory.description}>{inventory.description.slice(0, 150)}...</p>
                            <div className="d-flex justify-content-between align-items-center">
                                <div className="">
                                    <h6 >Price: <span className='fw-bold'> ${inventory.price}</span> </h6>
                                    <h6 >Supplier:<span className='fw-bold'> {inventory.supplier}</span> </h6>
                                    <h6>Available in Stock:<span className='fw-bold'> {inventory.quantity}</span></h6>
                                </div>
                                <div>
                                    <button className='my-2 px-2 rounded btn btn-primary me-2' onClick={() => navigateToSingleItem(inventory._id)}>Update Stock</button>
                                </div>
                            </div>
                        </div>
                    </div>)
                }
            </div>
            <button onClick={() => navigate("/inventories")} className='p-2 rounded btn btn-primary mt-5'>
                Manage All Inventories
            </button>
            <Awards></Awards>
            <AboutUs></AboutUs>

        </div>
    );
};

export default Home;
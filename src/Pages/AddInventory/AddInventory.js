import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import auth from '../../firebase.init';
import './AddInventory.css'

const AddInventory = () => {

    const [user, loading] = useAuthState(auth);
    const [error,setError] =useState('')


    
    const handleAddItem = event => {
        event.preventDefault();   
        
        const email = event.target.email.value;
        const name = event.target.name.value;
        const description = event.target.description.value;
        const price = event.target.price.value;
        const quantity = event.target.quantity.value;
        const supplier = event.target.supplier.value;
        const img = event.target.img.value;
        const newItem = { email, name, description, price, quantity, supplier, img }
        // console.log(email,name,description,price,quantity,supplier,img);

        const url = `https://fast-escarpment-66103.herokuapp.com/addinventory`;
        fetch(url, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newItem),
        })
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data);
                toast('You Have Added to inventories'); 
                // event.target.reset();
            })
            .catch((error) => {
                setError(error);
            })
            

    }

    return (
        <div>
            <h2 className='my-5'>Add Inventory</h2>
            <form action="" onSubmit={handleAddItem} className='full-form mx-auto'>
                <input type="text" name='name' placeholder='Input Product name'  required/>
                <textarea type="text" name='description' placeholder='Description of the product' required/>
                <input type="number" name='price' placeholder='Price of the product' required/>
                <input type="number" name='quantity' placeholder='Quantity' required/>
                <input type="text" name='supplier' placeholder='Supplier name' required/>
                <input type="text" name='img' placeholder='Image url' required/>
                <input type="email" name='email' defaultValue={user.email}/>
                {error}
                <input type="submit" value="Add item" className='w-50 mx-auto my-3 mb-5 btn-primary' />
                <ToastContainer />
            </form>


        </div>
    );
};

export default AddInventory;
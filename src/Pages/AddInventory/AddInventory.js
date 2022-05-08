import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
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

        const url = `https://fast-escarpment-66103.herokuapp.com/inventories`;
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
                event.target.reset()
            })
            .catch((error) => {
                setError(error);
        })
    }

    return (
        <div>
            <h2 className='my-5'>Add Inventory</h2>
            <form action="" onSubmit={handleAddItem} className='full-form mx-auto'>
                <input type="text" name='name' placeholder='Input Product name' />
                <textarea type="text" name='description' placeholder='Description of the product' />
                <input type="number" name='price' placeholder='Price of the product' />
                <input type="number" name='quantity' placeholder='Quantity' />
                <input type="text" name='supplier' placeholder='Supplier name' />
                <input type="text" name='img' placeholder='Image url' />
                <input type="email" name='email' defaultValue={user.email} />
                {/* {error} */}
                <input type="submit" value="Add item" className='w-50 mx-auto my-3 mb-5 btn-primary' />

            </form>


        </div>
    );
};

export default AddInventory;
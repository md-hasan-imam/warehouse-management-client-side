import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const MyItems = () => {
    const [user] = useAuthState(auth);

    const [myInventories, setMyInventories] = useState([])
    const email = user.email;

    useEffect(() => {
        const url = `http://localhost:5000/myitems?email=${email}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setMyInventories(data))
    }, [user])

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
                const remaining = myInventories.filter(inventory => inventory._id !== id);
                setMyInventories(remaining);
              }
            })
        }
      }

    return (

        <div className='myitem-container container-fluid mt-5'>
            <h2 className='mb-4'>Your Items</h2>
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
                        myInventories.map(inventory =>
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

export default MyItems;
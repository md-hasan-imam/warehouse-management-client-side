import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import './Header.css';

const Header = () => {

    const [user, loading, error] = useAuthState(auth);

    const logout = () => {
        signOut(auth);
    };

    return (
        <div>
            <div className="container header-container my-5 mb-1 fw-bold">
                <div className="d-flex justify-content-between">
                    <div className="header-logo ">
                        <h2 className='text-start'>StoreCare</h2>
                    </div>
                    <div className="header-nav-links d-flex">
                        <Link to='/home'>Home</Link>
                        <Link to='/inventories'>Inventories</Link>
                        {
                            (user) ?
                                <div>
                                    <Link to='/manageitem'>Manage-items</Link>
                                    <Link to='/additem'>Add-item</Link>
                                    <Link to='/myitem'>My-items</Link>
                                    <button className='btn btn-primary ms-3' onClick={logout}>Logout</button>
                                </div>

                                :
                                <Link to='/login'>Login</Link>
                        }
                    </div>

                </div>

            </div>
        </div>
    );
};

export default Header;
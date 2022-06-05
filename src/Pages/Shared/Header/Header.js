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
            <div className="container  my-5 mb-1 fw-bold">
                <div className="d-flex header-container justify-content-between">
                    <div className="header-logo ">
                        <h2 className='fw-bold'>StoreCare</h2>
                    </div>
                    <div className="header-nav-links d-flex mr-2">
                        <Link to='/home'>Home</Link>
                        <Link to='/blog'>Blogs</Link>
                        {
                            (user) ?
                                <div className=' header-nav-links d-flex'>
                                    <Link to='/inventories'>Manage-inventories</Link>
                                    <Link to='/additem'>Add-item</Link>
                                    <Link to='/myitems'>My-items</Link>
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
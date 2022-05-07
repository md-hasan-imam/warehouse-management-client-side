import React from 'react';

const Footer = () => {
    return (
        <div className='my-5'>
            <h6>All rights reserved by <small className='text-primary'>stoCare</small> &copy; {new Date().getFullYear()}</h6>
        </div>
    );
};

export default Footer;
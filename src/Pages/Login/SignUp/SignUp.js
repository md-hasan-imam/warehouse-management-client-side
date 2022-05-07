import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import './SignUp.css'

const SignUp = () => {

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);


    const handleRegister= event =>{
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        event.target.reset();

        createUserWithEmailAndPassword(email, password);
        console.log(error);
    }

    return (
        <div className='signup-form'>
            <h2 className='my-5' style={{ textAlign: 'center' }}>Please Sign-Up</h2>
            <form onSubmit={handleRegister}>
                <input type="text" name="name" id="name" placeholder='Your Name' />
                <input type="email" name="email" id="email" placeholder='Your Email' />
                <input type="password" name="password" id="password" placeholder='Password' />
                <input type="submit" className='submit-button' value="Sign-Up" />
            </form>
            <p className='text-center fs-6 my-4'>Already have an account ? <Link to='/login' className='text-decoration-none fs-6  text-primary'>Login</Link></p>

        </div>
    );
};

export default SignUp;
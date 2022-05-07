import { signInWithEmailAndPassword } from 'firebase/auth';
import React from 'react';
import { useSignInWithEmailAndPassword, useSignInWithGithub } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading/Loading';
import './Login.css'

const Login = () => {

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const [signInWithGithub, gitUser, gitLoading, gitError] = useSignInWithGithub(auth);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    if(loading ){
        return <Loading></Loading>
    }

    if (user || gitUser) {
        navigate(from, { replace: true });
    }
    let errorELement;
    if (error || gitError) {
        errorELement = <p className='text-danger'>Error: {error?.message || gitError?.message}</p>
    }



    const handleLogIn = (event) => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        signInWithEmailAndPassword(email, password);
        event.target.reset();
    };

    const handleSignInWithGithub = () => {
        signInWithGithub();
    }


    return (
        <div>
            <div className='signup-form my-5'>
                <h2 className='my-5' style={{ textAlign: 'center' }}>Please Log-in</h2>
                <form onSubmit={handleLogIn}>
                    <input type="email" name="email" id="email" placeholder='Your Email' required />
                    <input type="password" name="password" id="password" placeholder='Password' required/>
                    {errorELement}
                    <input type="submit" value="Log-in" />
                </form>

                <p className='fs-6 my-4'>Have no account ? <Link to='/signUp' className='text-decoration-none fs-6 text-primary'>Sign-Up Please</Link></p>
            </div>
            <div>
                    <div className='d-flex align-items-center'>
                        <div className='line'></div>
                        <p className='or'>or</p>
                        <div className='line'></div>
                    </div>
                    <div className='others-signup'>
                        <button onClick={handleSignInWithGithub} className=''>Login with Github</button>
                    </div>
                </div>
                    <ToastContainer />
        </div>
    );
};

export default Login;
import React, { useRef } from 'react';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword, useSignInWithGithub } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading/Loading';
import './Login.css'

const Login = () => {

    const [signInWithEmailAndPassword, user, loading, error,] = useSignInWithEmailAndPassword(auth);

    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

    const [signInWithGithub, gitUser, gitLoading, gitError] = useSignInWithGithub(auth);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
    const emailref = useRef('')

    if (loading) {
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

    const handleResetPassword = (event) => {
        const email = emailref.current.value;
        sendPasswordResetEmail(email);
        toast('Reset password sent to your email')
    }

    return (
        <div>
            <div className='signup-form my-5'>
                <h2 className='my-5' style={{ textAlign: 'center' }}>Please Log-in</h2>
                <form onSubmit={handleLogIn}>
                    <input type="email"  ref={emailref} name="email" id="email" placeholder='Your Email' required />
                    <input type="password" name="password" id="password" placeholder='Password' required />
                    {errorELement}
                    <input type="submit" value="Log-in" className=' w-50 mx-auto my-3 mb-4 mt-4 btn-primary rounded' />
                    <div className='info-manage-links'>
                        <p className=''>Have no account ? <Link to='/signUp' className='text-decoration-none   text-primary fs-6'>Sign-Up Please</Link></p>
                        <p className=''>Forget password?  <span onClick={handleResetPassword} className='text-decoration-none text-primary reset-link fs-6'>Reset-Password</span></p>
                    </div>
                </form>
            </div>
            <div>
                <div className='others-signup'>
                    <button onClick={handleSignInWithGithub} className='mb-5 p-1 rounded'>Login with Github</button>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default Login;
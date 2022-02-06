import React from 'react';
import { Button } from 'react-bootstrap';
import NavigationBar from '../Shared/NavigationBar/NavigationBar';
import useAuth from '../../hooks/useAuth';

const Login = () => {



    // sign in method
    const { signinUsingGoogle } = useAuth();



    return (
        <div>
            <h1 className="fw-bolder  mt-5">Please Login with Google</h1>
            <button onClick={signinUsingGoogle } className="m-5 btn text-light button px-4 fs-5 py-2 border-0">Google login</button>
        </div>
    );
};

export default Login;
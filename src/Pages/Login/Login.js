import React from 'react';
import { Button } from 'react-bootstrap';
import NavigationBar from '../Shared/NavigationBar/NavigationBar';
import useAuth from '../../hooks/useAuth';

const Login = () => {



    // sign in method
    const { signinUsingGoogle } = useAuth();



    return (
        <div>
            <Button onClick={signinUsingGoogle } className="m-5">Google login</Button>
        </div>
    );
};

export default Login;
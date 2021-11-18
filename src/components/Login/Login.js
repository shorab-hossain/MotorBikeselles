import React, { useState } from 'react';
import { Link,useHistory,useLocation } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import ('./Login.css')


const Login = () => {
    const {signInUsingGoogle,loginUser,user,isLoading} = useAuth();
    const [loginData, setLoginData] = useState({});

    const history = useHistory();
    const location = useLocation();
    
    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }
    const handleLogin = e =>{
        // loginUser(loginData.email, loginData.password,location, history);
        e.preventDefault();
    }
    const handleUsingGoogle = () => {
        signInUsingGoogle(location, history)
    }
    return (
        <div className="Login-form ">
            <div className="p-5">
                <h1>Please Login</h1>
                <form onClick={handleLogin}>
                    <input type="email" className="px-4 mb-3  py-2 rounded shadow" placeholder="Your Email"  onChange={handleOnChange} /><br />
                    <input className="px-4 mb-3  py-2 rounded shadow" type="Password" placeholder="your Password"  onChange={handleOnChange} /><br />
                    <input className="bg-primary text-light rounded py-2 px-4 mb-3 " type="submit"  value="submit" />
                </form>
                <p>New to User? <Link to="/register">Create Account</Link> </p>
                <div className="mb-3">-----------or--------</div>
                <button onClick={handleUsingGoogle} className='btn-warning rounded py-2'>Google Sign In</button>
            </div>
        </div>
    );
};

export default Login;
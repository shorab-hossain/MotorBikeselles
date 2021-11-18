import { useState } from 'react';
import { Link,useHistory } from 'react-router-dom';
// import useFirebase from '../hooks/useFirebase';
import useAuth from '../hooks/useAuth';


const Register = () => {
    const [loginData,setLoginData] = useState({});
    const history = useHistory();
    const {user, handleUserRegister,authError} = useAuth();
     
    const handleOnBlur = e =>{
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = {...loginData};
        newLoginData[field] = value;
        setLoginData(newLoginData)
    }



    // const {signInUsingGoogle,handleUserRegister} = useFirebase()
    // // const history = useHistory();

    const handleSubmit = e =>{
        if(loginData.password !== loginData.password2){
            alert('your password did not match')
            return
        }
        e.preventDefault()
        handleUserRegister(e.email, e.password)
    }
    return (
        <div className="Login-form">
            <div>
                <h1>Register: Create Account</h1>
                <form  onSubmit={handleSubmit}>
                     <input type="name" className="px-4 mb-3  py-2 rounded shadow" placeholder="Your name" onBlur={handleOnBlur} /><br />
                    <input type="email" className="px-4 mb-3  py-2 rounded shadow" placeholder="Your Email" 
                    onBlur={handleOnBlur}/><br />
                    <input className="px-4 mb-3  py-2 rounded shadow" type="Password" placeholder="your Password" onBlur={handleOnBlur}/><br />
                    <input className="px-4 mb-3  py-2 rounded shadow"  type="Password" placeholder="password2" onBlur={handleOnBlur} /><br />
                    <input className="bg-primary text-light rounded py-2 px-4 mb-3 " type="submit"  value="submit" />
                </form>
                <p>Already have an account?<Link to="/Login">Login</Link></p>
                <div className="mb-3">-----------or--------</div>
                <Link to="/ExploreCard">
                     <button className='btn btn-warning rounded py-2 mb-3'>Google Sign In</button>
                </Link>
            </div>
            

        </div>
    );
};

export default Register;
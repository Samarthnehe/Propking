import React, { useState } from 'react';
import './Signin.css';
import {Link,useHistory} from 'react-router-dom';
import axios from 'axios';

function Signin() {

    const history=useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const signIn=e=>{
        e.preventDefault();
        console.log("hea")
        axios({
            url:"https://prop-king.herokuapp.com/api/login",
            method:"POST",
            data:{
                name:email,
                password:password
            }
        }).then(()=>{
            console.log("done");
            history.push('/');
            


        }).catch((error)=>{
            console.log(error);
            history.push('/signup');

        })

    }


    const register=e=>{
        e.preventDefault();
        console.log("hea")
        axios({
            url:"https://prop-king.herokuapp.com/api/signup",
            method:"POST",
            data:{
                name:email,
                password:password
            }
        }).then(()=>{
            console.log("done");
            history.push('/signup');
            alert("Please Login ");
            setEmail('');
            setPassword('');


        }).catch((error)=>{
            console.log(error)
        })
        
    }
    return (
        <div className="login">
     
           <div className="login__container">
               <h1>Sign In</h1>
               <form>
                   <h5>Username</h5>
                   <input value={email} type="text" onChange={e=>setEmail(e.target.value)}/>

                   <h5>Password</h5>
                   <input value={password} type="password" onChange={e=>setPassword(e.target.value)}/>

                   <button type="submit" onClick={signIn} className="login__signInButton">Sign In</button>
               </form>
               <p>
                   By signing in you agree to the Amazon-Clone's Conditions of Use & Sale. Please see our privacy Notice, our Cookies Notice and our Interest Based Ads Notice
               </p>

               <button type="submit" onClick={register} className="login__registerButton">Create an account?</button>
           </div>

        </div>
    )
}

export default Signin

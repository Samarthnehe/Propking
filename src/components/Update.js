import React, { useState } from 'react';
import { useStateValue } from '../StateProvider';
import './Update.css';
import axios from 'axios'
import { useHistory } from 'react-router';

function Update() {
    
    const [names,setNames]=useState('');
    const [{currName,token},dispatch]=useStateValue();
    const history=useHistory();
    // console.log(currName);

    const handleSubmit=(names,e)=>{
        e.preventDefault();
        let newToken="Bearer "+token;
        console.log(newToken);
        axios({
            url:'https://prop-king.herokuapp.com/api/update',
            method:"PUT",
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json',
                'Authorization':newToken
            },
            data:{
                toupdate:names,
                name:currName

            }
            // url:"http://localhost:5000/api/land",
            // method:"GET"
          
          }).then(()=>{
              console.log("done bro");
              dispatch({
                  type:"SET",
                  name:"z"
              })
              history.push('/');
              
          }).catch(()=>{
              console.log("error");
              history.push('/');
              alert("Please Login");
          })

       
        
    }

    return (
        <div className="update">
            <form>
                   <h5>Name</h5>
                   <input  type="text" value={names} onChange={e=>setNames(e.target.value)} />
                 
                    <div className="form__button">
                    <button onClick={(e)=>{
                        handleSubmit(names,e);
                        
                        
                    }} 
                    type="submit" className="login__signInButton">UPDATE</button>
                    </div>

                   
               </form>
        </div>
    )
}

export default Update

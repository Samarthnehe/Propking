import React, { useEffect, useState } from 'react';
import './Card.css';
import axios from 'axios';
import { useHistory } from 'react-router';
import { useStateValue } from '../StateProvider';


function Card({name,area,city,country,state,img}) {
   
    const history=useHistory();
    const [{currName,token},dispatch]=useStateValue();
    
  
    const handleName= ()=>{
        
        dispatch({
            type:"SET_NAME",
            data:name
        })
        
       

    }

    const handleCard=(name,e)=>{
        let newToken=`Bearer ${token}`;
        console.log(newToken)
        e.preventDefault();
        console.log("hea");
        axios({
            url:"https://prop-king.herokuapp.com/api/delete",
            method:"DELETE",
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json',
                'Authorization':newToken
            },
            data:{
                name:name
            }
        }).then(()=>{
            console.log("done");
            dispatch({
                type:"SET",
                name:"x"
            })
            history.push('/');
        }).catch((error)=>{
            console.log(error);
            alert("Please Login");
        })
    }

    // const handleSubmit=(names,name,e)=>{
    //     e.preventDefault();
                   
    //     console.log("heya");
    //     axios({
    //         url:'http://localhost:5000/api/update',
    //         method:"PATCH",
    //         data:{
    //             name:name,
    //             names:names
                

    //         }
    //         // url:"http://localhost:5000/api/land",
    //         // method:"GET"
          
    //       }).then(()=>{
    //           console.log("done bro");
              
    //       }).catch(()=>{
    //           console.log("error");
    //       })

    //       setNames('');
       
    // }



    return (
        <div className="card">
        <div className="card__info">
            <h3 style={{fontWeight:"600",color:"var(--primary-color)"}}>{name}</h3>
             <p className="card__price">
                <p><span>Area: </span>{area}</p>
                
            </p>
            <p><span>City: </span>{city}</p>
            <p><span>State: </span>{state}</p>
            <p><span>Country: </span>{country}</p>
    
        </div>
            <div className="img" style={{backgroundImage:`url(${img})`,backgroundPosition:"center",backgroundRepeat:"no-repeat",backgroundSize:"cover"}}>
            
            </div>
            <div className="buttons">
            <button onClick={()=>{handleName();history.push('./change')}}><a style={{textDecoration:"none",color:"black"}} >EDIT</a></button>
            <button onClick={(e)=>{handleCard(name,e);}}><a style={{textDecoration:"none",color:"black"}} >DELETE</a></button>
            </div>
         

            {/* <div id="myModal1" class="modal">

                    <div class="modal-content">
                        <div class="modal-header">
                            <span class="close1">&times;</span>
                            <h2 style={{color:"black"}}>EDIT NAME</h2>
                        </div>
                        <div class="modal-body">
                        <form>
                        <h5>Name</h5>
                        <input  type="text" value={names} onChange={e=>setNames(e.target.value)} />

                            <div className="form__button">
                            <button 
                                onClick={(e)=>handleSubmit(name,names,e)} 
                                
                            type="submit" className="login__signInButton">CHANGE</button>
                            </div>

                        
                    </form>

                        </div>

                    </div>

                    </div> */}
    </div>
    )
}

export default Card

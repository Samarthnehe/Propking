import React, { useEffect, useState } from 'react';
import './Home.css';
import Banner from '../images/banner.jpg';
import Card from './Card';
import { useStateValue } from '../StateProvider';
import AddIcon from '@material-ui/icons/Add';
import axios from 'axios';
import { useHistory } from 'react-router';

function Home() {

    const [{land,token},dispatch]=useStateValue();
    const history=useHistory();
    let newToken="Bearer "+token;
    
    useEffect(()=>{
        var modal = document.getElementById("myModal");


        // Get the button that opens the modal
        var btn = document.getElementById("myBtn");
  
        
        // Get the <span> element that closes the modal
        var span = document.getElementsByClassName("close")[0];
      
        
        // When the user clicks the button, open the modal 
        btn.onclick = function() {
          modal.style.display = "block";
        }
        
        // When the user clicks on <span> (x), close the modal
        span.onclick = function() {
          modal.style.display = "none";
        }
        
        // When the user clicks anywhere outside of the modal, close it
        window.onclick = function(event) {
          if (event.target == modal) {
            modal.style.display = "none";
          }
        }
       
    });

    const handleClick=(name,area,city,state,country,image,e)=>{
        e.preventDefault();
                   
        console.log("heya");
        axios({
            url:'https://prop-king.herokuapp.com/api/send',
            method:"POST",
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json',
                'Authorization':newToken
            },
            data:{
                name:name,
                area:area,
                city:city,
                state:state,
                country:country,
                image:image

            }
            // url:"http://localhost:5000/api/land",
            // method:"GET"
          
          }).then(()=>{
              console.log("done bro");
              dispatch({
                type:"SET",
                name:"y"
            })
              history.push('/')
              
          }).catch(()=>{
              console.log("error");
              alert("Please Login");
          })

          setName('');
          setArea('');
          setCountry('');
          setImage('');
          setState('');
          setCity('');
    }

    const [name, setName] = useState('');
    const [area,setArea] = useState('');
    const [city,setCity] = useState('');
    const [state,setState] = useState('');
    const [country,setCountry] = useState('');
    const [image,setImage] = useState('');

    return (
        <div className="home">
            <div className="home__container">
                <img className="home__image" src={Banner}/>
                <div className="home__row__button" style={{justifyContent:"flex-end"}}>
                    <button id="myBtn" >ADD <AddIcon/></button>
                </div>

                <div className="home__row"> 
                {land.map((res)=>{
                    return (
                        <Card name={res.name} area={res.area} city={res.city} country={res.country} state={res.state} img={res.image}/>
                    )
                })}
                    
                    
                </div>
                
                

            </div>
            <div id="myModal" class="modal">

            <div class="modal-content">
                <div class="modal-header">
                    <span class="close">&times;</span>
                    <h2 style={{color:"black"}}>ADD PROPERTY</h2>
                </div>
                <div class="modal-body">
                <form>
                   <h5>Name</h5>
                   <input  type="text" value={name} onChange={e=>setName(e.target.value)} />
                   <h5>Area</h5>
                   <input  type="text" value={area} onChange={e=>setArea(e.target.value)}/>
                   <h5>City</h5>
                   <input  type="text" value={city} onChange={e=>setCity(e.target.value)} />
                   <h5>State</h5>
                   <input  type="text" value={state} onChange={e=>setState(e.target.value)}/>
                   <h5>Country</h5>
                   <input  type="text" value={country} onChange={e=>setCountry(e.target.value)}/>
                   <h5>Image URL</h5>
                   <input  type="text" value={image} onChange={e=>setImage(e.target.value)}/>


                    <div className="form__button">
                    <button onClick={(e)=>{
                        handleClick(name,area,city,state,country,image,e);
                        
                        
                    }} 
                    type="submit" className="login__signInButton">ADD <AddIcon/></button>
                    </div>

                   
               </form>

                </div>
               
            </div>

            </div>
      
        </div>
    )
}

export default Home

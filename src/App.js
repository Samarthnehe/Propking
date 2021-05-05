import React, { useEffect } from 'react';
import './App.css';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import { useStateValue } from './StateProvider';
import Navbar from './components/Navbar';
import Home from './components/Home'
import Footer from './components/Footer';
import Update from './components/Update';
import Signin from './components/Signin';
import axios from 'axios';

function App() {
  const [{land,currName},dispatch]=useStateValue();
  
  useEffect(async()=>{
    const result= await axios({
                  url:"https://prop-king.herokuapp.com/api/land"
                })
                dispatch({
                    type:"PUT_DATA",
                    land:result.data
                })
                
  },[currName])

  return (
    <Router>
    <div className="App">
      <Switch>

        <Route exact path="/">
           <Navbar/>
           <Home/>
           <Footer/>
        </Route>
        <Route exact path="/change">
           <Navbar/>
           <Update/>
           <Footer/>
        </Route>
        <Route exact path="/signup">
           <Navbar/>
           <Signin/>
           <Footer/>
        </Route>

      </Switch>
    </div>
</Router>
  );
}

export default App;

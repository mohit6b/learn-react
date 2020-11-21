import React from 'react';
// import logo from './logo.svg';
import './SecondPerson.css';
import Header from './Header'

function SecondPerson() {
  return (
<div>
    <Header />
  <div className="row">
  <div className="column">
    <div className="card1">
      <img src="./logo512.png" alt="Avatar" style={{width:"100%"}} />
        <div className="container">
          <center><h4><b>Professional</b></h4> 
          <p>Career, Reasearch & Academics</p> </center>
        </div>
      </div>
  </div>

  <div className="column">
    <div className="card2">
      <img src="./logo512.png" alt="Avatar" style={{width:"100%"}} />
        <div className="container">
          <center><h4><b>Personal</b></h4> 
          <p>Memories & Moments</p> </center>
        </div>
      </div>
  </div>
  
  <div className="column">
    <div className="card3">
      <img src="./logo512.png" alt="Avatar" style={{width:"100%"}} />
        <div className="container">
          <center><h4><b>Interests</b></h4> 
          <p>Cooking</p> </center>
        </div>
      </div>
  </div>
  
</div>   


</div> 

  );
}

export default SecondPerson;

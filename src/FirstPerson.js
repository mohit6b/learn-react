import React from 'react';
// import logo from './logo.svg';
import './FirstPerson.css';
import Header from './Header'

function FirstPerson() {
  return (
<div>
<Header />

  <div className="row">
  <div className="column">
    <div className="card1">
      <img src="./fp1.jpg" alt="Avatar" style={{width:"100%", height:"100%"}} />
        <div className="container">
          <center><h4><b>Professional</b></h4> 
          <p>Career, Reasearch & Academics</p> </center>
        </div>
      </div>
  </div>

  <div className="column">
    <div className="card2">
      <img src="./fp2.jpg" alt="Avatar" style={{width:"100%", height:"100%"}} />
        <div className="container">
          <center><h4><b>Personal</b></h4> 
          <p>Memories & Moments</p> </center>
        </div>
      </div>
  </div>
  
  <div className="column">
    <div className="card3">
      <img src="./fp3.jpg" alt="Avatar" style={{width:"100%", height:"100%"}} />
        <div className="container">
          <center><h4><b>Interests</b></h4> 
          <p>Photography</p> </center>
        </div>
      </div>
  </div>
  
</div>   


</div> 

  );
}

export default FirstPerson;

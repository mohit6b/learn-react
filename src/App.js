import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Header from './Header'

function App() {
  return (
<div>
<Header style={{marginBottom: -400}} />

<div className="row" >
  <div className="column">
    <div className="card1">
      <img src="./a1.jpg" alt="Avatar" style={{width:"100%", height:"100%"}} />
        <div className="container">
          <center><h4><b>Ayushi Biswas</b></h4> 
          <p>Climate Change Researcher</p> </center>
        </div>
      </div>
  </div>

  <div className="column">
    <div className="card2">
      <img src="./us2.jpg" alt="Avatar" style={{width:"100%", height:"100%"}} />
        <div className="container">
          <center><h4><b>Crazy Maniacs</b></h4> 
          <p>Photographer & Cook</p> </center>
        </div>
      </div>
  </div>
  
  <div className="column">
    <div className="card3">
      <img src="./m2.jpg" alt="Avatar" style={{width:"100%", height:"100%"}} />
        <div className="container">
          <center><h4><b>Mohit Vashistha</b></h4> 
          <p>Blockchain Engineer</p> </center>
        </div>
      </div>
  </div>
  
</div>   


</div> 

  );
}

export default App;

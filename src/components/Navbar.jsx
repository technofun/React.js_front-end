import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import './Navbar.css';

class Navbar extends Component {
 
 render() {
    return (
        
<nav className="navbar navbar-expand-lg navbar-dark bg-dark" id="navbar">
  <Link className="navbar-brand" to="/" id="firstl">BackBench</Link><br/>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">
      <li className="nav-item ">
        <Link className="nav-link" to="/" id="">Home <span className="sr-only">(current)</span></Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/Services" >Services</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/Gallery" >Gallery</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/Company" >Company</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/Login" >Login</Link>
      </li>
    </ul>
  </div>

</nav>
      
    );
  }
}



export default Navbar;

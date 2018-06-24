import React, { Component } from 'react';
import './Services.css';
import { Jumbotron, Container } from 'reactstrap';

class Services extends Component{
    render(){
        return(
            <div>
                 <Jumbotron fluid>
        <Container fluid>
          <h1 className="display-3">
          Statistics<br/>Full Responsive!!!!!</h1>
          <p className="lead">This is the second nav and the single page application with <br/>React.js Mongodb ReactStrap Bootstrap 4.1</p>
        </Container>
      </Jumbotron>
            </div>
        );
    }
}

export default Services;
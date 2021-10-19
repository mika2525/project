import React from "react";
import "./style.css";
import { Container } from "react-bootstrap";
import evista from './evista.png';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import FlavorForm from './list.js';

const Header = ({ moves, bestScore, handleRestart }) => {
  return (
    <div>          
      <Navbar expand="sm" bg="dark" variant="dark">
      <img className="headimg" src={evista} alt="Evista"></img>
      <div className="deck" >Deck size:</div>      
      <FlavorForm/>
      <Button onClick={handleRestart} variant="danger" size="sm">START NEW GAME</Button>     
      </Navbar>      
      <Container> 
        <div className="sub-header">
          <div className="moves">
            <span className="bold">Current tries: </span>
            {moves}
          </div>
          {localStorage.getItem("bestScore") && (
            <div className="high-score">
              <span>Best:</span><br/>
              {bestScore}
            </div>
          )}
          <div className="reshuffle">
            <button onClick={handleRestart}> RESTART</button>
          </div>          
        </div>
      </Container>      
    </div>
  );
};

export default Header;

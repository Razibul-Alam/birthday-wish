import React from 'react';
import { Card } from 'react-bootstrap';
import { Button } from 'react-bootstrap';

const CandleComp = ({setKnife,setCandle}) => {
    const handleComponent=()=>{
        setCandle(false)
        setKnife(true)
    }
    return (
        <div className='Appdiv'>
  <Card>
    <Card.Img variant="top" src="https://i.ibb.co/nLjBMgK/candel.jpg" />
    <Card.Body>
      <Card.Text className='text-center'>
      <Button onClick={handleComponent} variant="outline-danger">Extinguish The Candle</Button>{' '}
      </Card.Text>
    </Card.Body>
  </Card> 
        </div>
    );
};

export default CandleComp;
import React from 'react';
import { Card } from 'react-bootstrap';
import { Button } from 'react-bootstrap';

const CutCake = ({setWish,setKnife,setCandle,setCake}) => {
    const handleComponent=()=>{
        setKnife(false)
        setCake(false)
        setCandle(false)
        setWish(true)
    }
    return (
        <div className='Appdiv'>
        <Card>
          <Card.Img variant="top" style={{height:'20rem'}} src="https://i.ibb.co/VQXVwKv/cakle-cut.jpg" />
          <Card.Body>
            <Card.Text className='text-center'>
            <Button onClick={handleComponent} variant="outline-danger">Cut the Cake</Button>{' '}
            </Card.Text>
          </Card.Body>
        </Card> 
              </div>
    );
};

export default CutCake;
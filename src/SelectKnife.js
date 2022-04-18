import React from 'react';
import { CardGroup } from 'react-bootstrap';
import { Card } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
const knifes=['https://i.ibb.co/0rKL2vK/knife3.jpg','https://i.ibb.co/Bf6dMZG/knife4.jpg','https://i.ibb.co/4fts5TH/knife1.jpg']
const SelectKnife = ({setCake,setCandle,setKnife}) => {
    const handleComponent=()=>{
        setCandle(false)
        setKnife(false)
        setCake(true)
    }
    return (
        <div className='Appdiv container'>
            <CardGroup>
 {knifes.map(knife=><Card>
    <Card.Img style={{height:'20rem'}} variant="top" src={knife} />
    <Card.Footer className='text-center'>
      <Button onClick={handleComponent}>Select a knife</Button>
    </Card.Footer>
  </Card>
  )}
  </CardGroup>
        </div>
    );
};

export default SelectKnife;
import React from 'react';
import { Card } from 'react-bootstrap';

const Event = ({event}) => {
    return (
        <div className="col-3">
            <Card>
              <Card.Header>Name: {event.name}</Card.Header>
      <Card.Body>
      <Card.Title> Personal Data </Card.Title>
      <Card.Text>
      <h1>Your age: {event.age}</h1> 
      <br />
      <h1>Description: {event.description}</h1>
      </Card.Text>
    </Card.Body>
  </Card>
         
            
            
        </div>
    );
};

export default Event;
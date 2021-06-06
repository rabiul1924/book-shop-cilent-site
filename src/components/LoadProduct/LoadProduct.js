import { Button } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { useHistory } from "react-router";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingBag } from '@fortawesome/free-solid-svg-icons'

const LoadProduct = (props) => {
    // console.log("check", props.event);
    const { _id, name, weight, price, imageURL } = props.event;
    const history = useHistory()
    const handleBuyNow = id => {
        // console.log(id);
        const url = `checkout/${id}`
        history.push(url)
    }
    return (
        <div className="col-md-4 ">
        <Card style={{ width: '18rem', margin:'20px', padding:'10px' }}>
              <Card.Img variant="top" src={imageURL} />
            <Card.Body>
         <Card.Title>{name}</Card.Title>
         <Card.Text>
        Price:   ${price} - 
        Weight: {weight}gm
          </Card.Text>
          {<Button className="btnStyle" variant="primary" onClick={()=>handleBuyNow(_id)}>Buy Now</Button>}
          </Card.Body>
       </Card>
    </div>
    );
};

export default LoadProduct;

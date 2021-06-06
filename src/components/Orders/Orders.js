import React, { useContext, useEffect, useState } from "react";
import { Col, Container, Row, Table } from "react-bootstrap";
import { UserContext } from "../../App";
import Table420 from "../Table420/Table420.js";

const Orders = () => {
    const [loggedinUser, setLoggedinUser] = useContext(UserContext);
    const [orderList , setOrderList] = useState([])

    useEffect(() => {
        fetch("https://glacial-brushlands-79275.herokuapp.com/orders")
            .then((res) => res.json())
            .then((data) => filterOrders(data));
    }, []);
    const filterOrders = (data) => {
        const filterData = data.filter(
            (order) => order.email == loggedinUser.email
        );
        setOrderList(filterData);
    };

 

    return (
        <Container>
            <Row>
                <Col>
                    <Row>
                        <Col md={6}>
                            <h3 className="text-center">Order Total:{orderList.length}{" "}</h3>
                        </Col>
                        <Col md={6}>
                            <h2 className="text-center text-danger">This Order Made by: {loggedinUser.email}</h2>
                        </Col>
                    </Row>
                    <Table striped bordered hover variant="dark">
                        <thead>
                            <tr>
                                <th className="bg-primary">Product Name</th> 
                                <th className="bg-danger">Email</th>
                                <th className="bg-success">Weight</th>
                                <th className="bg-danger">Price</th>
                                <th className="bg-warning">Delete</th>  
                            </tr>
                        </thead>
                    </Table>
                    {orderList.map((singleOrder) => {
                        return (
                            <div>

                                <div className="container">
                                    <Table420 singleOrder={singleOrder}></Table420> 
                                   
                                </div>
                            </div>
                        );
                    })}
                </Col>
            </Row>
        </Container>
    );
};

export default Orders;

import axios from "axios";
import React, { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";

const AddProduct = () => {
    const { register, handleSubmit, errors, weight, price } = useForm();
    const [imageURL, setIMageURL] = useState(null);

    const onSubmit = (data) => {
        const eventData = {
            name: data.name,
            weight: data.weight,
            price: data.price,
            imageURL: imageURL,
        };
        console.log(data);
        const url = `https://agile-savannah-86133.herokuapp.com/addEvent`;

        fetch(url, {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(eventData),
        }).then((res) => console.log("server side response", res));
    };

    const handleImageUpload = (event) => {
        console.log(event.target.files[0]);
        const imageData = new FormData();
        imageData.set("key", "0e874a2102e1e49a85a9632fd28794d8");
        imageData.append("image", event.target.files[0]);

        axios
            .post("https://api.imgbb.com/1/upload", imageData)
            .then(function (response) {
                setIMageURL(response.data.data.display_url);
            })
            .catch(function (error) {
                console.log(error);
            });
    };

    return (
        <Container>
            <h2 className="text-center">Adding Product Here</h2>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Form.Group>
                    <Form.Label>Name of The Product</Form.Label>
                    <Form.Control name="name" placeholder="Product Name" ref={register} />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Weight of Product</Form.Label>
                    <Form.Control name="weight" placeholder="Product Weight" ref={register} />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Price of Product</Form.Label>
                    <Form.Control name="price" placeholder="Product price" ref={register} />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Image of Product</Form.Label>
                    <Form.Control
                        name="exampleRequired" type="file" onChange={handleImageUpload} />
                </Form.Group>
                <input className="btn btn-primary" type="submit" />
            </Form>
        </Container>
    );
};

export default AddProduct;

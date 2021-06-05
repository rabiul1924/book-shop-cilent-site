import React from 'react';
import { useForm } from "react-hook-form";

const AddEvent = () => {
    const { register, handleSubmit, watch, errors } = useForm();
    
    
    const onSubmit = data => {
        const eventData = {
            name: data.name,
            age: data.age,
            description: data.description
            
          };
       
        const url = `http://localhost:5055/addEvent`;

         console.log(eventData)

         fetch(url, {
            method: 'POST', 
            headers: {
              'content-type': 'application/json'
            },
            body: JSON.stringify(eventData)
          })
          .then(res => console.log('server side response', res))
        };
    return (
        <div>

<form onSubmit={handleSubmit(onSubmit)}>
    
    <input name="name" defaultValue="Name" ref={register} />
    <br/>
    <input name="age" defaultValue="Age" ref={register} />
    <br/>
    <input name="description" defaultValue="Description" ref={register} />
    <br/>
    <input type="submit" />
  </form>
           
        </div>
    );
};

export default AddEvent;
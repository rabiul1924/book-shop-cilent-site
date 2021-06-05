import React from 'react';

const Event = ({event}) => {
    return (
        <div>
            <h1>{event.name}</h1>
            <h1>{event.age}</h1>
            <h1>{event.description}</h1>
        </div>
    );
};

export default Event;
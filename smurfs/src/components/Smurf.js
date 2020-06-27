import React from 'react';

const Smurf = props => {
    return (
        <div key={props.key} className='smurf-container'>
            <p>Name: {props.name}</p>
            <p>Age: {props.age}</p>
            <p>Height: {props.height}</p>
            <p>ID: {props.id}</p>
        </div>
    )
};

export default Smurf;
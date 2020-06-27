import React from 'react';
import { connect } from 'react-redux';
import { useForm } from 'react-hook-form';

import { fetchSmurfs, createSmurfs } from '../actions';

const NewSmurf = props => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data);
        props.createSmurfs(data);
        setTimeout(() => { props.fetchSmurfs(); }, 1000);
    }
    return (
        <form className="smurf_form"onSubmit={handleSubmit(onSubmit)}>
            <label>Name </label>
            <input name='name' ref={register} placeholder="Name"/>
            <label>Age </label>
            <input name='age' type="number" ref={register} placeholder="Age"/>
            <label>Height: </label>
            <input name='height' ref={register} placeholder="Height (in cm)"/>
            <input type='submit'/>
        </form>
    )
};

const mapStateToProps = state => {
    return state
};

export default connect(mapStateToProps, {fetchSmurfs, createSmurfs})(NewSmurf);
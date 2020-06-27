import React from 'react';
import { connect } from 'react-redux';
import { useForm } from 'react-hook-form';
import { fetchSmurfs, deleteSmurf } from '../actions';

const DeleteSmurf = props => {
    
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log('Delete Data In', data);
        props.deleteSmurf(data);
        setTimeout(() => { props.fetchSmurfs(); }, 1000);
    }
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
            <label>ID to Delete </label>
            <input name='id' type='number' ref={register} placeholder="enter a valid id"/>
            <button>Delete By ID</button>
        </form>
        </div>
    )
};

const mapStateToProps = state => {
    return state
;}

export default connect(mapStateToProps, {fetchSmurfs, deleteSmurf})(DeleteSmurf);
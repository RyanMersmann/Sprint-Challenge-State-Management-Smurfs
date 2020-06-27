import React from 'react';
import { connect } from 'react-redux';

import Smurf from './Smurf';
import { fetchSmurfs } from '../actions';

const SmurfList = props => {
    return (
        <div className='list'>
            <h2>Smurf Village Directory</h2>
            <button onClick={props.fetchSmurfs}>Fetch the Villagers</button>
            {props.initialized && !props.isLoading && (
                <div className='smurf-info'>
                    {props.smurfs.map(each => {
                        return (
                        <Smurf 
                            name={each.name}
                            age={each.age}
                            height={each.height}
                            id={each.id}
                        />
                        )
                    })}   
                </div>
            )}
        </div>
    )
};

const mapStateToProps = state => {
    return {
        smurfs: state.smurfs,
        isLoading: state.isLoading,
        initialized: state.initialized
    }
}

export default connect(mapStateToProps, {fetchSmurfs})(SmurfList);
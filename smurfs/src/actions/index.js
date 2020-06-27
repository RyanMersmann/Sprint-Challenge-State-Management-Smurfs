import axios from 'axios';

//FETCH
export const FETCH_SMURFS_START = 'FETCH_SMURFS_START';
export const FETCH_SMURFS_SUCCESS = 'FETCH_SMURFS_SUCCESS';
export const FETCH_SMURFS_ERROR = 'FETCH_SMURFS_ERROR';
//CREATE
export const CREATE_SMURFS_START = 'CREATE_SMURFS_START';
export const CREATE_SMURFS_SUCCESS = 'CREATE_SMURFS_SUCCESS';
export const CREATE_SMURFS_ERROR = 'CREATE_SMURFS_ERROR';
//DELETE
export const DELETE_SMURFS_START = 'DELETE_SMURFS_START';
export const DELETE_SMURFS_SUCCESS = 'DELETE_SMURFS_SUCCESS';
export const DELETE_SMURFS_ERROR = 'DELETE_SMURFS_ERROR';


//FETCH data from API - FETCH THE SCHMURFS FROM THE SERVER.JS FILE
export const fetchSmurfs = () => {
    return dispatch => {
        dispatch({ type: FETCH_SMURFS_START});
        axios
            .get('http://localhost:3333/smurfs')
            .then(response => {
                console.log('API response', response.data);
                dispatch({ type: FETCH_SMURFS_SUCCESS, payload: response.data})
            })
            .catch(error => {
                console.log('Error', error);
                dispatch({ type: FETCH_SMURFS_ERROR, payload: error})
            });
    };
};

//POST Request to API - CREATE A SCHMURF
export const createSmurfs = data => {
    return dispatch => {
        dispatch({ type: CREATE_SMURFS_START });
        axios
            .post('http://localhost:3333/smurfs', {
                name: data.name,
                age: Number(data.age),
                height: data.height,
                id: data.id
                }
            )
        .then(response => {
            console.log('Create Response', response);
            dispatch({ type: CREATE_SMURFS_SUCCESS });
        })
        .catch(error => {
            console.log(error);
            dispatch({ type: CREATE_SMURFS_ERROR, payload: error });
        });
            
    };
};

//DELETE THEM SCHMURFS
export const deleteSmurf = data => {
    return dispatch => {
        dispatch({ type: DELETE_SMURFS_START});
        axios
            .delete(`http://localhost:3333/smurfs/${Number(data.id)}`)
            .then(response => {
                console.log('Delete Response', response);
                dispatch({ type: DELETE_SMURFS_SUCCESS });
            })
            .catch(error => {
                console.log('Delete Error', error);
                dispatch({ type: DELETE_SMURFS_ERROR, payload: error});
            })
    }
}
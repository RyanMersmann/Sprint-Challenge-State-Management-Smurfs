import {
    FETCH_SMURFS_START,
    FETCH_SMURFS_SUCCESS,
    FETCH_SMURFS_ERROR,
    CREATE_SMURFS_START,
    CREATE_SMURFS_SUCCESS,
    CREATE_SMURFS_ERROR
} from '../actions';
    
    const initialState = {
        smurfs: [],
        isLoading: false,
        error: null,
        initialized: false,
        id: ""
    };
    
    export const reducer = (state = initialState, action) => {
        switch (action.type) {
            case FETCH_SMURFS_START:
                return {
                    ...state,
                    isLoading: true
                };
            case FETCH_SMURFS_SUCCESS:
                return {
                    ...state,
                    isLoading: false,
                    initialized: true,
                    smurfs: action.payload
                };
            case FETCH_SMURFS_ERROR:
                return {
                    ...state,
                    isLoading: false,
                    initialized: false,
                    error: action.payload
                };
            case CREATE_SMURFS_START:
                return {
                    ...state,
                    isLoading: true,
                    initialized: false
                };
            case CREATE_SMURFS_SUCCESS:
                return {
                    ...state,
                    isLoading: false,
                    initialized: true
                };
            case CREATE_SMURFS_ERROR:
                return {
                    ...state,
                    isLoading: false,
                    initialized: false,
                    error: action.payload
                };
            default:
                return state
        };
    };
import axios from 'axios';

export const FETCH_SMURF = 'Fetch Smurf'
export const SMURFS_FETCHED = 'Smurfs Fetched'
export const FAILED_SMURF_FETCH = 'Failed Smurf Fetch'
export const ADD_SMURF = 'Add Smurf'
export const ADD_ERROR_VALUE = 'Add Error Value '

export const fetchSmurfs = () => dispatch => {
    axios.get('http://localhost:3333/smurfs').then(
        res => {
            console.log(res);
            dispatch(smurfsFetched(res.data))
        }
    )
        .catch(
            err => dispatch(addError(err))
        )
}
export const smurfsFetched = (data) => {
    return ({ type: SMURFS_FETCHED, payload: data })
}
export const failedSmurfFetchs = () => {
    return ({ type: FAILED_SMURF_FETCH })

}
export const addSmurf = (name, nickname, position, summary) => {
    return ({ type: ADD_SMURF, payload: name, nickname, position, summary })

}
export const addError = (newError) => {
    return ({ type: ADD_ERROR_VALUE, payload: newError })
}


// http://localhost:3333/smurfs API GET endpoint
//Task List:
//1. xAdd a thunk action called fetchSmurfs that triggers a loading status display in our application, performs an axios call to retreive smurfs from our server, saves the result of that call to our state and shows an error if one is made.
//2. xAdd a standard action that allows us to add new smurf (including the name, nickname, position, summary)
//3. xAdd a standard action that allows us to set the value of the error message slice of state.
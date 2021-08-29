
import { FETCH_SMURF, SMURFS_FETCHED, FAILED_SMURF_FETCH, ADD_SMURF, ADD_ERROR_VALUE } from "../actions"
import { applyMiddleware, createStore } from "redux";
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

export const initialState = {
    smurfs: [
        { name: 'billybob', nickname: 'old bob', position: 'chef', summary: 'Cooks for the whole village', id: 1 },
        { name: 'billyRob', nickname: 'old Rob', position: 'janitor', summary: 'Cleans for the whole village', id: 2 },
        { name: 'billyStan', nickname: 'old Stan', position: 'hunter', summary: 'Hunts for the whole village', id: 3 }
    ],
    IsLoading: true,
    errorMessage: ''
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_SMURF:
            return {
                ...state
            }
        case SMURFS_FETCHED:
            return {
                ...state, smurfs: action.payload, IsLoading: false
            }
        case FAILED_SMURF_FETCH:
            return {
                ...state,
                IsLoading: false
            }
        case ADD_SMURF:
            return {
                ...state,
                smurfs: [...state.smurfs,
                action.payload]
            }

        case ADD_ERROR_VALUE:
            return {
                ...state,
                IsLoading: false,
                errorMessage: action.payload
            }
        default:
            return state

    }
}

export const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));
//**************DO NOT EDIT ANY CODE BEYOND THIS POINT**************//
export default reducer;

//Task List:
//1. Adds the following state values into the initialState:
//  - xan array of smurfs
//  - xa boolean indicating if the app is loading
//  - xa string indicating a possible error message

//2. xAdd in the arguments needed to complete a standard reducer function.
//3. xAdd in a reducer case to accomidate the start of a smurf fetch.
//4. xAdd in a reducer case to accomidate the successful smurf api fetch.
//5. xAdd in a reducer cases to accomidate the failed smurf api fetch.
//6. xAdd in a reducer case to accomidate adding a smurf (including the name, nickname, position, summary and an internally generated id) into your smurf list.
//7. xAdd in a reducer case that adds in a value to the error message.

//Task List:
//1. xAdd in all necessary components and libary methods.
//2. xCreate a store that includes thunk and logger middleware support.
//3. xWrap the App component in a react-redux Provider element.
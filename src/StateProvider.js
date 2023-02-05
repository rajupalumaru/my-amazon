//setup Data Layer
// we need this to track the Basket

import { createContext, useContext, useReducer } from "react";



//this is the DataLayer
export const StateContext = createContext();

//Build the provider
export const StateProvider = ({ reducer, initialState, children }) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
)
//this is how we use it inside od component
export const useStateValue=()=>useContext(StateContext);
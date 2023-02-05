export const initialState = {
    basket: [],
    user: null
};

function reducer(state, action) {
    console.log(action)
    switch (action.type) {
        case 'ADD TO BASKET':
            //Logic for Adding Item To Basket
            return {
                ...state,
                basket: [...state.basket, action.item]
            }
        case 'REMOVE FROM BASKET':
            //Logic for Adding Item from Basket
            return { ...state }
        default:
            return state;
    }
}
export default reducer;
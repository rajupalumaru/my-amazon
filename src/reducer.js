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

            //we cloned to the basket
            const newBasket = [...state.basket];
            //we check to see if prduct exists
            const index = state.basket.findIndex((basketItem) => basketItem.id === action.id);
            if (index >= 0) {
                //item exists in Basket,remove it...
                newBasket.splice(index, 1)
            } else {
                console.warn(`Cant Remove the product(id:${action.id}) as it's no basket`)
            }
            return { ...state, basket: newBasket }
        default:
            return state;
    }
}
export default reducer;
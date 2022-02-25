import CartActionTypes from "./cart.types";

export const toggleCartHidden = () => ({
  type: CartActionTypes.TOGGLE_CART_HIDDEN,
});


// for checkout arrows and the remove button in the checkout page
export const addItem = (item) => ({  // for right arrow
  type: CartActionTypes.ADD_ITEM,
  payload: item,
});

export const clearItemFromCart = (item) => ({  // for remove button
  type: CartActionTypes.CLEAT_ITEM_FROM_CART,
  payload: item,
});

export const removeItem = item =>({  // for left arrow
  type: CartActionTypes.REMOVE_ITEM,
  payload:item
})

export const clearCart = ()=>({
  type:CartActionTypes.CLEAR_CART
})

import { createContext, useReducer } from "react";
import reducer, { initialState } from "./reducer";
import { storeData } from "../Data";
export const StoreContext = createContext(null);

 export const StoreProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer,{...initialState, products:storeData});

  const addToBasket = (product) => {
    const updatedBasket = [...state.products, product]; 
    updatedprice(updatedBasket);

    dispatch({
      type: "add",
      payload: updatedBasket,
    });
  };

  const removeFromBasket = (product) => {
    const updatedBasket = state.products.filter(
      (currentProduct) => currentProduct.id !== product.id
    );

    updatedprice(updatedBasket);

    dispatch({
      type: "remove",
      payload: updatedBasket,
    });
  };

  const updatedprice = (products) => {
    let total = 0;
    products.forEach((product) => {
      total += product.price;
    });
    dispatch({
      type: "update price",
      payload: total,
    });
  };

  const value = {
    total: state.total,
    products: state.products,
    addToBasket,
    removeFromBasket,
  };

  return (
    <StoreContext.Provider value={value}>
      {children}
    </StoreContext.Provider>
  );
};

// export default StoreProvider;

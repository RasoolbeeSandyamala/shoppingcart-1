import React from 'react';
import Navbars from '../components/Navbar';
import { useContext } from 'react';
import { StoreContext } from '../context -and-reducer/StoreContext';
import BasketProduct from '../components/BasketProduct';

const Basket = () => {
  const { products,total} = useContext(StoreContext);
  return (
    <>
    <div>
      <Navbars />
      <h3>Your Basket</h3>
      <p>Total: $ {total}</p>
      
    </div>
    <div>
    {products.length === 0 ? (
          <p>Your basket is empty!</p>
        ) : (
          products.map((product, i) => (
            <BasketProduct key={i} item={product} />
          ))
        )}
    </div>
    </>
  );
}

export default Basket;

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
      <h3 className='text-center my-5 text-warning fw-bold'>Your Basket</h3>
      
      
    </div>
    <div>
     {
          products.map((product, i) => (
            <BasketProduct key={i} item={product} />
          ))
        }
    </div>
    </>
  );
}

export default Basket;

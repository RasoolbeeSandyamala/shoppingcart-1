import React, { useContext } from 'react';
import { StoreContext } from '../context -and-reducer/StoreContext';

const BasketProduct = ({item}) => {

  const {removeFromBasket} = useContext(StoreContext)
  const handleRemove =() =>{
   removeFromBasket (item);
  }
  return (
    <>
    <div>
      <img src={item.thumbnail} alt="" />
     <p>{item.name}</p>
      <p>${item.price.toFixed(2)}</p>
      <button className='btn' onClick={handleRemove} >Remove</button>
      </div>
    </>
  );
}

export default BasketProduct;

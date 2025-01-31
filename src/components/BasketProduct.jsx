import React, { useContext } from 'react';
import { StoreContext } from '../context -and-reducer/StoreContext';

const BasketProduct = ({item}) => {

  const {removeFromBasket} = useContext(StoreContext)
  const handleRemove =() =>{
   removeFromBasket (item);
  }
  return (
    <>
    <div className=" border border-1 shadow container
     d-flex w-50 my-3 p-3 gap-5 justify-content-evenly flex-wrap">
      <img src={item.thumbnail} alt="" width={'300px'} />
      <div className='m-auto fw-bold fs-3'>
      <p>{item.title}</p>
      <p>${item.price.toFixed(2)}</p>
      <button className='btn btn-danger' onClick={()=>{handleRemove()}} >Remove</button>
      </div>
      </div>
    </>
  );
}

export default BasketProduct;

import React from 'react';
import Navbars from '../components/Navbar';
import { storeData } from '../Data';
import Product from '../components/Product'
const Home = () => {
  return (
    <>
    <div>
    <Navbars />
      <h1 className='text-center text-success my-4' > Cart Using UseContext And UseReducer</h1>
      <h2 className='text-warning'>New In</h2>
      <div className='d-flex justify-content-between flex-wrap gap-3'>
      {storeData.map((item,i)=>(
        <Product
        key={i}
        item={item} 
        />
      ))}
      </div>
      </div>
    </>
  );
}

export default Home;

import { useContext } from "react";
import { StoreContext } from "../context -and-reducer/StoreContext";


const Product = ({item}) => {
    const {addToBasket} = useContext(StoreContext)
    const handleAdd = () => {
       addToBasket(item);
    }
  return (
    <>
      <div className=" border border-1 shadow p-3">
        <img src={item.thumbnail} alt="" style={{width:'300px'}} />
       <p className="text-center border-top border-2 fs-3 fw-bold">{item.title}</p> 
       <p className=" text-center text-warning fs-3 fw-bold"> ${item.price}</p>
       <button className="btn btn-success" onClick={handleAdd} >Add to basket</button>
      </div>
      <div></div>
    </>
  );
}

export default Product;

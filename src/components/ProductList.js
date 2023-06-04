import React,{useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ProductComponent from './ProductComponent';
import axios from 'axios';
import {setProduct} from "../redux/actions/productAction"

const ProductList = () => {
    const products=useSelector((state)=>state.allProducts.products)
    const dispatch =useDispatch();
   
    const fetchProducts=async()=>{

        const response=await axios.get("https://jsonplaceholder.typicode.com/posts")
        .catch((err)=>{
            console.log(err)
        });

        dispatch(setProduct(response.data));
    }

        useEffect(()=>{
           fetchProducts();
        },[])

        console.log(products);
    

   
  return (
    <div>
      {/* <h1>ProductList</h1> */}
      <ProductComponent/>
    </div>
  )
}

export default ProductList

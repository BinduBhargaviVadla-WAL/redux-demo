import React, { useEffect } from 'react';
import axios from 'axios';
import { useSelector,useDispatch } from 'react-redux';
import { selectedProduct } from '../redux/actions/ProductAction';

export default function ProductComponent() {
    const product = useSelector((state)=>state.product)
    const dispatch = useDispatch();
    console.log("get product",product);
    // const {id,title,category} = products[0]
    const fetchProduct = async ()=>{
        const response = await axios.get("https://fakestoreapi.com/products/1").catch((error)=>{
            console.log(error);
        })
        console.log("productComponent",response.data)
        dispatch(selectedProduct(response.data))
    }
    useEffect(()=>{
        fetchProduct();
    },[])
  return (
    <div>ProductComponent</div>
  )
}

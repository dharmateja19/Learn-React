import { useEffect, useState } from "react"
import Skeleton from "./Skelton";
import {useParams} from "react-router-dom"
import useGetSingleProduct from "../hooks/useGetSingleProduct";
import { addItems } from "../store/cartSlice";
import { useDispatch } from "react-redux";

const ProductDetails = () => {
    const {productId} = useParams();
    const singleProduct = useGetSingleProduct(productId)
    const dispatch = useDispatch()
    if(singleProduct === null){
        return <Skeleton/>
    }
    const {image,title,description,price,rating} = singleProduct;
    const handleCartItem = ()=>{
        dispatch(addItems(singleProduct))
    }
    return (
        <div className="border border-b-amber-800 m-5 flex flex-col px-10 py-5 max-w-5xl mx-auto">
            <img className="w-50" src={image} alt="tshirt"/>
            <h2 className="font-semibold text-xl">{title}</h2>
            <p>{description}</p>
            <p className="text-gray-600">{rating.rate} rating | {rating.count}</p>
            <p className="text-gray-600">Price: {price}</p>
            <button onClick={handleCartItem} className="bg-orange-400 text-white px-4 py-2 rounded mt-2 cursor-pointer">Add To Cart</button>
        </div>
    )
}
export default ProductDetails
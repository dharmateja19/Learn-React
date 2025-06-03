import { useEffect, useState } from "react"
import Skeleton from "./Skelton";
import {useParams} from "react-router-dom"
import useGetSingleProduct from "../hooks/useGetSingleProduct";
const ProductDetails = () => {
    const {productId} = useParams();
    const singleProduct = useGetSingleProduct(productId)
    
    if(singleProduct === null){
        return <Skeleton/>
    }
    const {image,title,description,price,rating} = singleProduct;
    return (
        <div className="border border-b-amber-800 m-5 flex flex-col px-10 py-5 max-w-2xl">
            <img className="w-50" src={image} alt="tshirt"/>
            <h2 className="font-semibold ">{title}</h2>
            <p>{description}</p>
            <p>{rating.rate} rating | {rating.count}</p>
            <p>Price: {price}</p>
        </div>
    )
}
export default ProductDetails
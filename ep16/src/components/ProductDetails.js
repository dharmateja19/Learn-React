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
        <div className="product">
            <img src={image} alt="tshirt"/>
            <h2>{title}</h2>
            <p>{description}</p>
            <p>{rating.rate} rating | {rating.count}</p>
            <p>Price: {price}</p>
        </div>
    )
}
export default ProductDetails
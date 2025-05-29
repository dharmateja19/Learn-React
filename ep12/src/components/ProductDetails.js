import { useEffect, useState } from "react"
import Skeleton from "./Skelton";
import {useParams} from "react-router-dom"
const ProductDetails = () => {
    const [singleProduct,setSingleProduct] = useState(null);
    const {productId} = useParams();
    useEffect(()=>{
        fetchData();
    })
    const fetchData = async ()=>{
        const data = await fetch(`https://fakestoreapi.com/products/${productId}`);
        const resData = await data.json()
        setSingleProduct(resData)
    }
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
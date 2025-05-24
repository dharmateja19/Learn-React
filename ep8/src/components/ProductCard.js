import { useEffect, useState } from "react";
import Product from "./Product.js";
// named export
export const ProductCard = () => {
    console.log("product card rendered")
    const [listOfProducts, setListOfProducts] = useState([])
    // const array = useState(productitems);
    // console.log(array);
    // const listOfProducts = array[0];
    // const setListOfProducts = array[1];
    // let listOfProducts = productitems;
    useEffect(()=>{
        // console.log("useEffect called");
        fetchData()
    },[]);

    const fetchData = async ()=>{
        const data = await fetch("https://fakestoreapi.com/products");
        const resData = await data.json()
        console.log(resData);
        setListOfProducts(resData)
    }

    return (
        <div>
            <button
                onClick={() => {
                    // listOfProducts = listOfProducts.filter(product => product.rating.rate >= 4)
                    // console.log(listOfProducts)
                    const filteredProduct = listOfProducts.filter(product => product.rating.rate >= 4);
                    setListOfProducts(filteredProduct);
                }}
                style={{ marginTop: "10px" }}>
                Top Rated Product
            </button>
            <div className="productcard">
                {listOfProducts.map((product) => {
                    return <Product key={product.id} product={product} />;
                })}
            </div>
        </div>
    );
};

import { useEffect, useState } from "react";
import Product from "./Product.js";
import Skeleton from "./Skelton.js";
import { Link } from "react-router-dom";

// named export
export const ProductCard = () => { 
    // state variable
    const [listOfProducts, setListOfProducts] = useState([]);
    const [filterProduct,setFilterProduct] = useState([])
    const [searchText , setSearchText] = useState("");

    useEffect(()=>{
        // console.log("useEffect called");
        fetchData()
        // const timer = setInterval(()=>{
        //     console.log("fn called")
        // },1000)
        // return ()=>{
        //     clearInterval(timer)
        // }
    },[]);

    const fetchData = async ()=>{
        const data = await fetch("https://fakestoreapi.com/products");
        const resData = await data.json()
        // console.log(resData);
        setListOfProducts(resData)
        setFilterProduct(resData)
    }

    // console.log("product card rendered")

    return listOfProducts.length === 0 ? <Skeleton/> : (
        <div>
            <div style={{ marginTop: "10px" }}>
                <input type="text" onChange={(e)=>{
                    setSearchText(e.target.value)
                }} value={searchText}/>
                <button onClick={()=>{
                    console.log(searchText);
                    const filteredData = listOfProducts.filter((product)=>{
                        return product.title.toLowerCase().includes(searchText.toLowerCase())
                    });
                    setFilterProduct(filteredData)
                }}>Search</button>
            </div>
            <button
                onClick={() => {
                    // listOfProducts = listOfProducts.filter(product => product.rating.rate >= 4)
                    // console.log(listOfProducts)
                    const filteredProduct = filterProduct.filter(product => product.rating.rate >= 4);
                    setFilterProduct(filteredProduct);
                }}
                style={{ marginTop: "10px" }}>
                Top Rated Product
            </button>
            <div className="productcard">
                {filterProduct.map((product) => {
                    return <Link style={{"textDecoration":"none","color":"black"}} key={product.id} to={`/products/${product.id}`}><Product product={product} /></Link>;
                })}
            </div>
        </div>
    );
};

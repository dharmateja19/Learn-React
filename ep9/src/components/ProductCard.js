import { useEffect, useState } from "react";
import Product from "./Product.js";
import Skeleton from "./Skelton.js";
import { productitems } from "../../utils/constants.js";
// named export
export const ProductCard = () => { 
    // state variable
    const [listOfProducts, setListOfProducts] = useState([]);
    const [filterProduct,setFilterProduct] = useState([])
    const [searchText , setSearchText] = useState("");

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
        setFilterProduct(resData)
    }

    console.log("product card rendered")

    // consitional rendering
    // if(listOfProducts.length === 0){
    //     return <Skeleton/>
    // }

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
                    const filteredProduct = listOfProducts.filter(product => product.rating.rate >= 4);
                    setListOfProducts(filteredProduct);
                }}
                style={{ marginTop: "10px" }}>
                Top Rated Product
            </button>
            <div className="productcard">
                {filterProduct.map((product) => {
                    return <Product key={product.id} product={product} />;
                })}
            </div>
        </div>
    );
};

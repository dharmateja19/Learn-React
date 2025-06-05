import { useEffect, useState } from "react";
import Product, { HOF } from "./Product.js";
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

    const HOFComponent = HOF(Product)

    return listOfProducts.length === 0 ? <Skeleton/> : (
        <div>
            <div className="mt-8 flex space-x-10">
                <div className="ml-5 mt-2.5 flex">
                    <input className="border border-gray-700 px-4 py-2 mr-5 rounded-md" type="text" onChange={(e)=>{
                        setSearchText(e.target.value)
                    }} value={searchText}/>
                    <button className="bg-blue-700 px-4 py-2 rounded-md text-white" onClick={()=>{
                        console.log(searchText);
                        const filteredData = listOfProducts.filter((product)=>{
                            return product.title.toLowerCase().includes(searchText.toLowerCase())
                        });
                        setFilterProduct(filteredData)
                    }}>Search</button>
                </div>
                <button className="bg-blue-700 px-4 py-2 rounded-md text-white"
                    onClick={() => {
                        // listOfProducts = listOfProducts.filter(product => product.rating.rate >= 4)
                        // console.log(listOfProducts)
                        const filteredProduct = filterProduct.filter(product => product.rating.rate >= 4);
                        setFilterProduct(filteredProduct);
                    }}
                    style={{ marginTop: "10px" }}>
                    Top Rated Product
                </button>
            </div>
    
            <div className="grid grid-cols-5 gap-2 max-w-8xl mx-auto ">
                {filterProduct.map((product) => {
                    return (
                        <Link style={{"textDecoration":"none","color":"black"}} key={product.id} to={`/products/${product.id}`}>
                            {product.rating.rate >= 4 ? <HOFComponent product={product}/> : <Product product={product} />}
                        </Link>
                    )
                })}
            </div>
        </div>
    );
};

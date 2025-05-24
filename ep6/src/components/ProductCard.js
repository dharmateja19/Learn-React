import { useState } from "react";
import Product from "./Product.js";
import { productitems } from "../utils/constants.js";
// named export
export const ProductCard = () => {
    const [listOfProducts, setListOfProducts] = useState(productitems)
    // const array = useState(productitems);
    // console.log(array);
    // const listOfProducts = array[0];
    // const setListOfProducts = array[1];
    // let listOfProducts = productitems;
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

import Product from "./Product.js";
import { productitems } from "../utils/constants.js";
// named export
export const ProductCard = ()=>{
    return (
        <div className="productcard">
            {
                productitems.map((product)=>{
                    return (
                        <Product key={product.id} product={product}/>
                    )
                })
            }
        </div>
    )
}
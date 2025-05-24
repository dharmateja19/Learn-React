const Product = ({product})=>{
    const {price,title,rating,image} = product;
    return (
        <div className="product">
            <img src={image} alt="tshirt"/>
            <h1>{title}</h1>
            <p>{rating.rate} rating</p>
            <p>Price: {price}</p>
        </div>
    )
}
export default Product;
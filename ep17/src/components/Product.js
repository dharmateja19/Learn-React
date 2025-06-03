const Product = ({product})=>{
    const {price,title,rating,image} = product;
    return (
        <div className="flex flex-col items-center justify-center border border-gray-600 px-4 py-10 m-4 h-100 hover:bg-gray-200">
            <img className="w-35"src={image} alt="tshirt"/>
            <h2 className="font-semibold">{title}</h2>
            <p>{rating.rate} rating</p>
            <p>Price: {price}</p>
        </div>
    )
}
export default Product;
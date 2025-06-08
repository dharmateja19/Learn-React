import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { clearItems } from '../store/cartSlice'

const Cart = () => {
    const cartItems = useSelector((store) => store.cart.cartItems)
    const dispatch =useDispatch()
    const clearCartItemHandler = ()=>{
        dispatch(clearItems())
    }
    return (
    <div className='max-w-5xl mx-auto mt-10'>
        <div className='flex items-center justify-between' >
        <h1 className='font-bold text-xl'>Cart - {cartItems.length}</h1>
        <button onClick={clearCartItemHandler} className='bg-black text-white rounded-md px-4 py-2 cursor-pointer'>Clear Cart</button>
        </div>
        {
            cartItems.map((item)=>{
                const {image,title,description,price,rating} = item;
                return (
                    <div key= {title} className="border border-b-amber-800 m-5 flex flex-col px-10 py-5 max-w-5xl mx-auto">
                        <img className="w-50" src={image} alt="tshirt"/>
                        <h2 className="font-semibold text-xl">{title}</h2>
                        <p>{description}</p>
                        <p className="text-gray-600">{rating.rate} rating | {rating.count}</p>
                        <p className="text-gray-600">Price: {price}</p>
                    </div>
                )
            })
        }
    </div>
  )
}

export default Cart
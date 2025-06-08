import React, { useRef, useState } from 'react'

const Ref = () => {
    let x = 0
    const [y,setY] = useState(0)
    const ref = useRef(0) // ref = {current:0}
    const ref2 = useRef(null)

    const focusInputHandler = ()=>{
        ref2.current.focus()
    }
    
  return (
    <div className='max-w-5xl mx-auto border border-black rounded m-10 px-5 py-2'>
        <h1>UseRef</h1>
        <button className="bg-blue-400 rounded border border-black px-4 py-2" onClick={()=>{
            x = x + 1
            console.log(x)
        }}>Increment X</button>
        <p className='font-bold text-2xl'>X = {x}</p>
        <button className="bg-blue-400 rounded border border-black px-4 py-2" onClick={()=>{
            setY(y+1)
        }}>Increment Y</button>
        <p className='font-bold text-2xl'>State Y = {y}</p>
        <button className="bg-blue-400 rounded border border-black px-4 py-2" onClick={()=>{
            ref.current = ref.current + 1;
            console.log("ref value : ",ref.current);
            
        }}>Increment Ref</button>
        <p className='font-bold text-2xl'>Ref = {ref.current}</p>
        <input ref={ref2} type='text' className='border border-black' placeholder="Full name"/>
        <button onClick={focusInputHandler} className='border bg-blue-300'>Click</button>
    </div>
  )
}

export default Ref
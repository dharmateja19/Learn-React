import { useMemo, useState } from "react";
import nthPrime from "../utils/Constants";

const Memo = ()=>{
    const [num,setNum] = useState(0);
    const [isDark,setIsDark] = useState(false)
    const cachedvalue = useMemo(()=> nthPrime(num),[num])
    return (
        <div className={`${isDark && "bg-gray-800 text-white"} max-w-4xl mx-auto border border-gray-500 mt-10`}>
            <button onClick={()=>{setIsDark(!isDark)}} className="border bg-blue-500 m-5 px-4 py-2 rounded-xl">Toggle</button>
            <h1 className="text-3xl font-bold">use memo</h1>
            <input className="bg-gray-400 border border-black" type="number" value={num} onChange={(e)=>setNum(e.target.value)}/>
            <p>Nth prime - {cachedvalue}</p>
        </div>
    )
}
export default Memo;
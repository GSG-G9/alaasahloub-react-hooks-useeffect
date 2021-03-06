import React , {useState , useEffect} from 'react'

export default function Exercise1() {

    const [count , setCount] =  useState(0);

    const incrementCount = ()=>{
        setCount(count + 1)
    }
    useEffect(() => {

            document.addEventListener('mousedown' , incrementCount);

        return ()=>{
            document.removeEventListener('mousedown' , incrementCount)
        }
    })
    return (
        <div>
            <p>count is : {count}</p>
        </div>
    )
}

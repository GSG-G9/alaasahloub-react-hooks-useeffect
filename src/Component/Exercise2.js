import React, {useState , useEffect} from 'react'

export default function Exercise2() {

    const [x , setX] = useState(0);
    const [y , setY] = useState(0);

    const widthHalf = window.innerWidth/2;
    
    const mouseEvent= (e)=>{
        setX(e.clientX);
        setY(e.clientY)
    }

    useEffect(() => {

            document.addEventListener('mousemove' , mouseEvent)
        return () => {
            document.removeEventListener('mouseover' , mouseEvent)
        }
    })
    return (
        <div style={{backgroundColor: x> widthHalf ? 'tomato' : 'blue' }}>
            <p>I am now on 
                X: {x}
                Y: {y}
            </p>
        </div>
    )
}

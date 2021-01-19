import React, {useState, useEffect} from 'react'

export default function Exercise4() {

    const [value , setSearch] = useState('');
    const [img, setImage] = useState('');

    useEffect(() => {
        setImage(`https://robohash.org/${value}.png`)
    }, [value])
    return (
        <div>
            <input type="text" onChange={(e)=>setSearch(e.target.value)}/>
            <div className="result">
            <img className='image' src={img} alt='' />

            </div>
        </div>
    )
}

import React, {useState, useEffect} from 'react'

export default function Exercise3() {

    const [value , setSearch] = useState('dog');
    const [data , setData] = useState([]);



    useEffect(() => {
        const controler = new AbortController();
        const {signal} = controler;
        fetch(`https://api.giphy.com/v1/gifs/search?api_key=PkLMA66vlyxeGmJ25QS1TBwE3jxumeWq&q=${value}&limit=25&offset=0&rating=g&lang=en` , {signal})
        .then((res)=>res.json())
        .then((res) => setData(res.data))
        .catch((m)=> console.log(m))
        return()=>{
            controler.abort();
        }
    },[value])
    return (
        <div>
            <input type="text" onChange={(e)=>setSearch(e.target.value)}/>
            <div className="result">
            {data.map((e)=>{
                return <iframe src={e.embed_url} title="img"></iframe>
            })}
            </div>
        </div>
    )
}

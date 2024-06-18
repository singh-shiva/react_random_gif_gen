import { useEffect, useState } from 'react';
import './Random.css';
import axios from 'axios';
const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;
const Random = ()=>{
    const[gif,setGif] = useState('');
    async function fetchData(){
        const url = `https://api.giphy.com/v1/gifs/random?api_key=Hob5lGHGCHHmdrQd4VlMuWERWN4OKlD9&tag=&rating=g`;
        const {data} = await axios.get(url);
        const imgsource = data.data.images.downsized_large.url;
        setGif(imgsource);
    }
    useEffect(()=>{
        fetchData();
    },[])
    function gifGenerateHandler(){
         fetchData();
    }
    return(
        <div className='random-box'>
            <h2 className='random-box-head'>A RANDOM GIF</h2>
            <img src={gif} className='gif-img'/>
            <button onClick={gifGenerateHandler} className='random-gen-btn'>Generate</button>
        </div>
    )
}
export default Random;
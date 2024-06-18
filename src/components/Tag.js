import { useEffect, useState } from 'react';
import './Tag.css';
import axios from 'axios';
import Spinner from './Spinner';
const apikey = process.env.REACT_APP_GIPHY_API_KEY;
const Tag = ()=>{
    const[gif,setGif] = useState('');
    const[tag,setTag] = useState('');
    const[loading, setLoading] = useState(false);
    async function fetchData(){
        setLoading(true);
        const url = `https://api.giphy.com/v1/gifs/random?api_key=${apikey}&tag=${tag}&rating=g`
        const {data} = await axios.get(url);
        const imgsource = data.data.images.downsized_large.url;
        setGif(imgsource);
        setLoading(false);
    }
    useEffect(()=>{
        fetchData();
    },[tag]);
    function fetchGifHandler(){
        fetchData();
    }
    function onChangeHandler(event){
        setTag(event.target.value);
    }
    return(
        <div className='tag-box'>
            <h2 className='tag-box-head'>RANDOM GIF</h2>
            {
              loading?(<Spinner/>):(<img src={gif} alt='not found' className='tag-img'/>)
            }
            <input type="text" placeholder="Search" className='search-box' onChange={onChangeHandler} value={tag}/>
            <button className='tag-gen-btn' onClick={fetchGifHandler}>GENERATE</button>
        </div>
    )
}
export default Tag;
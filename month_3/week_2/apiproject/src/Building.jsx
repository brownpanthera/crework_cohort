import React, {useState, useEffect} from 'react';
import axios from 'axios';

function Building() {
    function dataFetch() {
        const baseURL = 'https://animechan.vercel.app/api/random';
        // const baseURL = 'https://kitsu.io/api/edge/anime'
        axios.get(baseURL).then((response) => {
            setAnime(response.data);
            console.log(response.data);
        });
    }
    const [anime, setAnime] = useState([]);
    useEffect(() => {
    }, []);
    return (
        <div className='animeDiv'>
            <h3>{anime.anime}</h3>
            <h4>{anime.character}</h4>
            <p>{anime.quote}</p>
            <button type='button' className='btn' onClick={dataFetch}>Get Quote</button>
        </div>
    );
}
export default Building;
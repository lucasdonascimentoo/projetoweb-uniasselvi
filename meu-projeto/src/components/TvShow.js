import {useState, useEffect} from 'react'
import styles from '../styles/MovieCard.module.css'
import MovieCard from './MovieCard'
import Loading from './Loading'

function TvShow(){
    const [seriesList, setSeriesList] = useState([])
    const SeriesFavoritos = ()=>{
        const options = {
            method: 'GET',
            headers: {
            accept: 'application/json',
            Authorization: 'Bearer ' + process.env.REACT_APP_TOKEN
            }
        };
        
            fetch('https://api.themoviedb.org/3/tv/top_rated?language=en-US&page=1', options)
            .then(response => response.json())
            .then(response => setSeriesList(response.results))
    }

    useEffect(()=>{
        SeriesFavoritos()
    }, [])

    
    return(
        <div className={styles.movie_tvshow_container}>
            {seriesList.length === 0 && <p className={styles.carregando}><Loading /></p>}
            {seriesList.map((tvshow)=>(
                <MovieCard movie={tvshow} type={'tv'}/>
            ))}
        </div>
    )
}

export default TvShow
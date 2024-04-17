import {useState, useEffect} from 'react'
import MovieCard from './MovieCard'
import styles from '../styles/MovieCard.module.css'
import Loading from './Loading'
function Movie(){
    const [movieList, setMovieList] = useState([])
    const FilmesFavoritos = ()=>{
        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: 'Bearer '+ process.env.REACT_APP_TOKEN
        }
    }
        // process.env.REACT_APP_TOKEN

        fetch('https://api.themoviedb.org/3/movie/top_rated?language=pt-BR&page=1', options)
        .then(response => response.json())
        .then(response => setMovieList(response.results))
    }

    useEffect(()=>{
        FilmesFavoritos()
    }, [])

    console.log(movieList)

    return(
        <div className={styles.movie_tvshow_container}>
            {movieList.length === 0 && <p className={styles.carregando}><Loading /></p>}
            {movieList.map((movie)=>(
                <MovieCard movie={movie} type={'movie'}/>
            ))}
        </div>
    )

}

export default Movie
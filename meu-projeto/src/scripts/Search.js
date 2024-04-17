import {useState, useEffect} from 'react'
import { useSearchParams, useLocation } from 'react-router-dom'
import MovieCard from "../components/MovieCard"
import Loading from '../components/Loading'
import styles from '../styles/MovieCard.module.css'


function Search_Movies(){
    const { search } = useLocation()
    const query = new URLSearchParams(search).get('q')
    const [multi, setMulti] = useState([])
    const Search = () => {
    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer ' + process.env.REACT_APP_TOKEN
        }
      };

      fetch(`https://api.themoviedb.org/3/search/multi?query=${query}&include_adult=false&language=pt-BR&page=1`, options)
        .then(response => response.json())
        .then(response => setMulti(response.results))
}
        useEffect(()=>{
            Search()
        }, [query])

        console.log(multi)
        if (multi.length > 0)
          return(
            <div>
                <h1>Resultados para: {query}</h1>
              <div className={styles.movie_tvshow_container}>
                {multi.length === 0 && <p><Loading/></p>}
                  {multi.map((movie)=>(
                    <MovieCard movie={movie} type = {movie.media_type}/>
                  ))}
              </div>
            </div>
            )
        return (
            <div className={styles.carregando}>
                <h1>Nenhum resultado encontrado para: {query}</h1>
            </div>
        )

}

export default Search_Movies
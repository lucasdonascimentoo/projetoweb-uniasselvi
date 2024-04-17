import {FaStar} from 'react-icons/fa'
import {Link} from 'react-router-dom'
import styles from '../styles/MovieCard.module.css'

function MovieCard({ movie, type }) {
    console.log(movie)
    if (type === 'movie')
        return (
            <div>
                <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} />
                <h3>{movie.title}</h3>
                <p className={styles.paragrafo}><FaStar />{movie.vote_average? movie.vote_average.toFixed(1):""}</p>
                <Link className={styles.linkMovieCard} to={`/movie/${movie.id} `}>Detalhes</Link>
            </div>
        )
    if (type === 'tv')
        return (
            <div>
                <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} />
                <h3>{movie.name}</h3>
                <p className={styles.paragrafo}><FaStar />{movie.vote_average.toFixed(1)}</p>
                <Link className={styles.linkMovieCard} to={`/tvshow/${movie.id} `}>Detalhes</Link>
            </div>
        )     
    return(
        <></>
    )
};


export default MovieCard
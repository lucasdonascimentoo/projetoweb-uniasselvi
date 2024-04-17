import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from "react-router-dom";
import { FaStar } from 'react-icons/fa'
import { MdLocalMovies } from "react-icons/md"; 
import { BsHourglassSplit, BsFillFileEarmarkTextFill } from 'react-icons/bs'
import { BiSolidCameraMovie } from "react-icons/bi";
import { RiTvFill } from "react-icons/ri"
import styles from '../styles/PageMovie.module.css'
import Loading from '../components/Loading';

function PageMovie() {
    const { id } = useParams()
    const [movie, setMovie] = useState(null)
    const [loading, setLoading] = useState(true)

    const PaginaFilme = async () => {
        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: 'Bearer ' + process.env.REACT_APP_TOKEN
            }
        }

        const res = await fetch(`https://api.themoviedb.org/3/movie/${id}?language=pt-BR`, options)
        const data = await res.json()

        setMovie(data)
        setLoading(false)
    }

    useEffect(() => {
        PaginaFilme()
    }, [])

    if (loading) {
        return <div className={styles.carregando}><Loading/></div>
    }

    return (
            <>
                <div className={styles.link}>
                        <Link className={styles.icon} to="/filmes"><BiSolidCameraMovie /></Link>
                        <Link className={styles.icon} to="/series"><RiTvFill /></Link>
                </div>
                <div className={styles.movie_card_container}>
                    <div className={styles.movie_card}>
                        <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} />
                
                        {movie.tagline? <p className={styles.paragrafo}><i>“{movie.tagline}”</i></p> : <p></p>}
                        <h3 className={styles.paragrafo}>{movie.title}</h3>
                        <p className={styles.paragrafo}><FaStar />{movie.vote_average.toFixed(1)}</p>
                        <h3 className={styles.paragrafo}><BsHourglassSplit /> Duração:</h3>
                        <p>{movie.runtime} minutos</p>
                        <h3 className={styles.paragrafo}><MdLocalMovies/>Gênero:</h3>
                        <p className={styles.paragrafo}>{movie.genres[0].name}</p>
                        <div>
                            <h3 className={styles.paragrafo}><BsFillFileEarmarkTextFill /> Sinopse:</h3>
                            <p className={`${styles.paragrafo} ${styles.sinopse}`}>{movie.overview}</p>
                        </div>
                    </div>
                </div>
            </>
    )
    
}

export default PageMovie
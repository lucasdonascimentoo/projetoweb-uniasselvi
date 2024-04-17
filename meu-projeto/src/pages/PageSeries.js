import {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import { Link } from "react-router-dom";
import {FaStar} from 'react-icons/fa'
import {BsHourglassSplit, BsFillFileEarmarkTextFill} from 'react-icons/bs'
import { BiSolidCameraMovie } from "react-icons/bi";
import { RiTvFill } from "react-icons/ri"
import styles from '../styles/PageMovie.module.css'
import Loading from '../components/Loading'

function PageSeries(){
    const {id} = useParams()
    const [serie, setSeries] = useState([])
    
    const PaginaSerie = () => {
        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: 'Bearer ' + process.env.REACT_APP_TOKEN
            }
        };

        fetch(`https://api.themoviedb.org/3/tv/${id}?language=pt-BR`, options)
            .then(response => response.json())
            .then(response => setSeries(response))
}
        useEffect(()=>{
            PaginaSerie()
        }, [])

console.log(serie)
    return (
    <>
        <div className={styles.link}>
                        <Link className={styles.icon} to="/filmes"><BiSolidCameraMovie /></Link>
                        <Link className={styles.icon} to="/series"><RiTvFill /></Link>
            </div>
        <div className={styles.movie_card_container}>
                    <div className={styles.movie_card}>
                    {serie.length === 0 && <p className={styles.carregando}><Loading /></p>}
                        <img src={`https://image.tmdb.org/t/p/w500${serie.poster_path}`}/>
                        {serie.tagline? <p className={styles.paragrafo}><i>“{serie.tagline}”</i></p> : <p></p>}
                        <h3 className={styles.paragrafo}>{serie.name}</h3>
                        <p className={styles.paragrafo}><FaStar/>{serie.vote_average? serie.vote_average.toFixed(1):""}</p>
                        <h3 className={styles.paragrafo}><BsHourglassSplit/> Duração:</h3>
                        <p className={styles.paragrafo}>{serie.number_of_episodes} episódios</p>
                        <p className={styles.paragrafo}>{serie.number_of_seasons} temporada(s)</p>
                        <div>
                            <h3 className={styles.paragrafo}><BsFillFileEarmarkTextFill/> Sinopse:</h3>
                            <p className={styles.paragrafo}>{serie.overview}</p>
                        </div>

                    </div>
        </div>
    </>
)
}
export default PageSeries
import {Swiper, SwiperSlide} from 'swiper/react'
import {Autoplay} from 'swiper/modules'
import {useState, useEffect} from 'react'
import { BiSolidCameraMovie } from "react-icons/bi";

import styles from '../styles/FilmesSeries.module.css'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/autoplay'

function SlideFilmes(){
    const [movies, setMoviesList] = useState([])
    const [error, setError] = useState(null)

    const FilmesFavoritos = ()=>{
        const options = {
            method: 'GET',
            headers: {
            accept: 'application/json',
            Authorization: 'Bearer ' + process.env.REACT_APP_TOKEN
        }}

console.log(process.env.REACT_APP_TOKEN)

fetch('https://api.themoviedb.org/3/movie/top_rated?language=pt-BR&page=1', options)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`)
            }
            return response.json()
        })
        .then(response => setMoviesList(response.results))
        .catch(error => setError(error.message))
    }

    useEffect(()=>{
        FilmesFavoritos()
    }, [])

    return(
        <>
        <div>
                <h1 className={styles.titulo}><BiSolidCameraMovie />Filmes</h1>
            </div>
            <div className={styles.filmes_series}>
                <Swiper
                autoplay={{delay: 2500}}
                modules={[Autoplay]}>
                    {!error && (
                        <>
                        {movies.map(slide => (
                            <SwiperSlide key={slide.id}>
                                <img src={`https://image.tmdb.org/t/p/w500${slide.poster_path}`} alt={slide.name}/>
                            </SwiperSlide>
                        ))}
                        {!movies.length && (
                            <SwiperSlide>
                                <div className={styles.empty}>No movies found!</div>
                            </SwiperSlide>
                        )}
                        </>
                    )}
                    {error && (
                        <SwiperSlide>
                            <div className={styles.error}>{error}</div>
                        </SwiperSlide>
                    )}
                </Swiper>
            </div>
            
        </>
    )
}

export default SlideFilmes
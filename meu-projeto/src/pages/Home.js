import {Link} from 'react-router-dom'


import SlideFilmes from '../scripts/SlideFilmes'
import SlideSeries from '../scripts/SlidesSeries'

import styles from '../styles/Home.module.css'
function Home(){
    return(
        <section className={styles.home_container}>
            <Link className={styles.link} to="./Filmes"><SlideFilmes/></Link>
            <Link className={styles.link} to="./Series"><SlideSeries/></Link>
        </section>
    )
}

export default Home
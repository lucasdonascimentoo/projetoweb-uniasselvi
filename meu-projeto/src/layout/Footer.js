import{FaInstagram} from 'react-icons/fa'
import { Link } from "react-router-dom";
import styles from '../styles/Footer.module.css'

function Footer(){
    return (
        <footer className={styles.footer}>
            <p className={styles.copy_right}>
                <span>CinePipoca</span> &copy; 
                <Link className={styles.link} target="_blank" to='https://github.com/lucasdonascimentoo'> Lucas do Nascimento</Link>
            </p>
        </footer>
    )
}

export default Footer
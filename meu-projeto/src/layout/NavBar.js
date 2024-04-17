import {useState} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import styles from '../styles/NavBar.module.css'
import logo from '../img/logo_cinepipoca.png'
import {BiSearchAlt2} from 'react-icons/bi'
const NavBar = () =>{
        const [search, setSearch] = useState("")
        const navigate = useNavigate()

        const handleSubmit = (e) => {
            e.preventDefault()
            
            if(!search) return

            navigate(`/search?q=${search}`)
            setSearch("")
        }

    return(
        <div className={styles.navbar_container}  >
            <div>
                <Link className={styles.link} to="/">
                        <div className={styles.link_container}>
                            <img className={styles.imglogo} src={logo} alt="cinepipoca"/>
                            <h2>CinePipoca</h2>
                        </div>
                </Link>
            </div>
            <div className={styles.navbar_child_search}>
                <form onSubmit={handleSubmit}>
                    <input type = "text" placeholder="Busque aqui" onChange={(e)=> setSearch(e.target.value)} value={search}/> 
                        <button type="submit">
                            <BiSearchAlt2/>
                        </button>
                </form>
            </div>
        </div>
    )
}

export default NavBar
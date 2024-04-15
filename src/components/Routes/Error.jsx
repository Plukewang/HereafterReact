import { Link, useRouteError } from "react-router-dom"
import styles from "../../styles/Page.module.css";
import linkStyle from "../../styles/Link.module.css"
import Cover from "../Cover";
import { useRef } from "react";

export default function Error(){
    let error = useRouteError();
    let imageRef = useRef(null)
    console.log(error)

    return (
        
        <div className={styles.background}>
        <Cover />
            <h1>Oh shoot!</h1>
            <h2>You aren't supposed to be here!</h2>

            <img ref={imageRef} src="../../error.png" alt = 'error image' height={200}/>
            <h1>Error {error.status}</h1>

            <p>{error.data}</p>        

            <Link to={'/'}><button className={linkStyle.link}><p>Take me back home</p></button></Link>    
        </div>
    )
}
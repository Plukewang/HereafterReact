import { useRouteError } from "react-router-dom"
import styles from "../../styles/Page.module.css";
import Cover from "../Cover";

export default function Error(){
    let error = useRouteError();
    console.log(error)
    return (
        
        <div className={styles.background}>
        \<Cover />
            <h1>Oh shoot!</h1>
            <h2>You aren't supposed to be here!</h2>
            <p>{error.status+" "+error.statusText}</p>
            
        </div>
    )
}
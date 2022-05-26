import { Link } from "react-router-dom"
import "../css/components/logement.css"

export function Logement(props){
    
    const logement = props.logement

    return <article className="logement">
        <Link to={"/" + logement.id}>
            <img src={logement.cover} alt="" />
            <p>{logement.title}</p>
        </Link>
    </article>
}
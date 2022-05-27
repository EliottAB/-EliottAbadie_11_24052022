import LOGO from "../assets/LOGO.svg" 
import { Link } from "react-router-dom"
import "../css/components/header.css"

export function Header(props){

    return <header>
        <img src={LOGO} fill="white" alt="Kasa logo"/>
        <nav>
            <Link className= {props.homeStyle} to="/">Accueil</Link>
            <Link className= {props.aboutStyle} to="/about">A Propos</Link>
        </nav>

    </header>

}
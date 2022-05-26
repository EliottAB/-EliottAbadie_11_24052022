import React from "react"
import { Link } from "react-router-dom"
import { Header } from "../components/Header"
import "../css/pages/404.css"

export function Error404(){

    return <React.Fragment>
    <Header/> 
        <main className="main404">
            <h1>404</h1>
            <p>Oups! La page que vous demandez n'existe pas.</p>
            <Link className="goback" to="/">Retourner sur la page d’accueil</Link>
        </main>
    </React.Fragment>
}
import React from "react"
import { Header } from "../components/Header"
import { Caroussel } from "../components/Caroussel"
import { InfoListElement } from "../components/InfoListElement"
import { Footer } from "../components/Footer"
import { Error404 } from "./404"
import "../css/pages/logement.css"
import datas from "../logements.json"

export function Logement(){

    const urlId = window.location.pathname.replace("/", "")
    const logement = datas.find(logement => logement.id === urlId)
        if (logement === undefined){ 

            return <Error404/>

        }else{

            return <React.Fragment>
                <Header/>
                <main className="mainlogement">
                    <Caroussel pictures={logement.pictures}/>
                    <ul className="infolist">
                        <InfoListElement title="Description" text="Vous serez à 50m du canal Saint-martin où vous pourrez pique-niquer l'été et à côté de nombreux bars et restaurants. Au cœur de Paris avec 5 lignes de métro et de nombreux bus. Logement parfait pour les voyageurs en solo et les voyageurs d'affaires. Vous êtes à1 station de la gare de l'est (7 minutes à pied). "/>
                    </ul>
                </main>
                <Footer/>
            </React.Fragment>

        }
    

}
import React from "react"
import { Header } from "../components/Header"
import { Caroussel } from "../components/Caroussel"
import { InfoListElement } from "../components/InfoListElement"
import { Footer } from "../components/Footer"
import { Error404 } from "./404"
import "../css/pages/logement.css"
import datas from "../logements.json"
import STARPINK from "../assets/starpink.svg"
import STARGREY from "../assets/stargrey.svg"

export function Logement(){

    const urlId = window.location.pathname.replace("/", "")
    const logement = datas.find(logement => logement.id === urlId)
    let stars = []

    function getStars(){
        for (let i = 0; i < 5; i++) {
            if (parseInt(logement.rating) > i) {
                stars.push(<img src={STARPINK} alt="" key={"star" + i}></img>)
            }else{
                stars.push(<img src={STARGREY} alt="" key={"star" + i}></img>)
            }
        }
        return stars
    }

    
        if (logement === undefined){ 

            return <Error404/>

        }else{

            return <React.Fragment>
                <Header/>
                <main className="mainlogement">
                    <Caroussel pictures={logement.pictures}/>
                    
                    <div>
                        <div className="firstinfos">
                            <h2>{logement.title}</h2>
                            <p>{logement.location}</p>
                        </div>

                        <div className="host">
                            <p>{logement.host.name}</p>
                            <img src={logement.host.picture} alt="" />
                        </div>
                    </div>

                    <div>
                        <ul>
                            {logement.tags.map(tag => <li key={tag}>{tag}</li>)}
                        </ul>

                        <div>
                            {getStars()}
                        </div>
                    </div>

                    <ul className="infolist">
                        <InfoListElement title="Description" text="Vous serez à 50m du canal Saint-martin où vous pourrez pique-niquer l'été et à côté de nombreux bars et restaurants. Au cœur de Paris avec 5 lignes de métro et de nombreux bus. Logement parfait pour les voyageurs en solo et les voyageurs d'affaires. Vous êtes à1 station de la gare de l'est (7 minutes à pied). "/>
                        <InfoListElement title="Équipements" text={logement.equipments}/>
                    </ul>
                </main>
                <Footer/>
            </React.Fragment>

        }
    

}
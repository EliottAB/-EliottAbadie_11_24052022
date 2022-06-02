import React from "react"
import { Header } from "../components/Header"
import { Caroussel } from "../components/Caroussel"
import { Collapse } from "../components/Collapse"
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
                stars.push(<img src={STARPINK} alt="full star" key={"star" + i} className="star"></img>)
            }else{
                stars.push(<img src={STARGREY} alt="empty star" key={"star" + i} className="star"></img>)
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
                    
                    <div className="flexinfos">
                        <div className="firstline">
                            <div className="firstinfos">
                                <h2>{logement.title}</h2>
                                <p>{logement.location}</p>
                            </div>

                            <ul className="tags">
                                {logement.tags.map(tag => <li key={tag}>{tag}</li>)}
                            </ul>
                        </div>

                        <div className="secline">
                            <div className="host">
                                <p>{logement.host.name}</p>
                                <img src={logement.host.picture} alt="Host" />
                            </div>

                            <div className="stars">
                                {getStars()}
                            </div>
                        </div>
                    </div>

                    <ul className="collapse">
                        <Collapse title="Description" text={logement.description}/>
                        <Collapse title="Équipements" text={logement.equipments}/>
                    </ul>
                </main>
                <Footer/>
            </React.Fragment>

        }
    

}
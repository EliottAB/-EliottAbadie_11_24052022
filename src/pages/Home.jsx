import { Link } from "react-router-dom"
import React from "react"
import { Header } from "../components/Header"
import { Banner } from "../components/Banner"
import { Logement } from "../components/Logement"
import HOMEIMG from "../assets/homeimg.png"
import datas from "../logements.json"
import "../css/pages/home.css"

export function Home(){

    return <React.Fragment>
        <Header homeStyle="underline"/>
        <main className="mainhome">
            <Banner background={HOMEIMG} type="home"/>
            <section>
                {datas.map(data=><Logement key={data.id} logement={data}/>)}
            </section>
        </main>
    </React.Fragment>

}
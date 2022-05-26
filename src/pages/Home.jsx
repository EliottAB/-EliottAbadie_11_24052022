import { Link } from "react-router-dom"
import React from "react"
import { Header } from "../components/Header"
import { Banner } from "../components/Banner"
import HOMEIMG from "../assets/homeimg.png"

export function Home(){

    return <React.Fragment>
        <Header homeStyle="underline"/>
        <main>
            <Banner background={HOMEIMG} type="home"/>
        </main>
    </React.Fragment>

}
import { Header } from "../components/Header"
import { Banner } from "../components/Banner"
import { InfoListElement } from "../components/InfoListElement"
import { Footer } from "../components/Footer"
import ABOUTIMG from "../assets/aboutimg.png"
import "../css/pages/about.css"

export function About(){

    return <div>
        <Header aboutStyle="underline"/>
        <main className="mainabout">
            <Banner background={ABOUTIMG} type="about"/>
            <ul className="infolist">
                <InfoListElement title="Fiabilité" text="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes."/>
                <InfoListElement title="Respect" text="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."/>
                <InfoListElement title="Service" text="Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question."/>
                <InfoListElement title="Sécurité" text="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."/>
            </ul>
        </main>
        <Footer/>
    </div>

}
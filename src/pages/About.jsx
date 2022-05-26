import { Header } from "../components/Header"
import { Banner } from "../components/Banner"
import ABOUTIMG from "../assets/aboutimg.png"

export function About(){

    return <div>
        <Header aboutStyle="underline"/>
        <main>
            <Banner background={ABOUTIMG} type="about"/>
        </main>
    </div>

}
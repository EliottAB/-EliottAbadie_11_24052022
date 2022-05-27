import LOGO from "../assets/LOGO.svg" 
import "../css/components/footer.css"

export function Footer(){

    return <footer>
        <img src={LOGO} alt="Kasa Logo" />
        <p>© 2020 Kasa. All rights reserved</p>
    </footer>

}
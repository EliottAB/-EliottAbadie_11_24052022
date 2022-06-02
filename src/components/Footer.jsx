import React from "react"
import LOGO from "../assets/LOGO.svg" 
import "../css/components/footer.css"

export function Footer(props){

    return <React.Fragment>
        <div className="blank"></div>
        <footer className={props.classname}>
            <img src={LOGO} alt="Kasa logo" />
            <p>© 2020 Kasa. All rights reserved</p>
        </footer>
    </React.Fragment>

}
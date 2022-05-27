import "../css/components/infoListElement.css"
import ROW from "../assets/row.svg"
import { useState, useEffect } from "react"

export function InfoListElement(props){

    const [isopen, setOpen] = useState()
    const [text, setText] = useState()

    useEffect(()=>{
        setText("")
    }, [])

    function handleClickRow(e){
        e.preventDefault()
        if(isopen === true){
            setOpen(false)
            incrementText("", 300)
        }else{
            setOpen(true)
            incrementText(<p>{props.text}</p>, 0)
        }
    }

    function open(element){
        if(element === "row"){
            if(isopen === true){
                return {transform: "rotate(180deg)"}
            }else{
                return {transform: "rotate(0deg)"}
            }
        }else{
            if(isopen === true){
                return {maxHeight: "30em"}
            }
        }
    }

    function incrementText(content, time){
        setTimeout(() => {
            setText(content)
        }, time);
    }
    
    return <li style={open("list")}>
        <h3>{props.title}</h3>
        <input style={open("row")} onClick={handleClickRow} type="image" src={ROW} alt="row"/>
        {text}
    </li>

}
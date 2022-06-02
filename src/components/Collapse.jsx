import "../css/components/collapse.css"
import ROW from "../assets/row.svg"
import { useState, useEffect } from "react"

let canClose = true

export function Collapse(props){

    const [isopen, setOpen] = useState()
    const [text, setText] = useState()

    useEffect(()=>{
        setText(null)
    }, [])

    function handleClickRow(e){
        if(canClose === true){
            canClose = false
            e.preventDefault()
            if(isopen === true){
                setOpen(false)
                incrementText(null, 300)
            }else{
                setOpen(true)
                incrementText(props.title === "Équipements" ? <ul>{props.text.map(el=><li className="equipement">{el}</li>)}</ul> : <p>{props.text}</p>, 0)
            }
        }
    }

    function open(element){
        if(element === "row"){
            if(isopen === true){
                return {transform: "rotate(0deg)"}
            }else{
                return {transform: "rotate(180deg)"}
            }
        }else{
            if(isopen === true){
                return {maxHeight: "50em"}
            }
        }
    }

    function incrementText(content, time){
        setTimeout(() => {
            setText(content)
            canClose = true
        }, time);
    }
    
    return <li style={open("list")}>
        <h3>{props.title}</h3>
        <input style={open("row")} onClick={handleClickRow} type="image" src={ROW} alt="row"/>
        {text}
    </li>

}
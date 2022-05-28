import { useState, useEffect } from "react"
import ROW from "../assets/row.svg"
import "../css/components/caroussel.css"

export function Caroussel(props){

    const [index, setIndex] = useState()

    useEffect(()=>{
        setIndex(0)
    }, [])

    function changeImage(way, indexBlock){
        if ((index === undefined) || (way === 1 && index === props.pictures.length -1) || (way === -1 && index === 0)) {
            setIndex(indexBlock)
        }else{
            setIndex(i=>i + way)
        }
    }

    return <div className="caroussel">
        <input onClick={()=> changeImage(-1, props.pictures.length - 1)} type="image" src={ROW} alt="row"/>
        <img src={props.pictures[index]} alt="" />
        <input onClick={()=> changeImage(1, 0)} type="image" src={ROW} alt="row"/>
    </div>

}
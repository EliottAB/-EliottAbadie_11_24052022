import { useState, useEffect } from "react"
import ROW from "../assets/row.svg"
import "../css/components/caroussel.css"
let canChange = true

export function Caroussel(props){

    const [index, setIndex] = useState()
    const [index2, setIndex2] = useState()

    useEffect(()=>{
        setIndex(0)
        setIndex2(0)
    }, [])

    useEffect(()=>{
        setTimeout(() => {
            setIndex2(index)
            document.querySelector(".animator").style.opacity = "1"
            setTimeout(() => {
                canChange = true 
            }, 100);
        }, 400);
    }, [index])

    function changeImage(way, indexBlock){
        if(canChange === true){
            canChange = false
            document.querySelector(".animator").style.opacity = "0"
            if ((index === undefined) || (way === 1 && index === props.pictures.length -1) || (way === -1 && index === 0)) {
                setIndex(indexBlock)
            }else{
                setIndex(i=>i + way)
            }
        }
    }

    return <div className="caroussel">
        <input onClick={()=> changeImage(-1, props.pictures.length - 1)} type="image" src={ROW} alt="row"/>
        <p className="imgcount">{`${index+1} / ${props.pictures.length}`}</p>
        <img src={props.pictures[index]} alt="" />
        <img className="animator" src={props.pictures[index2]} alt="" />
        <input onClick={()=> changeImage(1, 0)} type="image" src={ROW} alt="row"/>
    </div>

}
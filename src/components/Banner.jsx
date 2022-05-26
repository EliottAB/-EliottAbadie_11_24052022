import "../css/components/banner.css"

export function Banner(props){

    return <div className="banner">
        <img src={props.background} alt="" />
        {props.type === "home" ? <p>Chez vous, partout et ailleurs</p> : <div className="shadow"></div>}
    </div>

}
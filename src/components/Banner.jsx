import "../css/components/banner.css"

export function Banner(props){

    return <div className={"banner " + props.type}>
        <img src={props.background} alt="banner background" />
        {props.type === "home" ? <p>Chez vous, partout et ailleurs</p> : <div className="shadow"></div>}
    </div>

}
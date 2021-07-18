const Card=({img,title,subtitle})=>{
    return(
        <div className="card">
            <img className="image" src={img}></img>
            <div className="title"><h2>{title}</h2></div>
            <div className="subtitle">You have consumed {subtitle} cals today</div>

        </div>
    )
}
export default Card
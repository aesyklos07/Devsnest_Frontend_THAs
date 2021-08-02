const CalorieBox = ({id, item, HandleDelete})=>{
    return(
        <>
        <div className="caloriebox">
            <button onClick={()=>HandleDelete(id)}>DELETE </button>
            <div className="food">
                <h2>{item.name}</h2>
                <p> you have consumed {item.cal} </p>
            </div>
        </div>
        </>
    );
};

export default CalorieBox;
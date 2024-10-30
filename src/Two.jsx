import React from "react";


function Som({tittle,name,img}){
    return(
        <div className="alfa">
            <img src={img}  />
            <h1>{tittle}</h1>
            <p>{name}</p>
        </div>
    )
}

export default Som
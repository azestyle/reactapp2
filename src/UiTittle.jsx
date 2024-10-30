import React from "react";

function Tittle({name, email}){
    return(
       <div className="uitxt">
        <h1>Məlumatlar</h1>
        <p>Ad:{name}</p>
        <p>Email:{email}</p>
       </div>
    )
}

export default Tittle;
import React, { useState } from 'react'

function Zak(){
    const [value, setValue] = useState(0);
   function getMore(){
     return setValue(value+1)
    };
    function getOne(){
       if(value>0){
        return setValue(value-1)
       }
    };

    return(
        <div>
           <p>{value}</p>
            <button onClick={getOne}>azalt beni</button>
            <button onClick={getMore}> artir beni</button> 
        </div>
       
        
    );
}

export default Zak


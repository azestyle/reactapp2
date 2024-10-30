import React from "react";


function EmailImput({value,onChange}){
return(
    <div>
        <label>email:</label>
        <input type="email" 
         value={value}
         onChange={el=>onChange(el.target.value)}
         />
    </div>
)
}

export default EmailImput;
import React from "react";

function NameInput({value,onChange}){
return(
    <div>
        <label>ad:</label>
        <input type="text" 
        value={value}
        onChange={el=>onChange(el.target.value)}
        />
    </div>
)
};

export default NameInput;
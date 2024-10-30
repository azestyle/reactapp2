import React, { useState } from "react";


function Mah() {

  const [value, setValue] = useState(60);
  const [check, checked] = useState(false);
  function timer() {
    
    if(!check){
        checked(true)
       let zaman =  setInterval(() => {
       setValue((getinterval) => {
        if (getinterval > 0) {
          return getinterval - 1;
        } else {
          clearInterval(zaman);
          checked(false)
          return 60;
        }
      });
    }, 1000); 
    }
     
  }
  return (
    <div>
      <h1>timer</h1>
      <p>{value}</p>
      <button onClick={timer}> basla </button>
    </div>
  );
}

export default Mah;

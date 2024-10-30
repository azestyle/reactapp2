import React, { useState} from 'react';
import NameInput from './NameInp';
import EmailImput from './EmailImp';

function Form({onSubmit}){
const [name, setname] = useState('');
const [email, setemail] = useState('');
return(
    <form className='formtxt' onSubmit={(el)=>{
      el.preventDefault();
      onSubmit({name,email});
    }}>
       <NameInput value={name} onChange={setname}/> 
       <EmailImput value={email} onChange={setemail}/> 
       <input type="submit"/>   
    </form>
);
};

export default Form;
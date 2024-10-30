import './style.scss';
import Som from './Two';
import Zak from './Zakir';
import Mah from './Mahir';
import Form from './Form';
import Tittle from './UiTittle';
import { useState } from 'react';

function App() {
  const [data, setdata] = useState(false);
  let Arr=[
    {tittle:'fizika', namme:'temel ders',img:'https://picsum.photos/id/236/200/300'},
    {tittle:'kimya', namme:'kimyevi prosedur',img:'https://picsum.photos/id/237/200/300'},
    {tittle:'riyaziyat', namme:'elmin acari',img:'https://picsum.photos/id/238/200/300'}
  ]
   let New= Arr.map((cart,index)=>{
   return <Som key={index} tittle={cart.tittle} name={cart.namme} img={cart.img}/>
   });
  return (
    <div className="App">
      <div className='pictssection'>
        {New}
      </div>
     <div className='calculate'>
      <Zak/>
     </div>
     <div className='timer'>
      <Mah/>
     </div>
     <div className='form'>
      <Form onSubmit={(data)=>setdata(data)}/>
     </div>
     <div className='formlist'>
      {data&& <Tittle name={data.name} email={data.email}/>}
     </div>
    </div>
  );
}

export default App;

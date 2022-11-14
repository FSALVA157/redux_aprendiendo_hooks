import { useEffect, useState } from "react";
import { Message } from "./Message";

export const SimpleForm = () => {
    const [stateForm, setStateForm] = useState({
        userName: 'Fernando',
        Email: 'xxavierargentino@gmail.com',        
    })

    const {userName, Email} = stateForm;
    
    const setValueForm = ({target}) => {
      const {name, value} = target;
      
      setStateForm({
           ...stateForm,
            [name]: value
           });
    };

    useEffect(() => {
//        console.log('Primer Carga!');          
    }, [])

    useEffect(() => {
  //    console.log('Email Actualizado!');          
    }, [Email])
    
    

  return (
    <>
        <h1>Formulario Simple</h1>
        <hr />
        <input type="text"
               name="userName"
               placeholder="Name"
               className="form-control mt-2"
               value={userName}
               //onChange={(e) => setStateForm({...stateForm, name: e.target.value})}
               onChange={setValueForm}
         />
         <input type="email"
               name="Email"
               placeholder="Email"
               className="form-control mt-2"
               value={Email}
               //onChange={(e) => setStateForm({...stateForm, email: e.target.value})}
               onChange={setValueForm}
               
         />
         {
          (userName === "Fernando") && <Message/>

          }
         
    </>
  )
}

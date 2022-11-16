import { useRef, useState } from "react"

 
 
 export const FocusScreen = () => {

    const inputRef = useRef()

    const onClick = () =>{
       inputRef.current.select();
     
       setnombre(inputRef.current.value);
    }

    const [nombre, setnombre] = useState("Extraño")
 
 
    return (
     <>
      <h1>Focus Screen</h1>
      <h2>Bienvenido/a {nombre}</h2>
      <hr />
      <input
        ref={inputRef}
        type="text" 
        className="form-control"
        placeholder="Ingrese su nombre"        
         />

         <button
          className="btn btn-warning mt-3"
          onClick={onClick}
          >Set Focus</button>
     
     </>
   )
 }
 
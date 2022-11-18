import { useState } from "react";
import { useCounter } from "../hooks"
import { Small } from "./Small";


export const Memorize = () => {

const {counter, increment} = useCounter(7);
const [show, setShow] = useState(true);

  return (
    <>
        <h1>Counter <Small value={counter} /></h1>
        <hr />
        <button
        onClick={() => {
            increment();
          }}        
         className="btn btn-warning mt-2"
         >Sumar
         </button>
         <button
         onClick={() => {
            setShow(!show)
          }}
          className="btn btn-outline-primary mt-2"
          >Show/Hidden {JSON.stringify(show)}</button>
    </>
    
  )
}

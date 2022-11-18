import { useMemo, useState } from "react";
import { useCounter } from "../hooks"

const heavyStuff = (valor = 100) => {
  for (let index = 0; index < valor; index++) {
    console.log('contando....');    
  }
  console.log(`Se han realizado ${valor} iteraciones...`);
}

export const MemoHook = () => {

const {counter, increment} = useCounter(5000);
const [show, setShow] = useState(true);
const heavyStuffMemorized = useMemo(() => heavyStuff(counter), [counter])

  return (
    <>
        <h1>Counter <small>{counter}</small></h1>
        <h4>{heavyStuffMemorized}</h4>
        <hr />
        <button
        onClick={() => {
            increment();
          }}        
         className="btn btn-primary mt-2"
         >Sumar
         </button>
         <button
         onClick={() => {
            setShow(!show)
          }}
          className="btn btn-outline-danger mt-2"
          >Show/Hidden {JSON.stringify(show)}</button>
    </>
    
  )
}

import { useCounter } from "../hooks/useCounter"



export const CounterWithCustomHook = () => {

  const {counter, increment, decrement, reset} = useCounter();

  return (
    <>
        <h1>Counter with Hook: {counter}</h1>
        <hr />
        <button className="btn btn-primary" onClick={()=> increment()} >Suma</button>
        <button className="btn btn-secondary" onClick={()=> decrement()} >Resta</button>
        <button className="btn btn-warning" onClick={()=> reset()} >Reset</button>    
    </>
    
  )
}

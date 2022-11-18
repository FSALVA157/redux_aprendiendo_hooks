import { useCallback, useMemo, useState } from "react"
import { ShowIncrement } from "./ShowIncrement";



export const CallBackHook = () => {

const [counter, setCounter] = useState(15)

const increment = useCallback(
  () => {
    setCounter((value)=>value + 1)
  },
  [],
)

  return (
    <>
        <h1>Counter {counter}</h1>
        <hr />
        <ShowIncrement increment={increment}/>
    </>
  )
}

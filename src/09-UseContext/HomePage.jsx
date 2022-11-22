import { useContext } from "react"
import { UserContext } from "./context/UserContext"



export const HomePage = () => {

  const {user} =  useContext(UserContext)

  return (
  <>
        <h1>Home Page <small>{user?.nombre}</small></h1>
        <hr />
    

    </> 
  )
}

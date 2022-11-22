import { useContext } from "react"
import { UserContext } from "./context/UserContext"



export const LoginPage = () => {
  const {user, setUser}  = useContext(UserContext)
  
  return (
    <>
        <h1>Login Page</h1>
        <hr />
      <pre>
        {
          JSON.stringify(user, null, 3)
        }
      </pre>
      <p>
        <button 
        className="btn btn-warning mt-3"
        onClick={() => setUser({
          nombre: "Ricardo Darín",
          id: 123,
          email: "darin@gmail.com"
        })}>Reset</button>
      </p>
    </> 
  )
}

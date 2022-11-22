import { useState } from "react"
import { UserContext } from "./UserContext"

// const user = {
//   nombre: "Fernando",
//   id: 123,
//   email: 'xxavierargentino@gmail.com',
// }

export const UserProvider = ({children}) => {

   const [user, setUser] = useState() 


  return (
    <>
        <UserContext.Provider value={{user, setUser}}>
            {children}
        </UserContext.Provider>
    </>
  )
}

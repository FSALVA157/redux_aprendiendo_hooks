import { useForm } from "../hooks/useForm"



export const FormWithCustomHook = () => {

const {stateForm, setValueForm, resetForm} = useForm(
  {
    userName: '',
    Email: '',        
    password: ''
  }
);

const {userName, Email, password} = stateForm
    
  return (
    <>
        <h1>Formulario Con Custom Hook</h1>
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
         <input type="text"
               name="password"
               placeholder="contraseña"
               className="form-control mt-2"
               value={password}
               //onChange={(e) => setStateForm({...stateForm, name: e.target.value})}
               onChange={setValueForm}
         />
         <button onClick={resetForm} className="btn-primary btn mt-2">Reset</button>
         
    </>
  )
}

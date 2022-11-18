import { useForm } from "../hooks/useForm"


export const TodoAdd = ({onNewTodo}) => {

  const {description, setValueForm, resetForm} = useForm({
    description: ""
  })

  const onSubmitForm = (event) => {
    event.preventDefault();

    if(description.length <= 1) return;

    const newTodo = {
        id: new Date().getTime(),
        done: false,
        description
    };

    onNewTodo && onNewTodo(newTodo)
    resetForm();
  }

  return (
    <>
      <form onSubmit={onSubmitForm}>
                <input
                 className="form-control"
                 name="description"
                 type="text"
                 placeholder="What needs to be done?"
                 value={description}
                 onChange={setValueForm}
                  />
                 <button className="btn btn-outline-primary mt-3" type="submit">Submit</button>
            </form>
    </>
  )
}

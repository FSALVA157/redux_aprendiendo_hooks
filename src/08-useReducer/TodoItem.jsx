


export const TodoItem = ({todo, onRemoveTodo, onToggleTodo}) => {
    

  return (
    <>
        <li className="list-group-item d-flex justify-content-between">
            <span 
              onDoubleClick={()=>onToggleTodo(todo.id)}
              className="align-self-center"
            >{todo.description}</span>
            <button
              className="btn btn-danger"
              onClick={()=>onRemoveTodo(todo.id)}
             >Del</button>
        </li>
    </>
  )
}

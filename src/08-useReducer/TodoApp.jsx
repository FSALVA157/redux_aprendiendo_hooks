import { useReducer } from "react";
import { TodoAdd } from "./TodoAdd";
import { TodoList } from "./TodoList";
import { todoReducer } from "./todoReducer";



export const TodoApp = () => {

    const initialState = [
        {
            id: new Date().getTime(),
            description: 'rescatar Ironman',
            done: false   
        },
        {
            id: new Date().getTime() * 300,
            description: 'Recoger la Piedra del Alma',
            done: false   
        }
    ];

    const [todos, dispatch] = useReducer(todoReducer, initialState)

    const handlerNewTodo=(todo) => {
        const action = {
            type: '[TODO] Add Todo',
            payload: todo
        }
        dispatch(action);

    }

  return (
    <>
    <h1>Todos App</h1>
    <hr />
    <div className="row">
        <div className="col-7">
            <TodoList todos={todos}/>
        </div>
        <div className="col-5">
            <h2>Agregar Todo</h2>
            <hr />
            <TodoAdd onNewTodo={handlerNewTodo}/>          

        </div>        

    </div>
    </>
  )
}

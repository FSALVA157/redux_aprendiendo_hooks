import { useEffect, useReducer } from "react";
import { TodoAdd } from "./TodoAdd";
import { TodoList } from "./TodoList";
import { todoReducer } from "./todoReducer";



export const TodoApp = () => {

    const initialState = [
        // {
        //     id: new Date().getTime(),
        //     description: 'rescatar Ironman',
        //     done: false   
        // },
       
    ];

    const initializer = () => {
        return JSON.parse(localStorage.getItem('todos')) || [];
    }

    const [todos, dispatch] = useReducer(todoReducer, initialState, initializer);

    const handlerNewTodo=(todo) => {
        const action = {
            type: '[TODO] Add Todo',
            payload: todo
        }
        dispatch(action);
    }

    const handlerRemoveTodo=(id)=>{
        const action = {
            type: '[TODO] Remove Todo',
            payload: id
        }
        dispatch(action);
        }

    const handlerToggleTodo=(id)=>{
        
        const action = {
            type: '[TODO] Toggle Todo',
            payload: id
        }

        dispatch(action);


    }

    useEffect(() => {
      localStorage.setItem('todos', JSON.stringify(todos));    
      
    }, [todos])
    

  return (
    <>
    <h1>Todos App</h1>
    <hr />
    <div className="row">
        <div className="col-7">
            <TodoList 
                todos={todos}
                onDeleteTodo={id=>handlerRemoveTodo(id)}
                onToggleTodo={id=>handlerToggleTodo(id)}
                 />
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

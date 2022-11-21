import { useEffect, useReducer } from "react";
import { todoReducer } from "../08-useReducer/todoReducer";


const initializer = () => {
    return JSON.parse(localStorage.getItem('todos')) || [];
}

export const useTodos = () => {  

    const [todos, dispatch] = useReducer(todoReducer, [], initializer);
   
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

    return {
        todos,
        handlerNewTodo,
        handlerRemoveTodo,
        handlerToggleTodo,
        todosCounter : todos.length,
        todosPending : todos.filter(todo => !todo.done).length,
    

    }
    
}

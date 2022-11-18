import React from 'react'
import ReactDOM from 'react-dom/client'
import { CallBackHook } from './06-Memos/CallBackHook'
import { TodoApp } from './08-useReducer/TodoApp'
//import { MemoHook } from './06-Memos/MemoHook'
//import { Layout } from './05 UseLayoutEffect/Layout'
//import { Memorize } from './06-Memos/Memorize'
//import { FormWithCustomHook } from './02 UseEffect/FormWithCustomHook'
// import { SimpleForm } from './02 UseEffect/SimpleForm'
// import { MultipleCustomHooks } from './03 Examples/MultipleCustomHooks'
//import { FocusScreen } from './04 useRef/FocusScreen'
//import { CounterWithCustomHook } from './01 UseState/CounterWithCustomHook'
// import { CounterApp } from './01 UseState/CounterApp'
// import { HooksApp } from './HooksApp'
import './styles.css'
//import './08-useReducer/intro-reducer';

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
   <TodoApp/>
  // </React.StrictMode>
)

import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  BrowserRouter,
} from "react-router-dom";


// import { CallBackHook } from './06-Memos/CallBackHook'
// import { TodoApp } from './08-useReducer/TodoApp'
import { MainApp } from './09-UseContext/MainApp'
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

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: HomePage,
//   },
// ]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
   {/* <React.StrictMode> */}
    <MainApp></MainApp>
   {/* </React.StrictMode> */}
  
  </BrowserRouter>
)

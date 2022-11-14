import React from 'react'
import ReactDOM from 'react-dom/client'
//import { FormWithCustomHook } from './02 UseEffect/FormWithCustomHook'
import { SimpleForm } from './02 UseEffect/SimpleForm'
import { MultipleCustomHooks } from './03 Examples/MultipleCustomHooks'
//import { CounterWithCustomHook } from './01 UseState/CounterWithCustomHook'
// import { CounterApp } from './01 UseState/CounterApp'
// import { HooksApp } from './HooksApp'
import './styles.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
    <MultipleCustomHooks/>
  // </React.StrictMode>
)

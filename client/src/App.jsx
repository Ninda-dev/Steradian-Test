import { useState } from 'react'
import { Provider } from "react-redux";
import { DeclaredRouter } from './router'
import { store } from "./store";
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Provider store={store}>
        <DeclaredRouter />
      </Provider>
    </>
  )
}

export default App

import { useState } from 'react'
import './App.css'
import {Button} from '../components/Button'
function App() {
  const [count, setCount] = useState(0)

  return (
   
  <div>
    <Button varient="primary" text="share"></Button>
    <Button varient="secondary" text="add text"></Button>
  </div>


  )
}

export default App

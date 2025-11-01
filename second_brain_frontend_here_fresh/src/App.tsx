import { useState } from 'react'
import './App.css'
import {Button} from '../components/Button'
import {ShareIcon} from '../icons/ShareIcon'
import {PlusIcon} from '../icons/PlusIcon'
import {Card} from '../components/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
   
  <div>
    <Button varient="primary" text="share Brain" startIcon={<ShareIcon></ShareIcon>}></Button>
    <Button varient="secondary" text="add text" startIcon={<PlusIcon></PlusIcon>}></Button>
  <div className='flex'>
        <Card type="twitter" title="first tweet" link="https://x.com/PawarSarthak24/status/1979778871546528081"></Card>   
        <Card type="youtube" title='first youtube video ' link='https://youtu.be/WpBn9w-Js_c?si=P7UWcs94zy5sCNHl'></Card>

  </div>
  </div>


  )
}

export default App


import './App.css'
import {Button} from '../components/Button'
import {PlusIcon} from '../icons/PlusIcon'

function App() {
  

  return (
   <div>
        <Button startIcon={<PlusIcon size='sm'></PlusIcon>} 
        endIcon={<PlusIcon size='lg'></PlusIcon>}
        size='sm' title='welcome'></Button>
   </div>
  )
}

export default App

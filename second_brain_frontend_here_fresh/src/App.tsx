
import './App.css'
import { Signin } from "./page/Signin"
import { Signup } from "./page/Signup"
import { BrowserRouter,Routes,Route } from "react-router-dom"
import DashBoard from './page/DashBoard'

export function App() {
  return (
          <BrowserRouter>
          <Routes>
              <Route path='/signup' element={<Signup></Signup>}></Route>
              <Route path='/signin' element={<Signin></Signin>}></Route>
              <Route path='/dashboard' element={<DashBoard></DashBoard>}></Route>
          </Routes>
          </BrowserRouter>
   )
}
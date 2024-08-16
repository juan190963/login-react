import { useState } from 'react'
import './index.css'

import appFirebase from '../src/credenciales'
import { getAuth, onAuthStateChanged } from 'firebase/auth'

const auth = getAuth(appFirebase) 

import Login from './components/login'
import Home from './components/home'
function App() {
  const [usuario, setUsuario] = useState(null)
  onAuthStateChanged(auth, (usuarioFirebase)=>{
    if (usuarioFirebase){
      setUsuario(usuarioFirebase)
    }
    else{
      setUsuario(null)
    }
  })
  return (
    <div>
      {usuario ? <Home correoUsuario = {usuario.email}/> : <Login />}
    </div>
  )
}

export default App

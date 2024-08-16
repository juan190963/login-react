/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import appfirebase from '../credenciales'
import { getAuth,signOut} from 'firebase/auth'
const auth = getAuth(appfirebase)

const Home = ({correoUsuario}) => {
  return (
    <div className='text-center'>Bienvenido {correoUsuario} <button onClick={()=>signOut(auth)}>Salir</button></div>
  )
}

export default Home
/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import imagen from '../assets/login.png'
import imagenProfile from '../assets/photo.jpg'
import appFirebase from '../credenciales'
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'
const auth = getAuth(appFirebase)
const Login = () => {
    const [registrando, setResgistrando] = useState(false)
    
    const functAutenticacion = async(e) => {
        e.preventDefault();
        const correo = e.target.email.value;
        const  contraseña = e.target.password.value;

        if(registrando){
            try {
                            await createUserWithEmailAndPassword(auth, correo, contraseña)

            } catch (error) {
                alert("Asegurese que la contraseña tenga mas de 8 caracteres ")
            }
        } else{
            try {
                await signInWithEmailAndPassword(auth, correo, contraseña)

            } catch (error) {
                alert("El correo o contraseña son incorrectos")
            }
        }
    }
        
        return (
            <section className="flex flex-col items-center justify-center min-h-screen p-4 md:p-8">
                <div className="flex flex-col md:flex-row items-center justify-center w-full max-w-4xl">
                    <div className="border-2 border-gray-300 rounded-xl p-4 w-full md:w-96 mb-8 md:mb-0">
                        <img src={imagenProfile} alt="" className="h-32 w-32 rounded-full object-cover mb-2 mx-auto" />
                        <form onSubmit={functAutenticacion} className="grid grid-cols-1 gap-5">
                            <input id='email' type="text" placeholder='Email' className='bg-gray-200 rounded-3xl px-3 py-2 w-full focus:outline-gray-400/70 focus:shadow-lg hover:bg-white placeholder:text-black placeholder:font-semibold' />
                            <input id='password' type="password" placeholder='Contraseña' className='bg-gray-200 rounded-3xl px-3 py-2 w-full focus:outline-gray-400 focus:shadow-lg hover:bg-white placeholder:text-black placeholder:font-semibold	' />
                            <button className='bg-blue-500 w-full py-2 text-white rounded-md cursor-pointer hover:bg-blue-400'>{registrando ? "Registrate" : "Inicia Sesion"}</button>
                        </form>
                        <h4>{registrando ? "Si ya tienes cuenta" : "No tienes cuenta"} <button onClick={() => setResgistrando(!registrando)} className='bg-indigo-900  p-2 mt-5 text-white rounded-md cursor-pointer hover:bg-indigo-500'>{registrando ? "Inicia sesion" : "Registrate"}</button></h4>
                    </div>
                    <div className="w-full md:w-1/2 flex justify-center">
                        <img src={imagen} alt="" className="w-full md:w-11/12" />
                    </div>
                </div>
            </section>






        )
    }


export default Login
import React, {useState} from 'react'
import './Login.css';

const Login = () => {

    const [register, setRegister] = useState({
        email:'',
        password_:''
    })


    const handleSubmit = async (e) =>{
        e.preventDefault();
        
   const res =   await  fetch('http://localhost:5000/signUp', {
            method: 'POST',
            body:JSON.stringify(register),
            headers: {'Content-Type': 'application/json' }
        })
        const data = await res.json()
        console.log(data)
    };

    const handleChange = (e) =>{
        setRegister({...register,[e.target.name]: e.target.value});
    }

    return (
        <div>
             <link href="https://fonts.googleapis.com/css2?family=Mulish:wght@300&display=swap" rel="stylesheet"></link>
   <body className='body'>
   <header className="header">
       
    </header>
    <main>

        
    <section className="Login">
   
    <section className="Login__container">
    <h2 className="login">Inicia sesion</h2>
       <div className="profile icon"></div>
       <div className="profile icon2"></div>
       <div className="arrow-right icon"></div>
       <div className="mail icon"></div>
       <div className="key2 icon"></div>
       <form className="Login__container--form" onSubmit={handleSubmit}>
            <input name='email'  onChange={handleChange} className="input" type="email" placeholder="Correo" required></input>
            <input name='password_'  onChange={handleChange} className="input" type="password" placeholder="Contraseña" required></input>
            <button className="button">Iniciar sesion</button>
       </form>
       

    </section>
    <section className="Registrate">
        <a>¿No tienes cuenta?</a>
        <button className="button-register">Registrarme</button>
    </section>
    </section>
    </main>
   </body>

        </div>
    )
}

export default Login

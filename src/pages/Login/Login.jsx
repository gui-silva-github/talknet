import React, { useState } from 'react'
import './Login.sass'
import { signup, login, resetPass } from '../../config/firebase'

const Login = () => {

  const [currState, setCurrState] = useState("Cadastrar-se")
  const [userName, setUserName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const onSubmitHandler = (event) =>{
    event.preventDefault()

    if(currState === "Cadastrar-se"){
      signup(userName, email, password)
    } else {
      login(email, password)
    }
  }

  return (
    <div className='login'>
      <form onSubmit={onSubmitHandler} className="login-form">
        <h2>{currState}</h2>
        {currState === 'Cadastrar-se' ? <input onChange={(e) => setUserName(e.target.value)} value={userName} required type="text" placeholder='Nome de Usuário' className="form-input" /> : null}
        <input onChange={(e) => setEmail(e.target.value)} value={email} required type="email" placeholder='E-mail' className="form-input" />
        <input onChange={(e) => setPassword(e.target.value)} value={password} required type="password" placeholder='Senha' className="form-input" />
        <button type="submit">{currState === "Cadastrar-se" ? "Criar conta" : "Login"}</button>
        <div className="login-term">
          <input type="checkbox" />
          <p>Concordo com os termos de uso e políticas de privacidade.</p>
        </div>
        <div className="login-forgot">
          {
            currState === "Cadastrar-se" ? 
              <p className="login-toggle">
              Já tem uma conta? <span onClick={()=> setCurrState('Login')}>Login</span>
              </p>
            :
              <p className="login-toggle">
              Criar uma conta? <span onClick={()=> setCurrState('Cadastrar-se')}>Clique aqui</span>
              </p>
          }
          {
            currState === "Login" ? 
            <p className="login-toggle">
            Esqueceu a senha? <span onClick={()=> resetPass(email)}>Resete aqui</span>
            </p>
            :
            null
          }
        </div>
      </form>
    </div>
  )
}

export default Login
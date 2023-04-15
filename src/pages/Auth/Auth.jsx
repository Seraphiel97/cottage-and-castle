import {useState} from 'react'
import Login from '../../components/Login/Login'
import RegisterAcct from '../../components/RegisterAcct/RegisterAcct'

export default function Auth({setUser}) {
  const [showLogin, setShowLogin] = useState(true)
  
  return (
    <main>
      {showLogin 
      ?
      <Login setUser={setUser}/>
      :
      <RegisterAcct setUser={setUser}/>
      }
      <button onClick={() => setShowLogin(!showLogin)}>
        {showLogin
        ?
        `Don't have an account?`
        :
        'Already have an Account?'}
      </button>
    </main>
  )
}

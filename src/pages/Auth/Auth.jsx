import React from 'react'
import Login from '../../components/Login/Login'
import RegisterAcct from '../../components/RegisterAcct/RegisterAcct'

export default function Auth({setUser, user}) {
  
  return (
    <main className="flex flex-col justify-center items-center">
      {showLogin 
      ?
      <Login setUser={setUser} user={user}/>
      :
      <RegisterAcct setUser={setUser} user={user}/>
      }
      <button onClick={() => setShowLogin(!showLogin)}
      className="bg-gradient-to-b from-pink to-mint hover:bg-charcoal text-white font-bold py-2 px-4 rounded-lg mt-3">
        {showLogin
        ?
        `Don't have an account?`
        :
        'Already have an Account?'}
      </button>
    </main>
  )
}

import {useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import * as usersService from '../../utilities/users-service'

export default function RegisterAcct({setUser, user}) {
  const navigate = useNavigate();

  const [credentials, setCredentials] = useState({
    name: '',
    email: '',
    password: '',
    confirm: '',
    error: '',
    adminKey: '',
  });
  
  const [error, setError] = useState('');

  useEffect(function() {
    if (user) {
      navigate('/')
    }
  })

  function handleChange(evt) {
    setCredentials({ ...credentials, [evt.target.name]: evt.target.value });
    setError('');
  }
  
  async function handleSubmit(evt) {
    // Prevent form from being submitted to the server
    evt.preventDefault();
    try {
      // The promise returned by the signUp service method 
      // will resolve to the user object included in the
      // payload of the JSON Web Token (JWT)
      const user = await usersService.signUp(credentials);
      setUser(user);
    } catch {
      setError('Log In Failed - Try Again');
    }
  }
  
  return (
    <div>
      <h1 className="my-6 text-center">Register an Account</h1>
      <form onSubmit={handleSubmit} className="flex flex-col justify-center items-center border-solid border-2 rounded-lg p-3">
        <div className="m-2">
          <label className='mr-10'>
          Name:
          </label>
          <input type="text" name="name" value={credentials.name} 
          onChange={handleChange} className="border-solid border-2 rounded-lg ml-12"
           required/>
        </div>
        <div className="m-2">
          <label className="mr-11">
          Email:
          </label>
          <input type="text" name="email" value={credentials.email} 
          onChange={handleChange} className="border-solid border-2 rounded-lg ml-12"
          required/>
        </div>
        <div className="m-2">
          <label className="mr-3">
          Password:
          </label>
        <input type="password" name="password" value={credentials.password}
        onChange={handleChange} className="border-solid border-2 rounded-lg ml-12"
        required/>
        </div>
        <div className="m-2">
          <label>
          Confirm Password:
          </label>
          <input type="password" name="confirm" value={credentials.confirm} 
          onChange={handleChange} className="border-solid border-2 rounded-lg"
          required/>
        </div>
        <div className="m-2">
          <label className="mr-2">
          Admin Key:
          </label>
          <input type="text" name="adminKey" value={credentials.adminKey} 
          onChange={handleChange} className="border-solid border-2 rounded-lg ml-12" />
        </div>
        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-3">
          Sign In
        </button>
      </form>
    </div>
  )
}

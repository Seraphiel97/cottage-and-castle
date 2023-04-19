import {useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import * as usersService from '../../utilities/users-service'

export default function Login({setUser, user}) {
  const navigate = useNavigate();

  const [credentials, setCredentials] = useState({
    email: '',
    password: ''
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
      const user = await usersService.login(credentials);
      setUser(user);
    } catch {
      setError('Log In Failed - Try Again');
    }
  }

  return (
    <div>
      <h1 className="text-center">Login</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
          Email:
          </label>
          <input type="text" name="email" value={credentials.email} 
          onChange={handleChange} required/>
        </div>
        <div>
          <label>
          Password:
          </label>
        <input type="password" name="password" value={credentials.password}
        onChange={handleChange} required/>
        </div>
        <button type="submit">Sign In</button>
      </form>
      <p>{error}</p>
    </div>
  )
}

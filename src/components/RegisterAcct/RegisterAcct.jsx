import {useState} from 'react'
import * as usersService from '../../utilities/users-service'

export default function RegisterAcct({setUser}) {
  
  const [credentials, setCredentials] = useState({
    name: '',
    email: '',
    password: '',
    confirm: '',
    error: '',
    adminKey: '',
  });
  
  const [error, setError] = useState('');

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
      <h1>Register an Account</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
          Name:
          </label>
          <input type="text" name="name" value={credentials.name} 
          onChange={handleChange} required/>
        </div>
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
        <div>
          <label>
          Confirm Password:
          </label>
          <input type="text" name="confirm" value={credentials.confirm} 
          onChange={handleChange} required/>
        </div>
        <div>
          <label>
          Admin Key:
          </label>
          <input type="text" name="adminKey" value={credentials.adminKey} 
          onChange={handleChange} />
        </div>
        <button type="submit">Sign In</button>
      </form>
    </div>
  )
}

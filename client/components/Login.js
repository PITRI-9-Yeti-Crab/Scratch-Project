import {React, useState} from 'react';
import axios from 'axios'; 

function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const response = await axios.post('/user/login', {email, password}); 
      console.log(response.data)
    }
    catch(err){
      console.log(err); 
    }
  }

  return (
    <form className="login" onSubmit={handleSubmit}>
      <h3>Log In</h3>
      
      <label htmlFor="email">Email address:</label>
      <input 
        type="email" 
        onChange={(e) => setEmail(e.target.value)} 
        value={email} 
      />
      <label htmlFor="password">Password:</label>
      <input 
        type="password" 
        onChange={(e) => setPassword(e.target.value)} 
        value={password} 
      />
    </form>
  )
}


export default Login;
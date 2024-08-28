import './App.css'



// src/LoginPage.js
import { useState } from 'react';
//import './LoginPage.css'; // Optional for custom styles

const App = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Add your authentication logic here
    console.log('Email:', email);
    console.log('Password:', password);
    console.log("New changes")
  };

  return (
    <div className="login-container">
      <h1 id='log'>Login</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input placeholder='Enter your Email'
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input placeholder='Enter password'
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default App

import { useState } from 'react';

import { login } from '../services/auth';

function LoginForm() {
  const [user, setUser] = useState({ email: '', password: '' });


  const handleSubmit = async (event) => {
    event.preventDefault();

    const data = await login(user);

    console.log('data: ', data);
  }

  const handleChange = (event) => {
    setUser({
      ...user,
      [event.target.name]: event.target.value
    });
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>E-mail</label>
          <input type="text" name="email" onChange={handleChange} />
        </div>
        <div>
          <label>Password</label>
          <input type="password" name="password" onChange={handleChange} />
        </div>
        <div>
          <input type="submit" value="Send" />
        </div>
      </form>
    </div>
  );
}

export { LoginForm };

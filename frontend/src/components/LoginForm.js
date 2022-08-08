import { useState } from 'react';

function LoginForm() {
  const [user, setUser] = useState({ email: '', password: '' });


  const handleSubmit = (event) => {
    event.preventDefault();

    fetch('http://localhost:8080/login', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      // body: JSON.stringify({ user: user })
      body: JSON.stringify({ ...user })
    })
    .then(response => response.json())
    .then(data => console.log(data));
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

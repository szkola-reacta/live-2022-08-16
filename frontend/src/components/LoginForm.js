import { useEffect, useState } from 'react';

import { login } from '../services/auth';

// const LoginForm = () => {

// }

function LoginForm() {
  const [user, setUser] = useState({ email: '', password: '' });

  const validateEmail = () => {
    console.log('jestem w validateEmail');
    if (user.email === '') {
      alert('halo, uzupełnij uytkownika!');
    }
  }

  const validatePassword = () => {
    console.log('jestem w validatePassword');
    if (user.email === '') {
      alert('halo, uzupełnij uytkownika!');
    }
  }

  // useEffect(() => {
  //   validate();
  // }, [user.email, user.password]);

  useEffect(() => {
    validateEmail();
  }, [user.email]);

  useEffect(() => {
    validatePassword();
  }, [user.password]);


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

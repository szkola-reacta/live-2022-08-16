// import { useEffect, useState } from 'react';
import { useEffect, useState, useRef, useReducer, useContext } from 'react';

import { login } from '../services/auth';
import { favorites } from '../services/user';

// const LoginForm = () => {

// }

const Button = (props) => {
  return <button onClick={props.handleClick}>{props.children}</button>
}

function LoginForm() {
  const [user, setUser] = useState({ email: '', password: '' });

  const validateEmail = () => {
    console.log('jestem w validateEmail');
    // if (user.email === '') {
    //   alert('halo, uzupełnij uytkownika!');
    // }
  }

  const validatePassword = () => {
    console.log('jestem w validatePassword');
    // if (user.email === '') {
    //   alert('halo, uzupełnij uytkownika!');
    // }
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

  const handleClick = async () => {
    // eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7fSwiZXhwIjoxNjYwNjc4NzM4LCJpYXQiOjE2NjA2NzUxMzh9.tXBHQzMmsnbexYs68KxcMjuUrpVa1G19tFS1REhRwfE
    await favorites('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7fSwiZXhwIjoxNjYwNjc4NzM4LCJpYXQiOjE2NjA2NzUxMzh9.tXBHQzMmsnbexYs68KxcMjuUrpVa1G19tFS1REhRwfE');
    console.log('Test!');
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
          <input type="submit" value="Login" />
        </div>
      </form>

      {/* <button onClick={}>Send</button> */}
      <Button handleClick={handleClick}>Send</Button>
    </div>
  );
}

export { LoginForm };

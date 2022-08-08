import { useState, createContext } from 'react';

const userContext = {
  email: '',
  setEmail: (value) => value,
  name: '',
  setName: (value) => value,
};

const MyContext = createContext(userContext);
MyContext.displayName = 'UserContext';

const Provider = MyContext.Provider;
const Consumer = MyContext.Consumer; //

const useUser = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');

  const setUserEmail = (value) => {
    setEmail(value);
  }

  const setUsername = (value) => {
    setName(value);
  }

  return { email, setUserEmail, name, setUsername };
}


export {
  useUser,
  MyContext,
  Provider,
  Consumer,
};
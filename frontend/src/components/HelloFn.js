import { useState, useContext } from 'react';

import { MyContext, useUser } from '../UserContext';

function Hello() {
  // const [email, setEmail] = useState('');
  const userContext = useContext(MyContext);
  const { email, setUserEmail } = useUser();

  const handleChange = (event) => {
    // setEmail(event.target.value);

    // userContext.setUserEmail(event.target.value);
    setUserEmail(event.target.value);
  }

  return (
    <form>
      <div>
        E-mail from context: {userContext && email}
      </div>
      <div>
        <label htmlFor="email">Name</label>
        <input name="email" type="email" onChange={handleChange} />
      </div>
      <div>
        <button>Send</button>
      </div>
    </form>
  );
}

export { Hello }

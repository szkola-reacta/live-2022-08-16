import { useState, useEffect } from 'react';

function Ping() {
  const [message, setMessage] = useState('');
  const [command, setCommand] = useState('');

  useEffect(() => {
    fetch('http://localhost:8080/ping')
    .then(response => response.json())
    .then(data => setMessage(data.message));
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();

    fetch('http://localhost:8080/command', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({ message: message })
    })
    .then(response => response.json())
    .then(data => console.log(data));
  }

  const handleChange = (event) => {
    setCommand(event.target.value);
  }

  return (
    <div>
      <p>Ping: {message}</p>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleChange} value={command} />
        <input type="submit" value="Send" />
      </form>
    </div>
  );
}

export { Ping };

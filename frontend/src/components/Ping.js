import { useState, useEffect } from 'react';

function Ping() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch('http://localhost:8080/ping')
    .then(response => response.json())
    .then(data => setMessage(data.message));

    // fetch('http://localhost:8080/json', {
    //   method: 'POST',
    //   headers: {
    //     'Content-type': 'application/json',
    //   },
    //   body: JSON.stringify({ text: 'pozdrowienia'})
    // })
    // .then(response => response.json())
    // .then(data => console.log(data));
  }, []);

  return (
    <div>
      <p>Ping: {message}</p>
    </div>
  );
}

export { Ping };

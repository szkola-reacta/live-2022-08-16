import { useEffect } from 'react';

function Ping() {

  useEffect(() => {
    fetch('http://localhost:8080/ping')
    .then(response => response.json())
    .then(data => console.log(data));

    fetch('http://localhost:8080/json', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({ text: 'pozdrowienia'})
    })
    .then(response => response.json())
    .then(data => console.log(data));
  }, []);

  return (
    <div>
      <p>Ping</p>
    </div>
  );
}

export { Ping };

import { useState, useEffect } from 'react';

import './App.css';

function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/photos')
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw response;
      })
      .then((data) => {
        setData(data);
      })
      .catch((error) => {
        console.error('Fetching Error :', error);
        setError(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) return 'Loading...';
  if (error)
    return 'Error while fetching data check the link endpoint or your code ';
  return (
    <div className="App">
      {data && (
        <div>
          {data.map((items) => (
            <div key={items.id}>
              <img src={items.url} alt="random" />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;

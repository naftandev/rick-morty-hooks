import { useState, useEffect } from 'react';

const useCharacters = (API_URL) => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetch(API_URL)
      .then((response) => response.json())
      .then((data) => setCharacters(data.results))
      .catch((error) => console.log(error.message));
  }, []);

  return characters;
};

export default useCharacters;

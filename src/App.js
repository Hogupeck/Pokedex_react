import './App.css';
import React, { useState, useEffect } from 'react';

// function App() {
//   return (
//     <div className="App">

//     </div>
//   );
// }

/* lien import API: "https://sailssoftware.com/how-to-integrate-api-in-reactjs-step-by-step-guide/" */
/* import adapter au projet*/
const PokemonList = () => {
  const [Pokemons, setPokemons] = useState([]);

  useEffect(() => {
    fetch('https://pokedex-api.3rgo.tech/api/pokemon')
      .then(response => response.json())
      .then(data => setPokemons(data))
      .catch(error => console.error('Error fetching pokemon:', error));
  }, []);

  return (
    <div>
      {/*Display the setchd user data*/}
      {Pokemons.map(pokemon => (
        <div key={pokemon.id}>{pokemon.name}</div>
      ))}
    </div>
  );
};

export default PokemonList;
// export default App;

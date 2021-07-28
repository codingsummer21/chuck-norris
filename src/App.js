import './App.css';
import Joke from './components/Joke';
import SavedList from './components/SavedList';
import { useState } from 'react';

function App() {

  const [joke, setJoke] = useState('No joke yet')
  const [saved, setSaved] = useState([])

  function getJoke() {
    fetch('https://api.chucknorris.io/jokes/random')
      .then(response => response.json()) 
      .then(data => setJoke(data['value']))
  }

  function saveJoke() {
    if(joke !== 'No joke yet' && !saved.includes(joke)) {
      let savedJokes = [...saved]
      savedJokes.push(joke)
      setSaved(savedJokes)
    }
  }

  function deleteJoke(joke) {
    let pos = saved.indexOf(joke)
    let savedJokes = [...saved]
    savedJokes.splice(pos, 1)
    setSaved(savedJokes)
  }

  return (
    <div className="chuck">
      <h1>Chuck Norris Jokes</h1>
      <div>
        <button onClick={ getJoke }>Get Joke</button> 
        <button onClick={ saveJoke }>Save Joke</button>
      </div>
      <Joke joke={ joke } />
      <SavedList saved={ saved } callback={ deleteJoke }/>
    </div>
  );
}

export default App;

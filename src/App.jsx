import { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';

function App() {
  const [travels, setTravels] = useState([]);
    const totalCountries = new Set(travels.map(t => t.contry)).size;

  return (
    <div className="App">
      <Header totalTrips={travels.length} totalCountries={totalCountries} />
    </div>
  );
}
export default App;
import './App.css';
import animals from './data'
import AnimalCard from '../AnimalCard/AnimalCard';

function App() {
  return (
    <div className="wrapper">
      {animals.map(({ name, size, diet, scientificName }) => (
        <AnimalCard
          key={name}
          name={name}
          size={size}
          diet={diet}
          scientificName={scientificName}
        />
      ))}
    </div>
  );
}

export default App;

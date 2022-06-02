import './App.css';
import { Routes, Route} from 'react-router-dom';
import Landing from './Components/Landing';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Landing /> } />
          {/* <Route path="/home" element={<Home /> } />
          <Route path="/created" element={<RecipeCreated /> } /> */}
      </Routes>
      
    </div>
  );
}

export default App;

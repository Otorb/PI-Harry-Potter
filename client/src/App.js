import './App.css';
import { Routes, Route} from 'react-router-dom';
import Landing from './Components/Landing';
import Home from './Components/Home';
import Detail from './Components/Detail'
import Create from './Components/Create'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Landing /> } />
          <Route path="/home" element={<Home /> } />
          <Route path="/home/:id" element={<Detail /> } />
          <Route path="/create" element={<Create /> } />
      </Routes>
      
    </div>
  );
}

export default App;

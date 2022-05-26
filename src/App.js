import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Error404 } from './pages/404';

function App() {
  
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>}/>
        <Route path="/*" element={<Error404/>}/>
      </Routes>
    </div>
  );
}

export default App;

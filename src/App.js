import './App.css';
import Landing from './pages/Landing';
import Cart from './pages/Cart';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/" element={<Landing/>}></Route>
        <Route path="/Cart" element={<Cart/>}></Route>
      </Routes>

    </div>
  );
}

export default App;

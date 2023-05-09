import './App.scss';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {Login, Explore} from './pages';

const App = () => {
  return (
      <div className='App'>
        <BrowserRouter>
          <Routes>
            <Route path='*' element={<Login/>}/>
            <Route path='dashboard' element={<Explore/>}/>
          </Routes>
        </BrowserRouter>
      </div>
  );
}

export default App;
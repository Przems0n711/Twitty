import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Login, Account } from './pages';

const App = () => {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
            <Route path='*' element={<Login />} />
            <Route path='account' element={<Account />} />
        </Routes>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       
      </BrowserRouter>
    </div>
  );
}

export default App;

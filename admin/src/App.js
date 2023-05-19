import './App.scss';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {Login, Explore, Register} from './pages';

const App = () => {
    return (
        <div className='App'>
            <BrowserRouter>
                <Routes>
                    <Route path='*' element={<Login/>}/>
                    <Route path='Explore' element={<Explore/>}/>
                    <Route path='Register' element={<Register/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;

import { Route, Routes } from 'react-router-dom';
import './App.css';
import Banner from './Components/Banner/Banner';

function App() {
  return (
    <div >
      <Routes>
        <Route path='/' element={<Banner></Banner>}> </Route>

      </Routes>
    </div>
  );
}

export default App;

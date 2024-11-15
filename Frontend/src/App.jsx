import { useEffect } from 'react';
import './App.css';
import HomePage from './Pages/HomePage';
import {useDispatch, useSelector} from 'react-redux'
import { Navigate } from 'react-router-dom';


function App() {
  return (
    <div>
      <HomePage/>
    </div>
  );
}

export default App;

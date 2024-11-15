import { useEffect } from 'react';
import './App.css';
import HomePage from './Pages/HomePage';
import {useDispatch, useSelector} from 'react-redux'
import { Navigate, Route, Routes } from 'react-router-dom';
import RegistrationForm from './Pages/RegistrationForm';


function App() {

  const jwt = localStorage.getItem("jwt")
  const {auth} = useSelector(store=>store)




  return (
    <div>
      <Routes>
        <Route path='/*' element={auth.jwt?<HomePage/>:<RegistrationForm/>}></Route>
      </Routes>
      <HomePage/>
    </div>
  );
}

export default App;

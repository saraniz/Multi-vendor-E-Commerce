import { useEffect } from 'react';
import './App.css';
import HomePage from './Pages/HomePage';
import {useDispatch, useSelector} from 'react-redux'
import { Navigate } from 'react-router-dom';


function App() {

  //get tokens
  const jwt = localStorage.getItem('jwt')
  const {auth} = useSelector(store=>store)
  const dispatch =useDispatch();

  useEffect(()=>{
  if(jwt){
    dispatch(getUserProfile(jwt))
    Navigate("/")
  }
  },[auth.jwt])



  return (
    <div>
      <HomePage/>
    </div>
  );
}

export default App;

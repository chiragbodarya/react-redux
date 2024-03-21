import React, { useEffect } from 'react';
import './App.css';
import { useDispatch } from 'react-redux';
import { getUser } from './store/actions/userActions';
import User from './componet/User';

function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getUser())
  }, [])
  return (
    <div className='app'>
      Hello
      <User/>
    </div>
  );
}

export default App;
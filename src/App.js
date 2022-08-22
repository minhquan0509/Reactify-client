import { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import axios from 'axios'
import Login from './Login';
import Dashboard from './Dashboard';

const code = new URLSearchParams(window.location.search).get('code')

function App() {
  useEffect(() => {
    document.title = "Reactify";
  }, []);
  return code ? <Dashboard code={ code }/> : <Login/>
}

export default App;

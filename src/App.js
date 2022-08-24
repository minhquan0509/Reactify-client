import { useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';

const code = new URLSearchParams(window.location.search).get('code')

function App() {
  useEffect(() => {
    document.title = "Reactify";
  }, []);
  return code ? <Dashboard code={ code }/> : <Login/>
}

export default App;

import { useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import { useStateProvider } from './utils/StateProvider';
import { reducerCases } from './utils/constants';

const code = new URLSearchParams(window.location.search).get('code')

function App() {
  const [{ token }, dispatch] = useStateProvider();

  useEffect(() => {
    if(code){
      dispatch({
        type: reducerCases.SET_TOKEN,
        token: code
      })
    }
  }, [dispatch, token])
  return code ? <Dashboard code={ code }/> : <Login/>
}

export default App;

import { BrowserRouter, Route } from 'react-router-dom';
import Profile from './container/Profile'
import Signup from './container/Signup'
import Login from './container/Login'

function App() {
  return (
    <>
      <BrowserRouter>
        <Route path='/login' exact component={Login}/>
        <Route path='/signup' exact component={Signup}/>
        <Route path='/profile' exact component={Profile}/>
      </BrowserRouter>
    </>
  );
}

export default App;
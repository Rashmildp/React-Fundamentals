
import './App.css';
import { BrowserRouter,Route,Switch } from 'react-router-dom';
import NameList from './Components/Pages/Namelist/NameList';
import HeaderBar from './Components/HeaderBar/Haederbar'
import Home from './Components/Pages/Home/Home';
import About  from './Components/Pages/About/About';

function App() {
  return (
    <div>
      <BrowserRouter>
      <HeaderBar/>
   <Switch>
   <Route path="/about">
      <About></About>
    
      </Route>
      <Route path="/namelist">
      <NameList/>
      </Route>
      <Route path="/">
      <Home></Home>
      </Route>

   </Switch>
 
      
      </BrowserRouter>
    
    </div>

  );
}

export default App;

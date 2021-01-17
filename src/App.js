import { BrowserRouter } from 'react-router-dom';
import './App.css';
import VendingMachine from './vendingMachine'
import {Route} from 'react-router-dom'
import Chips from './chips'
import Soda from './soda'
import Sardines from './sardines'


function App() {
  return (
    <BrowserRouter>
            <Route exact path="/"><VendingMachine /></Route>
            <Route exact path='/Chips'><Chips /></Route>
            <Route exact path='/Soda'><Soda /></Route>
            <Route exact path='/Sardines'><Sardines /></Route>
    </BrowserRouter>
  );
}

export default App;

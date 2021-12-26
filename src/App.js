import './App.css';
import AddProduct from './frontend/add_product';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import ProductList from './frontend/product_list';

function App() {
  return (
    <div>
      <Router>
      <Switch>
      <Route exact path="/add_product"> 
      <AddProduct/>
      </Route>
      </Switch>

      <Switch>
      <Route exact path="/product_list" >
        <ProductList/>
      </Route>
      </Switch>
     </Router>  
    
      
    </div>
  );
}

export default App;

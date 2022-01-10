import './App.css';
import './scss_files/product_list_style.scss';
import AddProduct from './frontend/add_product';
import {BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom";
import ProductList from './frontend/product_list';
import Footer from './frontend/footer';


function App() {
  return (
    <div>
      <Router >
      <Switch>
      <Route exact path="/" component={() => (<Redirect to="/add_product"/>)} >
        <AddProduct/>
        <Footer/>
      </Route>
      </Switch>

      <Switch>
      <Route exact path="/add_product" >
        <AddProduct/>
        <Footer/>
      </Route>
      </Switch>

      <Switch>
      <Route exact path="/product_list" >
        <ProductList/>
        <Footer/>
      </Route>
      </Switch>
     </Router>  
    
      
    </div>
  );
}

export default App;

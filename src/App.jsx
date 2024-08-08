// External imports should come first
import { Route, Switch, Redirect } from "react-router-dom";
import routes from "routes";

// Internal imports should come after
import "./App.css";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
import { PageNotFound } from "./components/commons";
import Product from "./components/Product";
import ProductList from "./components/ProductList";

// Move this if it's actually needed here

const App = () => (
  <Switch>
    <Route exact component={Cart} path={routes.cart} />
    <Route exact component={Checkout} path={routes.checkout} />
    <Route exact component={Product} path={routes.products.show} />
    <Route exact component={ProductList} path={routes.products.index} />
    <Redirect exact from={routes.root} to={routes.products.index} />
    <Route component={PageNotFound} path="*" />
  </Switch>
);

export default App;

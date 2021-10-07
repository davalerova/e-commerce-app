import "./App.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { lazy } from "react";
import LoaderPage from "./views/LoaderPage";
import { Suspense } from "react";
import Cart from "./components/Cart";
import Checkout from "./views/Checkout";

const Home = lazy(() => import("./views/Home"));

const App = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/" exact>
            <Suspense fallback={<LoaderPage />}>
              <Home />
            </Suspense>
          </Route>

          <Route path="/shop-cart" exact>
            <Suspense fallback={<LoaderPage />}>
              <Cart />
            </Suspense>
          </Route>

          <Route path="/checkout" exact>
            <Suspense fallback={<LoaderPage />}>
              <Checkout />
            </Suspense>
          </Route>
        </Switch>
      </Router>
    </>
  );
};

export default App;

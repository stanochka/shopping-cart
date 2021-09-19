import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";
  
import { Footer } from './components/Footer';
import { Navbar } from './components/Navbar';
import { Home } from './components/Home';
import { Cart } from './components/Cart';
import { Shop } from './components/Shop';

export const App = () => {
    return (
        <Router>
            <div className='App'>
                <Navbar />

                <Switch>
                    <Route path="/shop">
                        <Shop />
                    </Route>
                    <Route path="/cart">
                        <Cart />
                    </Route>
                    <Route path="/">
                        <Home />
                    </Route>
                </Switch>

                <Footer />
            </div>
        </Router>
    )
}
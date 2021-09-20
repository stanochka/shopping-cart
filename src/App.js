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
import { ItemDetails } from "./components/ItemDetails";

export const App = () => {
    return (
        <Router>
            <div className='App'>
                <Navbar />

                <main>

                <Switch>
                    <Route path="/shop">
                        <Shop />
                    </Route>
                    <Route path="/cart">
                        <Cart />
                    </Route>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route path='/items/:id'>
                        <ItemDetails />
                    </Route>
                </Switch>

                </main>

                <Footer />
            </div>
        </Router>
    )
}
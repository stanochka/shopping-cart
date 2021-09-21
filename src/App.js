import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";

import { useState } from 'react';
  
import { Footer } from './components/Footer';
import { Navbar } from './components/Navbar';
import { Home } from './components/Home';
import { Cart } from './components/Cart';
import { Shop } from './components/Shop';
import { ItemDetails } from "./components/ItemDetails";

export const App = () => {

    const [count, setCount] = useState(0);
    const [items, setItems] = useState([]);

    const addToCart = (item) => {
        setCount(count + 1);
        if (!items.filter(i => i.id === item.id).length) {
            item.count = 1;
            setItems([...items, item]);
        } else {
            items.filter(i => i.id === item.id).map(i => i.count += 1);
            setItems(items);
        }   
    }

    const deleteFromCart = (item) => {
        setCount(count - 1);
        items.filter(i => i.id === item.id).map(i => i.count -= 1);
        setItems(items.filter(i => i.count !== 0));
    }

    return (
        <Router>
            <div className='App'>
                <Navbar count={count} />

                <main>

                <Switch>
                    <Route path="/shop">
                        <Shop addToCart={addToCart} />
                    </Route>
                    <Route path="/cart">
                        <Cart items={items} 
                              addToCart={addToCart} 
                              deleteFromCart={deleteFromCart} />
                    </Route>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route path='/items/:id'>
                        <ItemDetails addToCart={addToCart} />
                    </Route>
                </Switch>

                </main>

                <Footer />
            </div>
        </Router>
    )
}
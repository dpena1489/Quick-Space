import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Header from './pages/Header';
import Cart from './pages/Cart';

function App() {
    return (
        <Router>
            <div>
                <Header />
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/cart" component={Cart} />
                    {/* Add more routes as needed */}
                </Switch>
            </div>
        </Router>
    );
}

export default App;

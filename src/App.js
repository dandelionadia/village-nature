import React from 'react';
import { HomePage } from './pages/HomePage';
import './style/main.scss';
import Layout from 'atomic-layout';
import { About } from './About';
import { Shop } from './Shop';
import { Header } from './components/Header';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

Layout.configure({
    defaultUnit: 'rem',
})

function App() {
    return (
        <Router>
            <div className="App">
                <Header />
                <Switch>
                    <Route path="/" exact component={HomePage} />
                    <Route path="/about" component={About} />
                    <Route path="/shop" component={Shop} />
                </Switch>
            </div>
        </Router>
    );
}

export default App;

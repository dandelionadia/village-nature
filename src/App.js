import React from 'react'
import { HomePage } from './pages/HomePage'
import './style/main.scss'
import Layout, { Box } from 'atomic-layout'
import { About } from './pages/About'
import { Shop } from './pages/Shop'
import { Header } from './components/Header'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

Layout.configure({
    defaultUnit: 'rem',
})

function App() {
    return (
        <Router>
            <Box>
                <Header />
                <Switch>
                    <Route path="/" exact component={HomePage} />
                    <Route path="/about" component={About} />
                    <Route path="/shop" component={Shop} />
                </Switch>
            </Box>
        </Router>
    );
}

export default App;

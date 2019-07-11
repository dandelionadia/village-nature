import React from 'react'
import { HomePage } from './pages/HomePage'
import './style/main.scss'
import Layout from 'atomic-layout'
import { About } from './About'
import { Shop } from './Shop'
import { Header } from './components/Header'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import { Box } from 'atomic-layout'

Layout.configure({
    defaultUnit: 'rem',
})

function App() {
    return (
        <Router>
            <Box overflow="hidden">
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

import React from 'react';
import { HomePage } from './pages/HomePage';
import './style/main.scss';
import Layout from 'atomic-layout';

Layout.configure({
  defaultUnit: 'rem',
})

function App() {
  return (
    <div className="App">
      <HomePage />
    </div>
  );
}

export default App;

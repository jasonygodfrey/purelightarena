import React, { useState } from 'react';
import Login from './pages/Login';
import Selection from './pages/Selection';
import ThreeScene from './components/ThreeScene';
import './styles/App.css';

const App = () => {
  const [user, setUser] = useState(null);
  const [selection, setSelection] = useState(null);

  const handleLogin = (userData) => {
    setUser(userData);
  };

  const handleSelection = (selectionData) => {
    setSelection(selectionData);
  };

  if (!user) {
    return <Login onLogin={handleLogin} />;
  }

  if (!selection) {
    return <Selection onSelection={handleSelection} />;
  }

  return <ThreeScene />;
};

export default App;

import React, { useState } from 'react';
import './Selection.css';

const Selection = ({ onSelection }) => {
  const [gameMode, setGameMode] = useState('1v1');
  const [role, setRole] = useState('melee');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSelection({ gameMode, role });
  };

  return (
    <div className="selection-container">
      <form onSubmit={handleSubmit}>
        <h2>Select Game Mode and Role</h2>
        <div className="left-section">
          <label>Game Mode</label>
          <select value={gameMode} onChange={(e) => setGameMode(e.target.value)}>
            <option value="1v1">1v1</option>
            <option value="2v2">2v2</option>
            <option value="3v3">3v3</option>
            <option value="dungeon">Dungeon</option>
          </select>
        </div>
        <div className="right-section">
          <label>Role</label>
          <select value={role} onChange={(e) => setRole(e.target.value)}>
            <option value="melee">Melee</option>
            <option value="caster">Caster</option>
            <option value="healer">Healer</option>
          </select>
        </div>
        <button type="submit">Start Game</button>
      </form>
    </div>
  );
};

export default Selection;

import React from 'react';
import Navbar from './Navbar';

const App = () => {
  return (
    <div>
      <Navbar />
      <main style={{ padding: '20px' }}>
        <h2>Welcome to My React Page</h2>
        <p>This is a simple React Page.</p>
      </main>
    </div>
  );
};

export default App;

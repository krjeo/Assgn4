import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from './component/Homepage';
// Import other components if necessary

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

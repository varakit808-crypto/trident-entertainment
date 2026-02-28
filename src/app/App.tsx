import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HomePage } from '@/app/pages/HomePage';
import { PaintSipLanding } from '@/app/pages/PaintSipLanding';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/paint-sip" element={<PaintSipLanding />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

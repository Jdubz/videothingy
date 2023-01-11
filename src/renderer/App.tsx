import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import Webcam from 'react-webcam';

import './App.css';

const Hello = () => {
  return (
    <div>
      <h1>Video Thingy!</h1>
      <div>
        <Webcam onUserMediaError={console.error} />
      </div>
    </div>
  );
};

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Hello />} />
      </Routes>
    </Router>
  );
}

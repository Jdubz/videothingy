import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import Webcam from "react-webcam";

import icon from '../../assets/icon.svg';
import './App.css';


const Hello = () => {
  return (
    <div>
      <h1>Video Thingy!</h1>
      <Webcam
        onUserMediaError={console.error}
      />
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

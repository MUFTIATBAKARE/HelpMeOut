import { Route, Routes } from "react-router-dom";
import "./App.css";
import LandingPage from "./pages/LandingPage";
import SignUp from "./pages/SignUp";
import RecordingReady from "./pages/RecordingReady";
import VideoRepository from "./pages/VideoRepository";
import SingleVideo from "./pages/SingleVideo";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<RecordingReady />} />
        <Route path="/home" element={<LandingPage />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/repository" element={<VideoRepository />} />
        <Route path="/video" element={<SingleVideo />} />
      </Routes>
    </>
  );
}

export default App;

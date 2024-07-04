// src/App.jsx
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Error from "./components/Error404/index";
import Header from "./components/Header/index";
import Freelances from "./pages/Freelances";
import Home from "./pages/Home/index";
import Survey from "./pages/Survey";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/survey" element={<Survey />} />
          <Route path="/survey/:questionNumber" element={<Survey />} />
          <Route path="/profils" element={<Freelances />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

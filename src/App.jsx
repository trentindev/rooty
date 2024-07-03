// src/App.jsx
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/index";
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
        </Routes>
      </Router>
    </>
  );
}

export default App;

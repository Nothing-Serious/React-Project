import "./App.css";
import Navbar from "./compunents/Navbar.js";
import Home from "./compunents/Home.js";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Services from "./pages/Services.js";
import Contact from "./pages/Contact.js";
import About from "./pages/About.js";
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    
    </Router>
  );
}

export default App;

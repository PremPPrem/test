import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Pricing from "./pages/Pricing";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import { ApiContextProvider } from "./context/ApiContext";

function App() {
  return (
    <div>
      <ApiContextProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} exact></Route>
          <Route path="/About" element={<About />}></Route>
          <Route path="/Services" element={<Services />}></Route>
          <Route path="/Pricing" element={<Pricing />}></Route>
          <Route path="/Contact" element={<Contact />}></Route>
          <Route path="/Privacy" element={<Privacy />}></Route>
          <Route path="/Terms" element={<Terms />}></Route>
        </Routes>
        <Footer />
      </Router>
      </ApiContextProvider>
    </div>
  );
}

export default App;

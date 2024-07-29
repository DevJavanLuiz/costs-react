import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/pages/Home";
import Contact from "./components/pages/Contact";
import Company from "./components/pages/Company";
import NewProject from "./components/pages/NewProject.js";
import Container from "./components/layout/Container.js";
import Footer from "./components/layout/Footer.js";
import NavBar from "./components/layout/NavBar.js";
import Projects from "./components/pages/Projects.js";

function App() {
  return (
    <Router>
      <NavBar />
      <Container customClass="min-height">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/company" element={<Company />}></Route>
          <Route path="/projects" element={<Projects />}></Route>
          <Route path="/newproject" element={<NewProject />}></Route>
        </Routes>
      </Container>
      <Footer />
    </Router>
  );
}

export default App;

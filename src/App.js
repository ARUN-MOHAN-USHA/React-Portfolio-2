// import './App.css';
import { Routes, Route} from "react-router-dom";
import About from "./routes/About";
import Project from "./routes/Project"
import Home from "./routes/Home";
import Navbar from './components/Navbar';
import Footer from "./components/Footer";
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/project" element={<Project />} />
      </Routes>
      <Footer />
    </>
  );
}
export default App;

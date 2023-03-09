import { Routes, Route } from 'react-router-dom';
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Error from "./Error";
import NavBar from "./NavBar";


function App() {
  return (
    <>
    <NavBar />
      <Routes>
        <Route  path="/" element={<Home />} exact />
        <Route  path="/home" element={<Home />} />
        <Route  path="/about" element={<About />} />
        <Route  path="/contact" element={<Contact />} />
        <Route  path="*" element={<Error />} />
        {/* <Route path="*" element={<h1>Oops! Page not found..</h1>} /> */}
      </Routes>
    </>
  );
}
export default App;
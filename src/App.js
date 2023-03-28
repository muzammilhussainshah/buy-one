// import './../../App.css';
import {
  Route,
  Routes
} from "react-router-dom";
import Home from '../src/pages/Home/Home';
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        {/* <Route path="/about" element={<About />}></Route>
      <Route path="/Business" element={<Business />}></Route>
      <Route path="/company" element={<Company />}></Route>
      <Route path="/contact" element={<Contact />}></Route>
    <Route path="/news" element={<News />}></Route> */}
      </Routes>
      <Footer />
    </>
  );
}

export default App;

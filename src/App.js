// import './../../App.css';
import {
  Route,
  Routes
} from "react-router-dom";
import Home from '../src/pages/Home/Home';
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import ConfirmAddress from "./pages/ConfirmAddress/ConfirmAddress";
import Colors from "./styles/Colors";

function App() {
  return (
    <div style={{ backgroundColor: Colors.bg }}>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/ConfirmAddress" element={<ConfirmAddress />}></Route>
        {/* <Route path="/about" element={<About />}></Route>
        <Route path="/Business" element={<Business />}></Route>
        <Route path="/company" element={<Company />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/news" element={<News />}></Route> */}
      </Routes>
      {/* <Home /> */}
      <Footer />
    </div>
  );
}

export default App;

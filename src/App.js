// import './../../App.css';
import {
  Route,
  Routes,
  useLocation
} from "react-router-dom";
import Home from '../src/pages/Home/Home';
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import ConfirmAddress from "./pages/ConfirmAddress/ConfirmAddress";
import ShoppingCart from "./pages/ShoppingCart/ShoppingCart";
import Colors from "./styles/Colors";
import WishList from "./pages/WishList/WishList";
import ProductCart from "./pages/ProductCart/ProductCart";
import EditProfile from "./pages/EditProfile/EditProfile";
import OnlineStore from "./pages/OnlineStore/OnlineStore";

function App() {
  const location = useLocation();
  console.log(location, 'locationlocation')
  return (
    <div style={{ backgroundColor: Colors.bg }}>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/ConfirmAddress" element={<ConfirmAddress />}></Route>
        <Route path="/ShoppingCart" element={<ShoppingCart />}></Route>
        <Route path="/WishList" element={<WishList />}></Route>
        <Route path="/ProductCart" element={<ProductCart />}></Route>
        <Route path="/EditProfile" element={<EditProfile/>}></Route>
        <Route path="/OnlineStore" element={<OnlineStore/>}></Route>
      </Routes>
      {/* <Home /> */}
      <Footer location={location} />
    </div>
  );
}

export default App;

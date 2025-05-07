import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Login from './components/Login';
import Contact from './components/Contact';
import About from './components/About';
import Signup from './components/Signup';
import Location from './components/Location';
import Product from './components/Product';
import Cofee from './components/Cofee';
import Icecream from './components/Icecream';
import Cake from './components/Cake';
import Freshjuice from './components/Freshjuice';
import Dessert from './components/Dessert';
import Cafespecial from './components/Cafespecial';
import Wishlist from './components/Wishlist';
import { WishlistProvider } from "./components/WishlistContext";
import Footer from './components/Footer';
import Gotocart from './components/Gotocart';
import Buynow from './Buynow';

function App() {
  return (  
    <WishlistProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Navigate to="/home" replace />} />
          <Route path='/home' element={<Home />} />
          <Route path='/header' element={<Header />} />
          <Route path='/login' element={<Login />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/about' element={<About />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/location' element={<Location />} />
          <Route path='/product' element={<Product />} />
          <Route path='/coffee' element={<Cofee />} />
          <Route path='/icecream' element={<Icecream />} />
          <Route path='/cake' element={<Cake />} />
          <Route path='/freshjuice' element={<Freshjuice />} />
          <Route path='/dessert' element={<Dessert />} />
          <Route path='/cafespecial' element={<Cafespecial />} />
          <Route path='/wishlist' element={<Wishlist />} />
          <Route path='/footer' element={<Footer/>}/>
          <Route path='/gotocard' element={<Gotocart/>}/>
          <Route path='/buynow' element={<Buynow/>}/>
        </Routes>   
      </Router>
      <></>
    </WishlistProvider>
   
  );
}

export default App;
import './App.css';
import Home from './components/Home';
import Footer from './components/layouts/Footer';
import Header from './components/layouts/Header';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';//style
import ProductDetail from './components/product/ProductDetail';

function App() {
  return (
    <Router>
      <div className="App">
        <HelmetProvider>
          <Header />
          <div >

          </div>
          
          <Footer />
        </HelmetProvider>

      </div>
    </Router>
  );
}

export default App;

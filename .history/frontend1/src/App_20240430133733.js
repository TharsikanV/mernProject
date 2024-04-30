import './App.css';
import Home from './components/Home';
import Footer from './components/layouts/Footer';
import Header from './components/layouts/Header';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
function App() {
  return (
    <div className="App">
    <Header/>
    <Home/>
    <Footer/>
    </div>
  );
}

export default App;

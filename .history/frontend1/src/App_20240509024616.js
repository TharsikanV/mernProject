import './App.css';
import Home from './components/Home';
import Footer from './components/layouts/Footer';
import Header from './components/layouts/Header';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';//style
import ProductDetail from './components/product/ProductDetail';
import ProductSearch from './components/product/ProductSearch';
import Login from './components/user/Login';
import Register from './components/user/Register';
import { useEffect } from 'react';
import store from './store';
import { loadUser } from './actions/userActions';
import Profile from './components/user/Profile';
import ProtectedRoute from './components/route/ProtectedRoute';
import UpdateProfile from './components/user/UpdateProfile';
import UpdatePassword from './components/user/UpdatePassword';
import ForgotPassword from './components/user/ForgotPassword';
import ResetPassword from './components/user/ResetPassword';
import Cart from './components/cart/Cart';
import Shipping from './components/cart/Shipping';
import ConfirmOrder from './components/cart/ConfirmOrder';

function App() {
  useEffect(()=>{
    store.dispatch(loadUser)
  })
  return (
    <Router>
      <div className="App">
        <HelmetProvider>
          <Header />
          <div className="container container-fluid">
            <ToastContainer theme='dark' />
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/search/:keyword' element={<ProductSearch/>} />
              <Route path='/product/:id' element={<ProductDetail />} />
              <Route path='/login' element={<Login/>} />
              <Route path='/register' element={<Register/>} />
              <Route path='/myProfile' element={<ProtectedRoute><Profile/></ProtectedRoute>} />{/**protect panna components ah */}
              <Route path='/myProfile/update' element={<ProtectedRoute><UpdateProfile/></ProtectedRoute>} />
              <Route path='/myProfile/update/password' element={<ProtectedRoute><UpdatePassword/></ProtectedRoute>} />
              <Route path='/password/forgot' element={<ForgotPassword/>} />{/**login pannatha user thaan intha page ah access pannuvaaru */}
              <Route path='/password/reset/:token' element={<ResetPassword/>} />{/**login pannatha user thaan intha page ah access pannuvaaru */}
              <Route path='/cart' element={<Cart/>} />
              <Route path='/shipping' element={<ProtectedRoute><Shipping/></ProtectedRoute>} />
              <Route path='/order/confirm' element={<ProtectedRoute><ConfirmOrder/></ProtectedRoute>} />
              <Route path='/payment' element={<ProtectedRoute><Pay</ProtectedRoute>} />
            </Routes>
          </div>
          <Footer />
        </HelmetProvider>

      </div>
    </Router>
  );
}

export default App;

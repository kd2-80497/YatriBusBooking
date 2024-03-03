import { Route,Routes } from "react-router-dom";
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import ForgotPassword from "./pages/ForgotPassword";
import Home from "./pages/Home";
 import Bus from "./pages/Bus";
import Booking from "./pages/Booking";
import ContactUs from "./pages/contact/ContactUs";
import AboutUs from "./pages/AboutUs";
import { PassengerForm } from "./pages/PassengerForm";
import Payment from "./pages/Payment";
import Feedback from "./pages/Feedback";
import ConfirmBooking from "./pages/ConfirmBooking";
import Checkout from "./pages/Checkout";


function App() {
  return (
    <div className="container-fluid">
   <Routes>  
    <Route  index element={<Signin/>}   />
    <Route  path='/' element={<Signin/>}   />
    <Route  path='/signup' element={<Signup/>}   />
    <Route  path='/home' element={<Home/>}   />
     <Route  path='/forgotPassword' element={<ForgotPassword/>}   /> 
    <Route  path='/bus' element={<Bus/>}   />
    <Route  path='/booking' element={<Booking/>}   />

    <Route  path='/payment' element={<Payment/>}   />
    <Route  path='/feedback' element={<Feedback/>}   />
    <Route  path='/contact' element={<ContactUs/>}   />
    <Route  path='/about' element={<AboutUs/>}   />
    <Route  path='/passenger' element={<PassengerForm/>}   />
  <Route  path='/confirmBooking' element={<ConfirmBooking/>}   />
  <Route   path='/checkout' element={<Checkout/>}/>
  
   </Routes>
   <ToastContainer />
    </div>
  );
}

export default App;

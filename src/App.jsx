import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

import Home from './pages/home/Home';
import Dashboard from './pages/admin/dashboard/Dashboard';
import NoPage from './pages/nopage/NoPage';
import MyState from './context/data/myState';
import Login from './pages/registration/Login';
import Signup from './pages/registration/Signup';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Allproducts from './pages/allproducts/Allproducts';
import Privacy from './pages/CUSTOMER SERVICE/Privacy';
import About from './pages/CUSTOMER SERVICE/About';
import ContactUs from './pages/CUSTOMER SERVICE/Contact_Us';
import ReturnPolicy from './pages/CUSTOMER SERVICE/Return Policy';
import Android_App from './pages/CUSTOMER SERVICE/Android_App';
import Order from './pages/order/Order';
import Cart from './pages/cart/Cart';
import ProductInfo from './pages/productInfo/ProductInfo';
import AddProduct from './pages/admin/page/AddProduct';
import UpdateProduct from './pages/admin/page/UpdateProduct';
import Profile from "./pages/Profile/Profile";
import Test from "./pages/Test/Test";




import Cpp from './pages/allproducts/cources/C++/Cpp';
import Factorial from './pages/allproducts/cources/C++/Files/Factorial';
import Banckaccount from './pages/allproducts/cources/C++/Files/banckaccount';









import C_Lan from './pages/allproducts/cources/C_Lan/c_Lan';
import Gess_the_number from './pages/allproducts/cources/C_Lan/Gess_the_number';
import Multifunction from './pages/allproducts/cources/C_Lan/Multifunction';




import Calculater from './pages/allproducts/cources/HTML/Files/Calculater';
import Number_System from './pages/allproducts/cources/HTML/Files/Number_System';
import Shorting from './pages/allproducts/cources/HTML/Files/Shorting';
import HTML from './pages/allproducts/cources/HTML/HTML';
import HTML_PROJECT_COURCE from './pages/allproducts/cources/HTML/Cources/HTML_PROJECT_COURCE';
import EASY_HTML from './pages/allproducts/cources/HTML/Cources/EASY_HTML';
import Js_cource from './pages/allproducts/cources/HTML/js/js';
import TextToSpeech from "./pages/allproducts/cources/HTML/Files/TextToSpeech";


import ReactPRo from './pages/allproducts/cources/React/React';
import PRoject_COPY from './pages/allproducts/cources/React/Cources/PRoject_COPY';
import LEARN_REACT from './pages/allproducts/cources/React/Cources/LEARN_REACT';



import Python from './pages/allproducts/cources/Python/Python';
import PY_Calendar from './pages/allproducts/cources/Python/Cources/PY_Calendar';
import PY_Loop from './pages/allproducts/cources/Python/Cources/Py_Loop';
import QrCode from "./pages/allproducts/cources/Python/Cources/QrCode";
import StackQueue from "./pages/allproducts/cources/Python/Cources/Stack&Queue";


import Prumium_cources from './pages/all prumium cources/prumium_cources';
import Resetpassword from './pages/registration/Resetpassword';
import WEB_DEVLOPMENT from './pages/all prumium cources/cources/WEB_DEVLOPMENT';


import DSA from "./pages/allproducts/cources/DSA/DSA";

import Mimit from "./pages/MIMIT/MImit";
import CN from "./pages/MIMIT/Subject/CN";
import PythonM from './pages/MIMIT/Subject/PYTHON';
import DSAM from './pages/MIMIT/Subject/DSA'
import PCATM from './pages/MIMIT/Subject/PCAT';
import PCTAL from "./pages/MIMIT/Subject/PCTAL";
import DSAL from "./pages/MIMIT/Subject/DSAL";
import CNL from "./pages/MIMIT/Subject/CNL";
import PythonL from "./pages/MIMIT/Subject/PythonL";



import NewIntership from './pages/New intership/NewIntership';
import Testimonial from './components/testimonial/Testimonial';


import Github from "./pages/all prumium cources/cources/Github";
import LinuxTool from './pages/all prumium cources/cources/Linux Tool';


import Raptor from './pages/allproducts/cources/Raptor/Raptor';
import DSAWEB from './pages/DSA/DSA_WEB';














function App() {
  return (
    <MyState>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/webJlmembers" element={<Testimonial />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/allproducts" element={<Allproducts />} />
          <Route path="/productinfo/:id" element={<ProductInfo />} />
          <Route path="/prumium_cources" element={<Prumium_cources />} />
          <Route path="/Android" element={<Android_App />} />
          <Route
            path="/addproduct"
            element={
              <ProtectedRouteForAdmin>
                <AddProduct />
              </ProtectedRouteForAdmin>
            }
          />
          <Route
            path="/updateproduct"
            element={
              <ProtectedRouteForAdmin>
                <UpdateProduct />
              </ProtectedRouteForAdmin>
            }
          />
          <Route
            path="/order"
            element={
              <ProtectedRoute>
                <Order />
              </ProtectedRoute>
            }
          />
          <Route path="/cart" element={<Cart />} />
          <Route
            path="/dashboard"
            element={
              <ProtectedRouteForAdmin>
                <Dashboard />
              </ProtectedRouteForAdmin>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/resetpassword" element={<Resetpassword />} />
          <Route path="/*" element={<NoPage />} />
          <Route path="/Privacy" element={<Privacy />} />
          <Route path="/ReturnPolicy" element={<ReturnPolicy />} />
          <Route path="/ContactUs" element={<ContactUs />} />
          <Route path="/About" element={<About />} />

          <Route path="/Cpp" element={<Cpp />} />
          <Route path="/Cpp_Bank_Acoount" element={<Banckaccount />} />
          <Route path="/Cpp_Factorial" element={<Factorial />} />

          <Route path="/C_Lan" element={<C_Lan />} />
          <Route path="/C_Multifunction" element={<Multifunction />} />
          <Route path="/C_Game" element={<Gess_the_number />} />

          <Route path="/React" element={<ReactPRo />} />
          <Route path="/Learn_React" element={<LEARN_REACT />} />
          <Route path="/Project_React" element={<PRoject_COPY />} />

          <Route path="/Python" element={<Python />} />
          <Route path="/Py_Loop" element={<PY_Loop />} />
          <Route path="/Py_Calendar" element={<PY_Calendar />} />
          <Route path="/Py_QrCode" element={<QrCode />} />
          <Route path="/Py_Stack_&_Queue" element={<StackQueue />} />

          <Route path="/HTML" element={<HTML />} />
          <Route path="/HTML_COURCE" element={<HTML_PROJECT_COURCE />} />
          <Route path="/HTML_Calculater" element={<Calculater />} />
          <Route path="/HTML_Number_System" element={<Number_System />} />
          <Route path="/HTML_shorting" element={<Shorting />} />
          <Route path="/WEB_DEVLOPMENT_COURCE" element={<WEB_DEVLOPMENT />} />
          <Route path="/Easy_HTML" element={<EASY_HTML />} />
          <Route path="/Js_cource" element={<Js_cource />} />
          <Route path="/texttospeech" element={<TextToSpeech />} />

          <Route path="/DSA" element={<DSA />} />

          <Route path="/Mimit" element={<Mimit />} />
          <Route path="/Mimit/CN" element={<CN />} />
          <Route path="/Mimit/CNL" element={<CNL />} />
          <Route path="/Mimit/Python" element={<PythonM />} />
          <Route path="/Mimit/PythonL" element={<PythonL />} />
          <Route path="/Mimit/DSA" element={<DSAM />} />
          <Route path="/Mimit/DSAL" element={<DSAL />} />
          <Route path="/Mimit/PCAT" element={<PCATM />} />
          <Route path="/Mimit/PCATL" element={<PCTAL />} />

          <Route path="/Github" element={<Github />} />
          <Route path="/LinuxTool" element={<LinuxTool />} />

          <Route path="/NewUpdate" element={<NewIntership />} />
          <Route path="/OnlineTest" element={<Test />} />

          <Route path="/FlowChart" element={<Raptor />} />
          <Route path="/DSA_WEB" element={<DSAWEB />} />
        </Routes>
        <ToastContainer />
      </Router>
    </MyState>
  );
}

export default App 

// user 

export const ProtectedRoute = ({children}) => {
  const user = localStorage.getItem('user')
  if(user){
    return children
  }else{
    return <Navigate to={'/login'}/>
  }
}

// admin 

//  const ProtectedRoutesForAdmin = ({children}) => {
//   const admin = JSON.parse(localStorage.getItem('user'))
//   console.log(admin.user.email)
//   if (admin.user.email === 'lgteamworkofficial@gmail.com') {
//     return children
//   }
//   else {
//     return <Navigate to='/login' />
//   }
// }
export const ProtectedRouteForAdmin = ({children})=> {
  const admin = JSON.parse(localStorage.getItem('user'))
  
  if(admin.user.email === 'lgteamworkofficial@gmail.com'){
    return children
  }
  else{
    return <Navigate to={'/login'}/>
  }

}
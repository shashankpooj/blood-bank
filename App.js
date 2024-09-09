
import React from 'react';
import {Routes, Route} from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Login from './redux/pages/auth/Login';
import Register from './redux/pages/auth/Register';
import HomePage from './redux/pages/auth/HomePage';
import ProtectedRoute from './components/Routes/ProtectedRoute';
import PublicRoute from './components/Routes/PublicRoute';
import Donor from './redux/pages/Dashboard/Donor';
import Hospitals from './redux/pages/Dashboard/Hospitals';
import OrganisationPage from './redux/pages/Dashboard/OrganisationPage';
import Consumer from './redux/pages/Dashboard/Consumer';
import Donation from './redux/pages/Donation';
import DonorList from './redux/pages/Admin/DonorList';
import HospitalList from './redux/pages/Admin/HospitalList';
import OrgList from './redux/pages/Admin/OrgList';
import AdminHome from './redux/pages/Admin/AdminHome';
function App() {
  return (
    <>
    <ToastContainer/>
      <Routes>

       <Route path='/donor-list' 
        element={
          <ProtectedRoute>
              <DonorList/>
          </ProtectedRoute>
      
        }
         />        
        <Route path='/admin' 
        element={
          <ProtectedRoute>
              <AdminHome/>
          </ProtectedRoute>
      
        }
         />

<Route path='/hospital-list' 
        element={
          <ProtectedRoute>
              <HospitalList/>
          </ProtectedRoute>
      
        }
         />

<Route path='/org-list' 
        element={
          <ProtectedRoute>
              <OrgList/>
          </ProtectedRoute>
      
        }
         />

<Route path='/hospital' 
        element={
          <ProtectedRoute>
              <Hospitals/>
          </ProtectedRoute>
      
        }
         />

<Route path='/consumer' 
        element={
          <ProtectedRoute>
              <Consumer/>
          </ProtectedRoute>
      
        }
         />

<Route path='/donation' 
        element={
          <ProtectedRoute>
              <Donation/>
          </ProtectedRoute>
      
        }
         />

         

<Route path='/Organisation' 
        element={
          <ProtectedRoute>
              <OrganisationPage/>
          </ProtectedRoute>
      
        }
         />

           <Route path='/donor' 
        element={
          <ProtectedRoute>
              <Donor/>
          </ProtectedRoute>
      
        }
         />
          <Route path='/' 
        element={
          <ProtectedRoute>
              <HomePage/>
          </ProtectedRoute>
      
        }
         />

         
         
        <Route path='/login' element={
          <PublicRoute>
            <Login/>
          </PublicRoute>
        }
        
        />
        <Route path='/register' element={
          <PublicRoute>
            <Register/>
          </PublicRoute>
        
      }
        />
      </Routes>
      </>
      
    
  );
}
export default App;
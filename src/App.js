import logo from './logo.svg';
import './App.css';
import Landingpage from './components/LandingPage/Landingpage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Registration from './components/user/Registration';
import Login from './components/user/Userlogin';
import Adminlogin from './components/admin/Adminlogin';
import Supportlogin from './components/customersupport/Supportlogin';
import AdminSidebar from './components/admin/AdminPages/AdminSidebar';
import AdminHome from './components/admin/AdminPages/AdminHome';
import AdminUserView from './components/admin/AdminPages/AdminUserView';
import AdminMoviesView from './components/admin/AdminPages/AdminMoviesView';
import AdminComplaintView from './components/admin/AdminPages/AdminComplaintView';
import AdminSubscription from './components/admin/AdminPages/AdminSubscription';
import AdminReportView from './components/admin/AdminPages/AdminReportView';
import SupportSideBar from './components/customersupport/SupportPages/SupportSideBar';
import SupportUserView from './components/customersupport/SupportPages/SupportUserView';
import SupportHome from './components/customersupport/SupportPages/SupportHome';
import SupportMovieView from './components/customersupport/SupportPages/SupportMovieView';
import SupportComplaintView from './components/customersupport/SupportPages/SupportComplaintView';
import SupportSubscriptionView from './components/customersupport/SupportPages/SupportSubscriptionView';
import SupportReportView from './components/customersupport/SupportPages/SupportReportView';
import UserHome from './components/user/Userpages/UserHome';
import { PiEngineFill, PiKeyLight } from 'react-icons/pi';
import { MdAccessAlarm } from 'react-icons/md';
import UserProfile from './components/user/Userpages/UserProfile';
function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path='/' element={<Landingpage />} />
          <Route path='/userreg' element={<Registration />} />
          <Route path='/userlogin' element={<Login />} />
          <Route path='/userhome' element={<UserHome />} />
          <Route path='/userprofile' element={<UserProfile />} />
          ------------Admin-----------------------------------------
          <Route path='/adminlogin' element={<Adminlogin />} />
          <Route path='/adminhome' element={<AdminSidebar />} />
          <Route path='/admindashboard' element={<AdminHome />} />
          <Route path='/adminuserview' element={<AdminUserView />} />
          <Route path='/adminmovieview' element={<AdminMoviesView />} />
          <Route path='/admincomplaintview' element={<AdminComplaintView />} />
          <Route path='/adminsubcriptionview' element={<AdminSubscription />} />
          <Route path='/adminreportview' element={<AdminReportView />} />

          -----------CustomerSupport--------------------------------------
          <Route path='/supportlogin' element={<Supportlogin />} />
          <Route path='/supporthome' element={<SupportHome />} />
          <Route path='/supportuserview' element={<SupportUserView />} />
          <Route path='/supportmovieview' element={<SupportMovieView />} />
          <Route path='/supportcomplaintview' element={<SupportComplaintView />} />
          <Route path='/supportsubscriptionview' element={<SupportSubscriptionView />} />
          <Route path='/supportreportview' element={<SupportReportView />} />

        </Routes>
      </div>
    </BrowserRouter>
  );
}
export default App;




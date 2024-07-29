
// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Dashboard from './components/dashboard/Dashboard';
// import LoginPage from './components/login/LoginPage';
// import Smart from './components/smart/Smart';
// import IDashboard from './components/idashboard/IDashboard';
// import Table from './components/idashboard/Table';

// function App() {
//   return (
//     <Router>
      
//       <Routes>
//         <Route path="/" element={<Dashboard/>} />
//         <Route path="/login" element={<LoginPage/>} />
//         {/* Add more routes here as needed */}
//         <Route path="/register" element={<Smart/>} />
//         <Route path="/dashboard" element={<IDashboard/>} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;














// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './components/dashboard/Dashboard';
import LoginPage from './components/login/LoginPage';
import Smart from './components/smart/Smart';
import IDashboard from './components/idashboard/IDashboard';
import Table from './components/idashboard/Table';
import AdminDashboard from './components/admindashboard/AdminDashboard';
import Login from './components/logins/Logins';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<Smart />} />
        {/* <Route path="/dashboard" element={<IDashboard />} /> */}
        <Route path="/dashboard" element={<AdminDashboard />} />
        <Route path="/adashboard" element={<IDashboard />} />
        <Route path="/login" element={<Login />} />

        {/* Add more routes here as needed */}
      </Routes>
    </Router>
  );
}

export default App;

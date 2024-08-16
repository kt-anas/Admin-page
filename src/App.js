 
import './App.css';
import { BrowserRouter as Router , Routes,Route } from 'react-router-dom'
 import AdminLogin from './page/AdminLogin';
import Dashboard from './page/Dashboard';
function App() {
  return (
    <div className="App">
       <AdminLogin/>
       <Router>
             <Routes>
             <Route path="/dashboard" element={<Dashboard/>} />
             </Routes>
     </Router>
    </div>
  );
}

export default App;

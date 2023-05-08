import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from "./components/Home/homepage";
import { Container } from 'reactstrap';
import Login from './components/Login/loginpage';
import Logout from './components/Logout/logoutpage';
import Registration from './components/Registration/registrationpage';
import { ToastContainer } from 'react-toastify';
import { Protector } from './helpers';

function App() {
  return (
  <Container>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Protector Component={Home} />} />
      <Route path="/login" element={<Login />} />
      <Route path="/logout" element={<Logout />} />
      <Route path="/registration" element={<Registration />} />
    </Routes>
    <ToastContainer />
    </BrowserRouter>
  </Container>
  ); 
}

export default App;

 import './App.css';
 import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Home from './components/Home';
import Login from './components/Login';
import {Routes, Route} from "react-router-dom";
import Error from './components/Error';
import Details from './components/Details';

function App() {
  return (
    <>
    <Header />
<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/login" element={<Login />} />
  <Route path="/details" element={<Details />} />
  <Route path="*" element={<Error />} />
</Routes>
   
    </>
  );
}

export default App;

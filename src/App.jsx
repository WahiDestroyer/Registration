import { BrowserRouter, Route, Routes } from "react-router";

import BlogDetails from "./components/home/BlogDetails";
import EcommerceLanding from "./pages/EcommerceLanding";
import RegistrationForm from "./pages/RegistrationForm";
import LoginPage from "./pages/LoginPage";
import Counter from "./pages/Users";
import Users from "./pages/Users";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* <Route index element={<Home />} /> */}
           <Route index element={<RegistrationForm />} />
             <Route path="/" element={<RegistrationForm />} />
           <Route path="/landing" element={<EcommerceLanding />} />
            <Route path="/dashboard" element={<Dashboard />} />
           <Route path="/login" element={<LoginPage />} />
          <Route path="/blogs/:id" element={<BlogDetails />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

// robiulhassanrobi@gmail.com

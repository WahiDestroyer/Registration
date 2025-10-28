// import { BrowserRouter, Route, Routes } from "react-router-dom"
// import Home from "./component/home/Home"
// import Registration from "./component/Registration"
// import LogIn from "./component/LogIn"


// function App() {

//   return (
//     <>
//     <BrowserRouter>
//     <Routes>
//       <Route index element={<Home/>}/>
//       <Route path="/registration" element={<Registration/>}/>
//       <Route path="/login" element={<LogIn/>}/>
//     </Routes>
//     </BrowserRouter>
//     </>
//   )
// }

// export default App
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from "react-router-dom";
import Registration from "./component/Registration";
import LogIn from "./component/LogIn";
import Home from "./component/home/Home";


function App() {
  return (
   <BrowserRouter>
     <Routes>
        <Route index element={<Registration />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/home" element={<Home />} /> {/* 👈 Home route */}
      </Routes>
   </BrowserRouter>
  );
}

export default App;

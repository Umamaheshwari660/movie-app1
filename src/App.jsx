

// // import React from "react";
// // import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// // import MovieDetail from "./components/MovieDetail/MovieDetail";
// // import Home from "./components/Home/Home"; 

// // const App = () => {
// //   return (
// //     <Router>
// //       <Routes>
// //         <Route path="/" element={<Home />} /> {/* ✅ Wrap slideshow + movie list */}
// //         <Route path="/movie/:id" element={<MovieDetail />} />
// //       </Routes>
// //     </Router>
// //   );
// // };

// // export default App;



// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import MovieDetail from "./components/MovieDetail/MovieDetail";
// import Home from "./components/Home/Home";
// import Footer from "./components/Footer/Footer";  // import your Footer component

// const App = () => {
//   return (
//     <Router>
//       {/* Your main content */}
//       <Routes>
//         <Route path="/" element={<Home />} /> {/* Home page */}
//         <Route path="/movie/:id" element={<MovieDetail />} /> {/* Movie detail page */}
//       </Routes>

//       {/* Footer appears on all pages */}
//       <Footer />
//     </Router>
//   );
// };

// export default App;


// src/App.jsx

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MovieDetail from "./components/MovieDetail/MovieDetail";
import Home from "./components/Home/Home";
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';


const App = () => {
  return (
    <Router>
        <Header />
      <Routes>
        <Route path="/" element={<Home />} />        {/* Home page */}
        <Route path="/movie/:id" element={<MovieDetail />} /> {/* Movie detail */}
      </Routes>

     
     <Footer />
    </Router>
  );
};

export default App;

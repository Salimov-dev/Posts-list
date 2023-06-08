// libraries
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
// components
import Posts from "./components/page/posts";
import AboutDeveloper from "./components/page/about-developer";
import AboutUser from "./components/page/about-user";
import Navbar from "./components/UI/navbar/navbar";
// hoc
import AppLoader from "./hoc/app-loader";

function App() {
  return (
    <div className="App">
      <AppLoader>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route index path="/" element={<Posts />} />
            <Route path="/developer" element={<AboutDeveloper />} />
            <Route path="/user/:userId?" element={<AboutUser />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </BrowserRouter>
      </AppLoader>
    </div>
  );
}

export default App;

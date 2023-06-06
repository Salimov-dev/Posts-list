// libraries
import { Routes, Route, BrowserRouter } from "react-router-dom";
// components
import Posts from "./components/page/posts";
import AboutDeveloper from "./components/page/about-developer";
import AboutUser from "./components/page/about-user";
import AppLoader from "./hoc/app-loader";

function App() {
  return (
    <div className="App">
      {/* <AppLoader> */}
        <BrowserRouter>
          <Routes>
            <Route index path="/" element={<Posts />} />
            <Route path="/developer" element={<AboutDeveloper />} />
            <Route path="/user/:userId?" element={<AboutUser />} />
          </Routes>
        </BrowserRouter>
      {/* </AppLoader> */}
    </div>
  );
}

export default App;

import { BrowserRouter, Route, Routes } from "react-router-dom";
import AboutMe from "./pages/AboutMe";
import Home from "./pages/Home";
import Menu from "./components/Menu";
import Footer from "components/Footer";
import BasePage from "components/BasePage";
import Post from "pages/Post";
import NotFound from "pages/NotFound";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Menu />
      <Routes>

        <Route path="/" element={<BasePage />} >
          <Route index element={<Home />} />
          <Route path="/aboutme" element={<AboutMe />} />
        </Route>
        
        <Route path="/post/:id" element={<Post />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      
      <Footer />
    </BrowserRouter>
  );
}

export default AppRoutes;

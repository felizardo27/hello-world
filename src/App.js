import AboutMe from "./pages/AboutMe";
import Home from "./pages/Home";

console.log(window.location)

const pagina = window.location.pathname === '/' ? <Home /> : <AboutMe />

const App = () => {
  return (
    pagina
  );
}

export default App;

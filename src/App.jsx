import "./App.css";
import Contact from "./sections/Contact/Contact";
import Footer from "./sections/Footer/Footer";
import Hero from "./sections/Hero/Hero";
import Navbar from "./sections/Navbar/Navbar";
import Projects from "./sections/Projects/Projects";
import Skills from "./sections/Skills/Skills";
import { useTheme } from "./common/ThemeContext";

function App() {
  const { theme, toggleTheme } = useTheme();
  return (
    <>
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <Hero theme={theme} toggleTheme={toggleTheme} />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </>
  );
}

export default App;

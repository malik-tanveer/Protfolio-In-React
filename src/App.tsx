import About from "./components/About";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

function App() {
    return (
        <>
            <Navbar />
            <div id="home">
                <Home />
            </div>
            <div id="about" >
                <About />
            </div>
            <div id="skills" >
                <Skills />
            </div>
            <div id="projects" >
                <Projects/>
            </div>
            <div id="experience" >
            <Experience/>
            </div>
            <div id="contact">
                <Contact />
            </div>
            <Footer/>
        </>
    );
}

export default App;

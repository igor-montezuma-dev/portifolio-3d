import Navbar from "./sections/navbar.jsx";
import Hero from "./sections/Hero.jsx";
import About from "./sections/About.jsx";
import Projects from "./sections/Projects.jsx";
import Experience from "./sections/Experience.jsx";

const App = () => {
    return (
        <main className="max-w-7xl mx-auto relative">
            <Navbar/>
            <Hero/>
            <About/>
            <Projects/>
            <Experience />
        </main>
    )
}
export default App

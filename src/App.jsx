import "./style.css";
import "./rest.css";
import { useState } from "react";

import Footer from "./components/Footer";
import Navigation from "./components/Navigation";
import Contact from "./components/Contact";
import About from "./components/About";
import Header from "./components/Header";
import Projects from "./components/Project";
import Resume from "./components/Resume";
//import Portfolio from "./components/Portfolio";

function App() {

    
    const [currentPage, setCurrentPage] = useState("About")
  
    function render() {
      if(currentPage == "About") {
        return <About />
      } else if (currentPage == "Portfolio") {
        return <Projects />
      } else if (currentPage == "Resume") {
        return <Resume />
      } else if (currentPage == "Contact") {
        return <Contact />
      }
    }
  
    return (
      <div className="App">
        <Navigation setCurrentPage={setCurrentPage} currentPage={currentPage}/>
        <Header />
        <main>
            {render()}
        </main>
        <Footer/>
      </div>
    );
  }
  
  export default App;

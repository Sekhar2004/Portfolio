import Header from "./components/header/Header";
import About from "./components/about/About";
import Contacts from "./components/contacts/Contacts";
import Myprojects from "./components/myprojects/Myprojects";
import Skills from "./components/skills/skills";
import Experience from "./components/experience/experience";
import Footer from "./components/footer/Footer";
import Nav from "./components/nav/nav";
import "./App.css";

function App() {
  return (
    <>
      <Header />
      <Nav/>
      <About />
      <Skills/>
      <Experience />
      <Myprojects/>
      <Contacts/>
      <Footer/>
    </>
  );
}

export default App;

import './App.css';
import { Header, About, Experience, Services, Portfolio, Testimonial, Contact, Footer } from "./Sections/index";
import { Nav } from "./Components/index";
function App() {
  return (
    <div className="App">
      <Header />
      <Nav />
      {/* <About /> */}
      <Experience />
      {/* <Services /> */}
      <Portfolio />
      <Contact />
      {/* <Testimonial /> */}
      <Footer />
    </div>
  );
}

export default App;

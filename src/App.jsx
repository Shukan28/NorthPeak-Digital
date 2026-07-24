import "./App.css";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Process from "./components/Process";
import Testimonials from "./components/Testimonials";
import Pricing from "./components/Pricing";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <main>
      <Hero />
      <Services />
      <Process />
      <Testimonials />
      <Pricing />
      <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
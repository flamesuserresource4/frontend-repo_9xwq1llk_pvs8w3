import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Products from "./components/Products";
import About from "./components/About";
import Contact from "./components/Contact";

function App() {
  return (
    <div id="top" className="min-h-screen bg-white text-emerald-900">
      <Navbar />
      <main>
        <Hero />
        <Products />
        <About />
        <Contact />
      </main>
      <footer className="border-t border-emerald-100 bg-emerald-50 py-8 text-center text-sm text-emerald-800/80">
        © {new Date().getFullYear()} Bu Lin — Healthy Homemade Snacks, Makassar. All rights reserved.
      </footer>
    </div>
  );
}

export default App;

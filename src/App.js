import Equipaments from './Components/Equipaments';
import Header from './Components/Header';
import Hero from './Components/Hero'
import News from './Components/News';
import Destaque from './Components/Destaque';
import Brands from './Components/Brands';
import Depoiments from './Components/Depoiments';
import About from './Components/About';
import Footer from './Components/Footer';

function App() {
  return (
    <div>
      <Header />
      <main>
        <Hero/>
        <Equipaments />
        <News />
        <Destaque />
        <Brands />
        <About />
        <Depoiments />
        <Footer />
      </main>
    </div>
  );
}

export default App;

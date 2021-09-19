import Equipaments from './Components/Equipaments';
import Header from './Components/Header';
import Hero from './Components/Hero'
import News from './Components/News';
import Destaque from './Components/Destaque';

function App() {
  return (
    <div>
      <Header />
      <main>
        <Hero/>
        <Equipaments />
        <News />
        <Destaque />
      </main>
    </div>
  );
}

export default App;

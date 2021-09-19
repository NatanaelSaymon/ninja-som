import Equipaments from './Components/Equipaments';
import Header from './Components/Header';
import Hero from './Components/Hero'
import News from './Components/News';

function App() {
  return (
    <div>
      <Header />
      <main>
        <Hero/>
        <Equipaments />
        <News />
      </main>
    </div>
  );
}

export default App;

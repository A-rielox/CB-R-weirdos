import Navigation from './components/Navigation';
import About from './components/sections/About';
import Home from './components/sections/Home';
import Roadmap from './components/sections/Roadmap';
import Team from './components/sections/Team';
import Footer from './components/Footer';
import Showcase from './components/sections/Showcase';
import Faq from './components/sections/Faq';
import ScrollToTop from './components/ScrollToTop';

function App() {
   return (
      <main>
         <Navigation />
         <Home />
         <About />
         <Roadmap />
         <Showcase />
         <Team />
         <Faq />
         <Footer />
         <ScrollToTop />
      </main>
   );
}

export default App;

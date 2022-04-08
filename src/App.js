import GlobalStyles from './styles/GlobalStyles';
import { ThemeProvider } from 'styled-components';
import { light } from './styles/Themes';

import Navigation from './components/Navigation';
import Home from './components/sections/Home';
import About from './components/sections/About';
import Roadmap from './components/sections/Roadmap';
import Showcase from './components/sections/Showcase';
import Team from './components/sections/Team';
import Faq from './components/sections/Faq';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
/* 

41.30
1.09.00 about
1.33.00 roadmap
2.21.00 showCase

*/
function App() {
   return (
      <main>
         <GlobalStyles />
         <ThemeProvider theme={light}>
            <Navigation />
            <Home />
            <About />
            <Roadmap />
            <Showcase />
            <Team />
            <Faq />
            <Footer />
            <ScrollToTop />
         </ThemeProvider>
      </main>
   );
}

export default App;

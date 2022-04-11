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
2.44.30 team
3.03.30 faq
3.21.30 footer
3.46.37 scrollTo
3.51.50 scrollToTop
4.01.00 comienza la parte responsive
4.01.40 hamburger btn
4.36.00 responsive roadmap
4.47.00 showcase

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

// 48 = 768

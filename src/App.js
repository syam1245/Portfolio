

import './App.css';
import Experience from './components/Experience';
import Footer from './components/Footer';
import HeaderNavigation from './components/HeaderNavigation';

function App() {
  return (
    <div>
    <HeaderNavigation />

    <Experience />


    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <div style={{ flex: 1 }}>
      </div>
      <Footer />
    </div>
    </div>
  );
}

export default App;

import './App.css';
import ParticlesBg  from './components/ParticlesBg';
import MatrixBg     from './components/MatrixBg';
import Nav          from './components/Nav';
import Hero         from './components/Hero';
import Stats        from './components/Stats';
import Thesis       from './components/Thesis';
import WhyBuy       from './components/WhyBuy';
import Tokenomics   from './components/Tokenomics';
import Links        from './components/Links';
import Footer       from './components/Footer';

export default function App() {
  return (
    <>
      <ParticlesBg />
      <MatrixBg />
      <Nav />
      <Hero />
      <Stats />
      <div className="divider" />
      <Thesis />
      <div className="divider" />
      <WhyBuy />
      <div className="divider" />
      <Tokenomics />
      <div className="divider" />
      <Links />
      <Footer />
    </>
  );
}

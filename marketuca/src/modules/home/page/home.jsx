// Home.jsx
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Resources from '../components/Resources';
import FranjaAzul from '../components/FranjaAzul';
import HowItWorks from '../components/HowItWorks';
import Benefits from '../components/Benefits';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <FranjaAzul />
      <Resources />
      <HowItWorks />
      <Benefits />
      <Footer />
    </div>
  );
};

export default Home;

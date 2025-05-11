// Home.jsx
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Resources from '../components/Resources';
import FranjaAzul from '../components/FranjaAzul';
import HowItWorks from '../components/HowItWorks';

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <FranjaAzul />
      <Resources />
      <HowItWorks />
    </div>
  );
};

export default Home;


import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
// import Banner from '../components/Banner';
// import AboutSection from '../components/AboutSection';
// import HowToHelpSection from '../components/HowToHelpSection';
// import SuccessStoriesSection from '../components/SuccessStoriesSection';
// import VolunteerSection from '../components/VolunteerSection';

const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      offset: 200,
    });
  }, []);

  return (
    <div

    >
     
      <div ></div>

  
      <div className="relative z-10 mx-auto px-4 lg:px-8">
     {/* Banner Section */}
        <section className='lg:px-16'>
     
        </section>




     
      </div>
    </div>
  );
};

export default Home;

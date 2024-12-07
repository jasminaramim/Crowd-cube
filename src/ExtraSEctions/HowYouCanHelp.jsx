import React from 'react';
import { Fade } from 'react-awesome-reveal'; 

const HowYouCanHelp = () => {
  return (
    <section className="mt-20 p-10 bg-blue-50 rounded-lg">
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold text-blue-800">How You Can Help</h2>
        <p className="text-lg text-blue-600 mt-2">
          Join us in making a difference by choosing one of the ways to contribute below.
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <Fade triggerOnce={true} delay={0.5}>
          <div className="bg-white shadow-md rounded-lg p-6 text-center">
            <h3 className="text-2xl font-semibold text-blue-800 mb-4">Donate Items</h3>
            <p className="text-blue-600">
              Share clothing, food, and other essential items with those in need this winter.
            </p>
          </div>
        </Fade>
        <Fade triggerOnce={true} delay={1}> 
          <div className="bg-white shadow-md rounded-lg p-6 text-center">
            <h3 className="text-2xl font-semibold text-blue-800 mb-4">Volunteer Your Time</h3>
            <p className="text-blue-600">
              Join our team of volunteers to distribute donations and spread warmth in the community.
            </p>
          </div>
        </Fade>
        <Fade triggerOnce={true} delay={1.5}> 
          <div className="bg-white shadow-md rounded-lg p-6 text-center">
            <h3 className="text-2xl font-semibold text-blue-800 mb-4">Sponsor a Campaign</h3>
            <p className="text-blue-600">
              Help us run impactful campaigns by providing financial support or resources.
            </p>
          </div>
        </Fade>
      </div>
    </section>
  );
};

export default HowYouCanHelp;

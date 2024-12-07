

import React from 'react';
import { Fade } from 'react-awesome-reveal';

const ImpactStories = () => {
  const stories = [
    {
      id: 1,
      title: "A Warm Winter for Aliya",
      description:
        "Aliya, a 10-year-old girl, received her first warm coat last winter thanks to your generosity. Her smile says it all!",
      image: "https://i.ibb.co/0rmTdf5/200549-P01-HAA-620.jpg",
    },
    {
      id: 2,
      title: "Families Reunited Over a Meal",
      description:
        "With your help, we provided hot meals to 500 families, bringing warmth and hope to their homes.",
      image: "https://i.ibb.co/ZBVKb9c/lifestyle-people-suffering-from-emotional-numbness.jpg",
    },
    {
      id: 3,
      title: "Rebuilding Lives, One Step at a Time",
      description:
        "Your support helped rebuild shelters for those who lost everything in the cold.",
      image: "https://i.ibb.co/9s1JtsL/Screenshot-2024-12-07-213059.png",
    },
  ];

  return (
    <section className="mt-20 p-10 bg-gray-100 rounded-lg">
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold text-gray-800">Impact Stories</h2>
        <p className="text-lg text-gray-600 mt-2">
          See how your contributions are changing lives.
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {stories.map((story) => (
          <Fade key={story.id} triggerOnce={true} delay={0.5}> {/* Adding reveal effect */}
            <div className="bg-white shadow-md rounded-lg p-6">
              <img
                src={story.image}
                alt={story.title}
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                {story.title}
              </h3>
              <p className="text-gray-600">{story.description}</p>
            </div>
          </Fade>
        ))}
      </div>
    </section>
  );
};

export default ImpactStories;

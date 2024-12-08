
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaSun, FaMoon } from 'react-icons/fa';
import Banner from './Banner';
import HowYouCanHelp from '../ExtraSEctions/HowYouCanHelp';
import ImpactStories from '../ExtraSEctions/ImpactStories';

const HomePage = () => {
  const [campaigns, setCampaigns] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const navigate = useNavigate();

 
  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme === 'dark') {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark'); 
    }
  }, []);


  const toggleTheme = () => {
    const newTheme = !isDarkMode;
    setIsDarkMode(newTheme);
    if (newTheme) {
      localStorage.setItem('theme', 'dark');
      document.documentElement.classList.add('dark');
    } else {
      localStorage.setItem('theme', 'light');
      document.documentElement.classList.remove('dark');
    }
  };

  useEffect(() => {
    const fetchCampaigns = async () => {
      try {
        const response = await fetch('https://b10-a10-server-side-jasminaramim.vercel.app/campaigns');
        const data = await response.json();
        const currentDate = new Date();
        const runningCampaigns = data.filter((campaign) => new Date(campaign.deadline) > currentDate);
        setCampaigns(runningCampaigns.slice(0, 6));
      } catch (error) {
        console.error('Error fetching campaigns:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchCampaigns();
  }, []);

  const handleSeeMore = (campaignId) => {
    navigate(`/campaign/${campaignId}`);
  };

  return (
    <div className={`min-h-screen ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'}`}>
      {/* Theme Toggle Button */}
      <div className="p-4 text-right">
        <button
          onClick={toggleTheme}
          className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none flex items-center justify-center"
        >
          {isDarkMode ? (
            <FaSun className="text-yellow-400 text-2xl" /> 
          ) : (
            <FaMoon className="text-gray-300 text-2xl" /> 
          )}
          <span className="ml-2">{isDarkMode ? 'Light Mode' : 'Dark Mode'}</span>
        </button>
      </div>

      <div className="mt-8">
        <Banner />
      </div>

      <div className="flex flex-col p-5">
        <h2 className="text-2xl font-semibold mb-5">Running Campaigns</h2>

        {isLoading ? (
          <div className="flex justify-center items-center my-10">
            <div className="w-16 h-16 border-4 border-t-transparent border-blue-500 border-solid rounded-full animate-spin"></div>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-5">
            {campaigns.map((campaign) => (
              <div
                key={campaign._id}
                className={`p-4 rounded-lg shadow-md border ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}
              >
                <img
                  src={campaign.image}
                  alt={campaign.title}
                  className="w-full h-48 object-cover rounded-md mb-4"
                />
                <h3 className="text-xl font-semibold mb-2">{campaign.title}</h3>
                <p className="mb-4">{campaign.description.slice(0, 100)}...</p>
                <button
                  onClick={() => handleSeeMore(campaign._id)}
                  className="w-full py-2 px-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                >
                  See More
                </button>
              </div>
            ))}
          </div>
        )}
      </div>

      <HowYouCanHelp />

      <ImpactStories />
    </div>
  );
};

export default HomePage;



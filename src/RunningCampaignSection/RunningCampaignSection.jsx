
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const RunningCampaigns = () => {
  const [campaigns, setCampaigns] = useState([]);

  useEffect(() => {
    const fetchCampaigns = async () => {
      try {
        const response = await fetch('/api/campaigns/active'); 
        const data = await response.json();
        setCampaigns(data);
      } catch (error) {
        console.error('Error fetching campaigns:', error);
      }
    };
    fetchCampaigns();
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {campaigns.map((campaign) => (
        <div key={campaign._id} className="card w-full bg-white shadow-lg rounded-lg p-4">
          <img src={campaign.imageUrl} alt={campaign.title} className="w-full h-48 object-cover rounded-t-lg" />
          <div className="p-4">
            <h3 className="text-xl font-bold">{campaign.title}</h3>
            <p className="text-gray-600 mt-2">{campaign.description}</p>
            <div className="mt-4">
              <p className="text-lg font-semibold">Goal: ${campaign.goalAmount}</p>
              <p className="text-sm text-gray-500">Deadline: {new Date(campaign.deadline).toLocaleDateString()}</p>
            </div>
            <Link to={`/campaign/${campaign._id}`} className="btn btn-primary mt-4">See More</Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RunningCampaigns;

import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const AllCampaignsPage = () => {
  const [campaigns, setCampaigns] = useState([]);
  const [isLoading, setIsLoading] = useState(true); 
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCampaigns = async () => {
      try {
        const response = await fetch('http://localhost:3000/campaigns');
        const data = await response.json();
        setCampaigns(data);
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
    <div className="overflow-x-auto p-5">
      <h2 className="text-3xl font-semibold text-center mb-6">All Campaigns</h2>

      {/* Loading Spinner */}
      {isLoading ? (
        <div className="flex justify-center items-center my-10">
          <div className="w-16 h-16 border-4 border-t-transparent border-blue-500 border-solid rounded-full animate-spin"></div>
        </div>
      ) : (
        <div className="relative overflow-hidden shadow-md border border-gray-200 rounded-lg">
          <table className="table-auto w-full text-sm text-left text-gray-500">
            <thead className="text-xs text-gray-700 uppercase bg-gray-100">
              <tr>
                <th className="px-4 py-3 border">Title</th>
                <th className="px-4 py-3 border">Description</th>
                <th className="px-4 py-3 border">Goal Amount</th>
                <th className="px-4 py-3 border">Deadline</th>
                <th className="px-4 py-3 border">Actions</th>
              </tr>
            </thead>
            <tbody>
              {campaigns.map((campaign) => (
                <tr key={campaign._id} className="border-b hover:bg-gray-50">
                  <td className="px-4 py-3 border">{campaign.title}</td>
                  <td className="px-4 py-3 border">{campaign.description.slice(0, 100)}...</td>
                  <td className="px-4 py-3 border">${campaign.goalAmount}</td>
                  <td className="px-4 py-3 border">{new Date(campaign.deadline).toLocaleDateString()}</td>
                  <td className="px-4 py-3 border text-center">
                    <button
                      onClick={() => handleSeeMore(campaign._id)}
                      className="text-blue-600 hover:text-blue-800 font-medium transition duration-300"
                    >
                      See More
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default AllCampaignsPage;

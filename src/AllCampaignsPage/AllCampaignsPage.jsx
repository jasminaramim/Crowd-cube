import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const AllCampaignsPage = () => {
  const [campaigns, setCampaigns] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [sortOrder, setSortOrder] = useState('asc'); 
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

 
  const sortCampaignsByMinDonation = (campaigns, order) => {
    return campaigns.sort((a, b) => {
      const minDonationA = a.min_donation;
      const minDonationB = b.min_donation;
      if (order === 'asc') {
        return minDonationA - minDonationB;
      } else {
        return minDonationB - minDonationA;
      }
    });
  };

 
  const handleSort = () => {
    setSortOrder((prevOrder) => (prevOrder === 'asc' ? 'desc' : 'asc'));
  };


  const handleSeeMore = (campaignId) => {
    navigate(`/campaign/${campaignId}`);
  };


  const sortedCampaigns = sortCampaignsByMinDonation(campaigns, sortOrder);

  return (
    <div className="overflow-x-auto p-5">
      <h2 className="text-3xl font-semibold text-center mb-6">All Campaigns</h2>

      {/* Sort Button */}
      <div className="text-center mb-6">
        <button
          onClick={handleSort}
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300"
        >
          Sort by Minimum Donation ({sortOrder === 'asc' ? 'Ascending' : 'Descending'})
        </button>
      </div>

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
                <th className="px-4 py-3 border">Minimum Donation</th>
                <th className="px-4 py-3 border">Deadline</th>
                <th className="px-4 py-3 border">Actions</th>
              </tr>
            </thead>
            <tbody>
              {sortedCampaigns.map((campaign) => (
                <tr key={campaign._id} className="border-b hover:bg-gray-50">
                  <td className="px-4 py-3 border">{campaign.title}</td>
                  <td className="px-4 py-3 border">{campaign.description.slice(0, 100)}...</td>
                  <td className="px-4 py-3 border">${campaign.min_donation}</td>
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

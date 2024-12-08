import React, { useState, useEffect } from 'react';

const MyCampaigns = () => {
    const [campaigns, setCampaigns] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const userEmail = 'user@example.com'; 

    useEffect(() => {
        const fetchCampaigns = async () => {
            try {
                const response = await fetch(`http://localhost:3000/myCampaigns?email=${userEmail}`);
                if (response.ok) {
                    const data = await response.json();
                    setCampaigns(data);
                } else {
                    console.error('Error fetching campaigns:', response.statusText);
                }
            } catch (error) {
                console.error('Error fetching campaigns:', error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchCampaigns();
    }, [userEmail]);

    return (
        <div className="max-w-4xl mx-auto mt-10 p-5">
            <h2 className="text-2xl font-semibold mb-5">My Campaigns</h2>

            {isLoading ? (
                <p>Loading your campaigns...</p>
            ) : campaigns.length === 0 ? (
                <p>No campaigns found for your account. Please create a campaign.</p>
            ) : (
                <table className="w-full table-auto border-collapse border border-gray-300">
                    <thead>
                        <tr className="bg-gray-200">
                            <th className="border border-gray-300 px-4 py-2">Image</th>
                            <th className="border border-gray-300 px-4 py-2">Title</th>
                            <th className="border border-gray-300 px-4 py-2">Type</th>
                            <th className="border border-gray-300 px-4 py-2">Description</th>
                            <th className="border border-gray-300 px-4 py-2">Min Donation</th>
                            <th className="border border-gray-300 px-4 py-2">Deadline</th>
                        </tr>
                    </thead>
                    <tbody>
                        {campaigns.map((campaign) => (
                            <tr key={campaign._id} className="hover:bg-gray-100">
                                <td className="border border-gray-300 px-4 py-2">
                                    <img src={campaign.image} alt={campaign.title} className="w-20 h-20 object-cover" />
                                </td>
                                <td className="border border-gray-300 px-4 py-2">{campaign.title}</td>
                                <td className="border border-gray-300 px-4 py-2 capitalize">{campaign.type}</td>
                                <td className="border border-gray-300 px-4 py-2">{campaign.description}</td>
                                <td className="border border-gray-300 px-4 py-2">${campaign.min_donation}</td>
                                <td className="border border-gray-300 px-4 py-2">{new Date(campaign.deadline).toLocaleDateString()}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
};

export default MyCampaigns;

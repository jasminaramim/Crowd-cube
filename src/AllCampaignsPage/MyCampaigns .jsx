// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom'; 

// const MyCampaigns = () => {
//     const [campaigns, setCampaigns] = useState([]);
//     const [isLoading, setIsLoading] = useState(true);
//     const userEmail = 'user@example.com'; 

//     useEffect(() => {
//         const fetchCampaigns = async () => {
//             try {
//                 const response = await fetch(`https://b10-a10-server-side-jasminaramim.vercel.app/myCampaigns?email=${userEmail}`);
//                 if (response.ok) {
//                     const data = await response.json();
//                     setCampaigns(data);
//                 } else {
//                     console.error('Error fetching campaigns:', response.statusText);
//                 }
//             } catch (error) {
//                 console.error('Error fetching campaigns:', error);
//             } finally {
//                 setIsLoading(false);
//             }
//         };

//         fetchCampaigns();
//     }, [userEmail]);

//     return (
//         <div className="max-w-4xl mx-auto mt-10 p-5">
//             <h2 className="text-2xl font-semibold mb-5">My Campaigns</h2>

//             {isLoading ? (
//                 <p>Loading your campaigns...</p>
//             ) : campaigns.length === 0 ? (
//                 <p>No campaigns found for your account. Please create a campaign.</p>
//             ) : (
//                 <table className="w-full table-auto border-collapse border border-gray-300">
//                     <thead>
//                         <tr className="bg-gray-200">
//                             <th className="border border-gray-300 px-4 py-2">Title</th>
//                             <th className="border border-gray-300 px-4 py-2">Type</th>
//                             <th className="border border-gray-300 px-4 py-2">Min Donation</th>
//                             <th className="border border-gray-300 px-4 py-2">Actions</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {campaigns.map((campaign) => (
//                             <tr key={campaign._id} className="hover:bg-gray-100">
//                                 <td className="border border-gray-300 px-4 py-2">{campaign.title}</td>
//                                 <td className="border border-gray-300 px-4 py-2 capitalize">{campaign.type}</td>
//                                 <td className="border border-gray-300 px-4 py-2">${campaign.min_donation}</td>
//                                 <td className="border border-gray-300 px-4 py-2">
//                                     <Link
//                                         to={`/updateCampaign/${campaign._id}`}
//                                         className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300 mr-2"
//                                     >
//                                         Update
//                                     </Link>
//                                     <button
//                                         onClick={() => handleDelete(campaign._id)}
//                                         className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition duration-300"
//                                     >
//                                         Delete
//                                     </button>
//                                 </td>
//                             </tr>
//                         ))}
//                     </tbody>
//                 </table>
//             )}
//         </div>
//     );
// };

// export default MyCampaigns;




import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getAuth } from 'firebase/auth'; 
import Swal from 'sweetalert2';

const MyCampaigns = () => {
    const [campaigns, setCampaigns] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [userEmail, setUserEmail] = useState('');

    useEffect(() => {
        const auth = getAuth();
        const user = auth.currentUser;

        if (user) {
            setUserEmail(user.email); 
        } else {
            Swal.fire('Error', 'User not authenticated. Please login.', 'error');
       
        }
    }, []);

    useEffect(() => {
        const fetchCampaigns = async () => {
            if (!userEmail) return; 

            try {
                const response = await fetch(`https://b10-a10-server-side-jasminaramim.vercel.app/myCampaigns?email=${userEmail}`);
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

    const handleDelete = (campaignId) => {
       
        console.log('Deleting campaign with id:', campaignId);
    };

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
                            <th className="border border-gray-300 px-4 py-2">Title</th>
                            <th className="border border-gray-300 px-4 py-2">Type</th>
                            <th className="border border-gray-300 px-4 py-2">Min Donation</th>
                            <th className="border border-gray-300 px-4 py-2">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {campaigns.map((campaign) => (
                            <tr key={campaign._id} className="hover:bg-gray-100">
                                <td className="border border-gray-300 px-4 py-2">{campaign.title}</td>
                                <td className="border border-gray-300 px-4 py-2 capitalize">{campaign.type}</td>
                                <td className="border border-gray-300 px-4 py-2">${campaign.min_donation}</td>
                                <td className="border border-gray-300 px-4 py-2">
                                    <Link
                                        to={`/updateCampaign/${campaign._id}`}
                                        className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300 mr-2"
                                    >
                                        Update
                                    </Link>
                                    <button
                                        onClick={() => handleDelete(campaign._id)}
                                        className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition duration-300"
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
};

export default MyCampaigns;

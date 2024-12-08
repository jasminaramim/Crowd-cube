import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom'; 
import Swal from 'sweetalert2';

const UpdateCampaign = () => {
    const { id } = useParams(); 
    const navigate = useNavigate(); 
    const [campaign, setCampaign] = useState({
        title: '',
        description: '',
        min_donation: '',
        deadline: '',
        type: '',
        image: '',
        userEmail: '',
    });
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchCampaign = async () => {
            try {
                const response = await fetch(`https://b10-a10-server-side-jasminaramim.vercel.app/campaigns/${id}`);
                if (response.ok) {
                    const data = await response.json();
                    setCampaign(data);
                } else {
                    console.error('Error fetching campaign:', response.statusText);
                }
            } catch (error) {
                console.error('Error fetching campaign:', error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchCampaign();
    }, [id]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setCampaign((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(`https://b10-a10-server-side-jasminaramim.vercel.app/campaigns/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(campaign),
            });
            if (response.ok) {
                Swal.fire('Success!', 'Campaign updated successfully!', 'success');
                navigate('/myCampaigns');
            } else {
                Swal.fire('Error', 'There was an error updating the campaign.', 'error');
            }
        } catch (error) {
            console.error('Error updating campaign:', error);
            Swal.fire('Error', 'There was an error updating the campaign.', 'error');
        }
    };

    if (isLoading) {
        return <p>Loading campaign...</p>;
    }

    return (
        <div className="max-w-4xl mx-auto mt-10 p-5">
            <h2 className="text-2xl font-semibold mb-5">Update Campaign</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="title" className="block">Title</label>
                    <input
                        type="text"
                        id="title"
                        name="title"
                        value={campaign.title}
                        onChange={handleInputChange}
                        required
                        className="w-full px-3 py-2 border rounded-md"
                    />
                </div>

                <div className="mt-4">
                    <label htmlFor="description" className="block">Description</label>
                    <textarea
                        id="description"
                        name="description"
                        value={campaign.description}
                        onChange={handleInputChange}
                        required
                        className="w-full px-3 py-2 border rounded-md"
                    />
                </div>

                <div className="mt-4">
                    <label htmlFor="min_donation" className="block">Min Donation</label>
                    <input
                        type="number"
                        id="min_donation"
                        name="min_donation"
                        value={campaign.min_donation}
                        onChange={handleInputChange}
                        required
                        className="w-full px-3 py-2 border rounded-md"
                    />
                </div>

                <div className="mt-4">
                    <label htmlFor="deadline" className="block">Deadline</label>
                    <input
                        type="date"
                        id="deadline"
                        name="deadline"
                        value={campaign.deadline}
                        onChange={handleInputChange}
                        required
                        className="w-full px-3 py-2 border rounded-md"
                    />
                </div>

                <div className="mt-4">
                    <label htmlFor="type" className="block">Type</label>
                    <input
                        type="text"
                        id="type"
                        name="type"
                        value={campaign.type}
                        onChange={handleInputChange}
                        required
                        className="w-full px-3 py-2 border rounded-md"
                    />
                </div>

                <div className="mt-4">
                    <label htmlFor="image" className="block">Image URL</label>
                    <input
                        type="text"
                        id="image"
                        name="image"
                        value={campaign.image}
                        onChange={handleInputChange}
                        required
                        className="w-full px-3 py-2 border rounded-md"
                    />
                </div>

                <div className="mt-4">
                    <label htmlFor="userEmail" className="block">Email</label>
                    <input
                        type="email"
                        id="userEmail"
                        name="userEmail"
                        value={campaign.userEmail}
                        readOnly
                        className="w-full px-3 py-2 border rounded-md bg-gray-200"
                    />
                </div>

                <div className="mt-6">
                    <button
                        type="submit"
                        className="px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300"
                    >
                        Update Campaign
                    </button>
                </div>
            </form>
        </div>
    );
};

export default UpdateCampaign;


// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import Swal from 'sweetalert2';  

// const AddNewCampaignPage = () => {
//     const [formData, setFormData] = useState({
//         image: '',
//         title: '',
//         type: 'personal_issue',
//         description: '',
//         min_donation: '',
//         deadline: '',
//         userEmail: '',
//         userName: '',
//     });

//     const navigate = useNavigate();

//     useEffect(() => {
        
//         const userData = {
//             email: 'user@example.com',
//             name: 'username here',          
//         };

//         setFormData((prevData) => ({
//             ...prevData,
//             userEmail: userData.email,
//             userName: userData.name,
//         }));
//     }, []);

//     const handleInputChange = (e) => {
//         const { name, value } = e.target;
//         setFormData({
//             ...formData,
//             [name]: value,
//         });
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();

    
//         try {
//             const response = await fetch('https://b10-a10-server-side-jasminaramim.vercel.app/campaigns', {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json',
//                 },
//                 body: JSON.stringify(formData), 
//             });

//             if (response.ok) {
//                 const result = await response.json();
//                 console.log('Campaign added successfully:', result);

//               2
//                 Swal.fire({
//                     title: 'Success!',
//                     text: 'Campaign added successfully!',
//                     icon: 'success',
//                     confirmButtonText: 'OK',
//                     customClass: {
//                         confirmButton: 'bg-green-500 text-white'
//                     }
//                 });

        
//                 setFormData({
//                     image: '',
//                     title: '',
//                     type: 'personal_issue',
//                     description: '',
//                     min_donation: '',
//                     deadline: '',
//                     userEmail: '',
//                     userName: '',
//                 });

               
//                 navigate('/');
//             } else {
//                 console.log('Error adding campaign:', response.statusText);

           
//                 Swal.fire({
//                     title: 'Error!',
//                     text: 'Error adding campaign.',
//                     icon: 'error',
//                     confirmButtonText: 'Try Again',
//                     customClass: {
//                         confirmButton: 'bg-red-500 text-white'
//                     }
//                 });
//             }
//         } catch (error) {
//             console.log('Error sending data:', error);

          
//             Swal.fire({
//                 title: 'Error!',
//                 text: 'Error sending data.',
//                 icon: 'error',
//                 confirmButtonText: 'Try Again',
//                 customClass: {
//                     confirmButton: 'bg-red-500 text-white'
//                 }
//             });
//         }
//     };

//     return (
//         <div className="max-w-md mx-auto mt-10 p-5 border rounded-lg shadow-lg">
//             <h2 className="text-2xl font-semibold mb-5">Add New Campaign</h2>
//             <form onSubmit={handleSubmit}>
//                 {/* Image URL */}
//                 <div className="mb-4">
//                     <label htmlFor="image" className="block text-lg font-medium mb-2">Image URL</label>
//                     <input
//                         type="text"
//                         id="image"
//                         name="image"
//                         value={formData.image}
//                         onChange={handleInputChange}
//                         className="w-full p-2 border rounded"
//                         required
//                     />
//                 </div>

      
//                 <div className="mb-4">
//                     <label htmlFor="title" className="block text-lg font-medium mb-2">Campaign Title</label>
//                     <input
//                         type="text"
//                         id="title"
//                         name="title"
//                         value={formData.title}
//                         onChange={handleInputChange}
//                         className="w-full p-2 border rounded"
//                         required
//                     />
//                 </div>

       
//                 <div className="mb-4">
//                     <label htmlFor="type" className="block text-lg font-medium mb-2">Campaign Type</label>
//                     <select
//                         id="type"
//                         name="type"
//                         value={formData.type}
//                         onChange={handleInputChange}
//                         className="w-full p-2 border rounded"
//                         required
//                     >
//                         <option value="personal_issue">Personal Issue</option>
//                         <option value="startup">Startup</option>
//                         <option value="business">Business</option>
//                         <option value="creative_ideas">Creative Ideas</option>
//                     </select>
//                 </div>

               
//                 <div className="mb-4">
//                     <label htmlFor="description" className="block text-lg font-medium mb-2">Description</label>
//                     <textarea
//                         id="description"
//                         name="description"
//                         value={formData.description}
//                         onChange={handleInputChange}
//                         className="w-full p-2 border rounded"
//                         rows="4"
//                         required
//                     />
//                 </div>

                
//                 <div className="mb-4">
//                     <label htmlFor="min_donation" className="block text-lg font-medium mb-2">Minimum Donation Amount</label>
//                     <input
//                         type="number"
//                         id="min_donation"
//                         name="min_donation"
//                         value={formData.min_donation}
//                         onChange={handleInputChange}
//                         className="w-full p-2 border rounded"
//                         required
//                     />
//                 </div>

           
//                 <div className="mb-4">
//                     <label htmlFor="deadline" className="block text-lg font-medium mb-2">Deadline</label>
//                     <input
//                         type="date"
//                         id="deadline"
//                         name="deadline"
//                         value={formData.deadline}
//                         onChange={handleInputChange}
//                         className="w-full p-2 border rounded"
//                         required
//                     />
//                 </div>

//                 <button
//                     type="submit"
//                     className="w-full bg-blue-500 text-white p-3 rounded-lg"
//                 >
//                     Add Campaign
//                 </button>
//             </form>
//         </div>
//     );
// };

// export default AddNewCampaignPage;




import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';  
import { useAuth } from '../AuthContext/AuthProvider';  // Import useAuth hook

const AddNewCampaignPage = () => {
    const { user: currentUser } = useAuth();  // Get the current user's data from AuthContext
    const [formData, setFormData] = useState({
        image: '',
        title: '',
        type: 'personal_issue',
        description: '',
        min_donation: '',
        deadline: '',
        userEmail: '',  // Placeholder for user's email
        userName: '',   // Placeholder for user's name
    });

    const navigate = useNavigate();

    useEffect(() => {
        // Only update if currentUser exists (meaning user is logged in)
        if (currentUser) {
            setFormData((prevData) => ({
                ...prevData,
                userEmail: currentUser.email,   // Dynamically set user email
                userName: currentUser.displayName || 'Anonymous Donor', // Dynamically set user name
            }));
        }
    }, [currentUser]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('https://b10-a10-server-side-jasminaramim.vercel.app/campaigns', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                const result = await response.json();
                console.log('Campaign added successfully:', result);

                Swal.fire({
                    title: 'Success!',
                    text: 'Campaign added successfully!',
                    icon: 'success',
                    confirmButtonText: 'OK',
                    customClass: {
                        confirmButton: 'bg-green-500 text-white',
                    },
                });

                // Reset form
                setFormData({
                    image: '',
                    title: '',
                    type: 'personal_issue',
                    description: '',
                    min_donation: '',
                    deadline: '',
                    userEmail: currentUser.email, // Ensure email is still there after reset
                    userName: currentUser.displayName || 'Anonymous Donor',
                });

                navigate('/');
            } else {
                console.log('Error adding campaign:', response.statusText);

                Swal.fire({
                    title: 'Error!',
                    text: 'Error adding campaign.',
                    icon: 'error',
                    confirmButtonText: 'Try Again',
                    customClass: {
                        confirmButton: 'bg-red-500 text-white',
                    },
                });
            }
        } catch (error) {
            console.log('Error sending data:', error);

            Swal.fire({
                title: 'Error!',
                text: 'Error sending data.',
                icon: 'error',
                confirmButtonText: 'Try Again',
                customClass: {
                    confirmButton: 'bg-red-500 text-white',
                },
            });
        }
    };

    return (
        <div className="max-w-md mx-auto mt-10 p-5 border rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-5">Add New Campaign</h2>
            <form onSubmit={handleSubmit}>
                {/* Image URL */}
                <div className="mb-4">
                    <label htmlFor="image" className="block text-lg font-medium mb-2">Image URL</label>
                    <input
                        type="text"
                        id="image"
                        name="image"
                        value={formData.image}
                        onChange={handleInputChange}
                        className="w-full p-2 border rounded"
                        required
                    />
                </div>

                {/* Campaign Title */}
                <div className="mb-4">
                    <label htmlFor="title" className="block text-lg font-medium mb-2">Campaign Title</label>
                    <input
                        type="text"
                        id="title"
                        name="title"
                        value={formData.title}
                        onChange={handleInputChange}
                        className="w-full p-2 border rounded"
                        required
                    />
                </div>

                {/* Campaign Type */}
                <div className="mb-4">
                    <label htmlFor="type" className="block text-lg font-medium mb-2">Campaign Type</label>
                    <select
                        id="type"
                        name="type"
                        value={formData.type}
                        onChange={handleInputChange}
                        className="w-full p-2 border rounded"
                        required
                    >
                        <option value="personal_issue">Personal Issue</option>
                        <option value="startup">Startup</option>
                        <option value="business">Business</option>
                        <option value="creative_ideas">Creative Ideas</option>
                    </select>
                </div>

                {/* Description */}
                <div className="mb-4">
                    <label htmlFor="description" className="block text-lg font-medium mb-2">Description</label>
                    <textarea
                        id="description"
                        name="description"
                        value={formData.description}
                        onChange={handleInputChange}
                        className="w-full p-2 border rounded"
                        rows="4"
                        required
                    />
                </div>

                {/* Minimum Donation */}
                <div className="mb-4">
                    <label htmlFor="min_donation" className="block text-lg font-medium mb-2">Minimum Donation Amount</label>
                    <input
                        type="number"
                        id="min_donation"
                        name="min_donation"
                        value={formData.min_donation}
                        onChange={handleInputChange}
                        className="w-full p-2 border rounded"
                        required
                    />
                </div>

                {/* Deadline */}
                <div className="mb-4">
                    <label htmlFor="deadline" className="block text-lg font-medium mb-2">Deadline</label>
                    <input
                        type="date"
                        id="deadline"
                        name="deadline"
                        value={formData.deadline}
                        onChange={handleInputChange}
                        className="w-full p-2 border rounded"
                        required
                    />
                </div>

                <button
                    type="submit"
                    className="w-full bg-blue-500 text-white p-3 rounded-lg"
                >
                    Add Campaign
                </button>
            </form>
        </div>
    );
};

export default AddNewCampaignPage;

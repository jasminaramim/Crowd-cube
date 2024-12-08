import React, { useEffect, useState } from 'react';
import { useAuth } from '../AuthContext/AuthProvider'; // assuming you have auth context to get user data
import Swal from 'sweetalert2';

const MyDonationsPage = () => {
  const { user } = useAuth(); // Assuming user is in context
  const [donations, setDonations] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMyDonations = async () => {
      if (user && user.email) {
        try {
          const response = await fetch(`http://localhost:3000/myDonations?email=${user.email}`);
          const data = await response.json();
          setDonations(data);
        } catch (error) {
          console.error('Error fetching donations:', error);
          Swal.fire({
            title: 'Error',
            text: 'Failed to load your donations. Please try again.',
            icon: 'error',
            confirmButtonText: 'OK',
            customClass: { confirmButton: 'bg-red-500 text-white' },
          });
        } finally {
          setLoading(false);
        }
      }
    };

    if (user) {
      fetchMyDonations();
    } else {
      Swal.fire({
        title: 'Not Logged In',
        text: 'You need to log in to view your donations.',
        icon: 'warning',
        confirmButtonText: 'OK',
        customClass: { confirmButton: 'bg-yellow-500 text-white' },
      });
    }
  }, [user]);

  if (loading) {
    return (
      <div className="flex justify-center items-center my-10">
        <div className="w-16 h-16 border-4 border-t-transparent border-blue-500 border-solid rounded-full animate-spin"></div>
      </div>
    );
  }

  if (!donations.length) {
    return <div className="text-center text-gray-500">You haven't made any donations yet.</div>;
  }

  return (
    <div className="grid mt-10 mb grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {donations.map((donation) => (
        <div key={donation._id} className="bg-white shadow-lg rounded-lg p-4">
          <h3 className="text-xl font-semibold">{donation.campaignTitle}</h3>
          <p className="text-gray-600">Amount: ${donation.amount}</p>
          <p className="text-gray-500">Date: {new Date(donation.date).toLocaleDateString()}</p>
          <p className="mt-2 text-gray-500">{donation.message}</p>
        </div>
      ))}
    </div>
  );
};

export default MyDonationsPage;

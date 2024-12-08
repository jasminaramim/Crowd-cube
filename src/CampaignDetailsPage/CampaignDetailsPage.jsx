import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useAuth } from "../AuthContext/AuthProvider";
import Swal from "sweetalert2";

const CampaignDetailsPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [campaign, setCampaign] = useState(null);
  const [donationAmount, setDonationAmount] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const { user: currentUser } = useAuth();

  useEffect(() => {
    const fetchCampaignDetails = async () => {
      try {
        const response = await fetch(`http://localhost:3000/campaigns/${id}`);
        if (!response.ok) {
          throw new Error("Campaign not found");
        }
        const data = await response.json();
        setCampaign(data);
      } catch (err) {
        console.error("Error fetching campaign details:", err);
        setError("Failed to load campaign details. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchCampaignDetails();
  }, [id]);

  // Handle donation submission
  const handleDonate = async (e) => {
    e.preventDefault();

    if (!currentUser) {
      navigate("/login");
      return;
    }

    if (!donationAmount || donationAmount <= 0) {
      Swal.fire({
        title: "Invalid Donation Amount",
        text: "Please enter a valid donation amount.",
        icon: "error",
        confirmButtonText: "OK",
        customClass: { confirmButton: "bg-red-500 text-white" },
      });
      return;
    }

    const donationData = {
      campaignId: campaign._id, 
      userEmail: currentUser.email,
      username: currentUser.displayName || "Anonymous Donor",
      amount: parseFloat(donationAmount).toFixed(2),
      date: new Date().toISOString(),
    };

    try {
      const response = await fetch("http://localhost:3000/donation", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(donationData),
      });

      if (response.ok) {
        Swal.fire({
          title: "Thank You!",
          text: "Your donation has been successfully processed.",
          icon: "success",
          confirmButtonText: "OK",
          customClass: { confirmButton: "bg-green-500 text-white" },
        });
        setDonationAmount("");
        navigate("/");
      } else {
        Swal.fire({
          title: "Error",
          text: "Failed to process the donation.",
          icon: "error",
          confirmButtonText: "Try Again",
          customClass: { confirmButton: "bg-red-500 text-white" },
        });
      }
    } catch (err) {
      console.error("Error during donation:", err);
      Swal.fire({
        title: "Error",
        text: "Something went wrong. Please try again later.",
        icon: "error",
        confirmButtonText: "OK",
        customClass: { confirmButton: "bg-red-500 text-white" },
      });
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center my-10">
        <div className="w-16 h-16 border-4 border-t-transparent border-blue-500 border-solid rounded-full animate-spin"></div>
      </div>
    );
  }

  if (error) {
    return <div className="text-center text-red-500">{error}</div>;
  }

  if (!campaign) {
    return <div className="text-center text-gray-500">Campaign not found</div>;
  }

  return (
    <div className="max-w-md mx-auto mt-10 p-4 border rounded-lg shadow-lg sm:max-w-xl md:max-w-2xl lg:max-w-4xl">
      <div className="border rounded-lg p-4">
        <h2 className="text-3xl font-semibold mb-5">{campaign.title}</h2>
        <img
          src={campaign.image}
          alt={campaign.title}
          className="w-full h-64 object-cover rounded-md mb-5"
        />
        <div className="mb-4">
          <h3 className="text-lg font-bold border-b">Description:</h3>
          <p className="text-gray-700">{campaign.description}</p>
        </div>
        <div className="flex justify-between">
          <div className="mb-4">
            <h3 className="text-lg font-medium">Goal Amount:</h3>
            <p>${campaign.goalAmount}</p>
          </div>
          <div className="mb-4">
            <h3 className="text-lg font-medium">Deadline:</h3>
            <p>{new Date(campaign.deadline).toLocaleDateString()}</p>
          </div>
        </div>
      </div>

      <form onSubmit={handleDonate}>
        <div className="mb-4">
          <label htmlFor="donation" className="block text-lg font-medium mb-2">
            Enter Donation Amount:
          </label>
          <input
            type="number"
            id="donation"
            placeholder="e.g., 50"
            value={donationAmount}
            onChange={(e) => setDonationAmount(e.target.value)}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600"
        >
          Donate
        </button>
      </form>
    </div>
  );
};

export default CampaignDetailsPage;

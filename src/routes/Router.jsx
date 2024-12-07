import React from "react";
import { createHashRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../routes/Home/Home";
import AllCampaigns from "../AllCampaignsPage/AllCampaignsPage";
// import AddNewCampaign from "../AllCampaignsPage/AddNewCampaignPage";
import MyCampaigns from "../AllCampaignsPage/MyCampaigns ";
import MyDonations from "../AllCampaignsPage/MyDonationsPage";
import Login from "../login/LoginPage";
import Register from "../RegisterPage/RegisterPage";
import NotFound from "../routes/NotFound";
import PrivateRoute from "../routes/PrivateRoute";
import AddNewCampaignPage from "../AllCampaignsPage/AddNewCampaignPage";
import HomePage from "../Homepage/Homepage";
import CampaignDetailsPage from "../CampaignDetailsPage/CampaignDetailsPage";
import MyDonationsPage from "../AllCampaignsPage/MyDonationsPage";
import ForgotPassword from "../forgetPass/ForgotPassword";

const Router = createHashRouter([
 
  {
    path: "/",
    element: (
      <Layout>
        <HomePage></HomePage>
      </Layout>
    ),
  },

  {
    path: "/all-campaigns",
    element: (
      <Layout>
        <AllCampaigns />
      </Layout>
    ),
  },
  //  (Private Route)
  {
    path: "/add-new-campaign",
    element: (
      <PrivateRoute>
        <Layout>
          <AddNewCampaignPage></AddNewCampaignPage>
        </Layout>
      </PrivateRoute>
    ),
  },

  {
    path: "/my-campaigns",
    element: (
      <PrivateRoute>
        <Layout>
          <MyCampaigns />
        </Layout>
      </PrivateRoute>
    ),
  },

  {
    path: "/my-donations",
    element: (
      <PrivateRoute>
        <Layout>
          <MyDonationsPage />
        </Layout>
      </PrivateRoute>
    ),
  },

  {
    path: "/auth/login",
    element: (
      <Layout>
        <Login />
      </Layout>
    ),
  },
  {
    path: "/forget-password",
    element: (
      <Layout>
        <ForgotPassword />
      </Layout>
    )
  },
  {
    path: "/auth/register",
    element: (
      <Layout>
        <Register />
      </Layout>
    ),
  },
  {
    path: '/campaign/:id',
    element: (
      <PrivateRoute>
        <Layout>
          <CampaignDetailsPage />
        </Layout>
      </PrivateRoute>
    ),
  },



  {
    path: "*",
    element: (
      <Layout>
        <NotFound />
      </Layout>
    ),
  },
]);

export default Router;

import React from "react";
import { Outlet } from "react-router";
import Navbar from "../Components/Shared/Navbar";
import Footer from "../Components/Shared/Footer";
import BackgroundEffects from "../Components/BackgroundEffects";
import MouseFollower from "../Components/MouseFollowe";

const MainLayout = () => {
  return (
    <div className="relative min-h-screen bg-transparent overflow-hidden">
      {/* Global background */}
      <BackgroundEffects />
      <MouseFollower></MouseFollower>

      {/* Content */}
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainLayout;

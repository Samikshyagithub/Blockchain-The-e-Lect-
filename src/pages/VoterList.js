// Import necessary modules
import React, { useState, useEffect, useContext } from "react";
import { VotingProvider, VotingContext, fetchContract } from "../context/Voter";
import VoterCard from "../components/VoterCard";
import "./VoterList.css";
import { Header } from "./header";
// Define the VoterList component
const VoterList = () => {
  // Get the getAllVoterData function and voterArray from the VotingContext
  const { getAllVoterData, voterArray } = useContext(VotingContext);

  // Call getAllVoterData when the component mounts
  useEffect(() => {
    getAllVoterData();
  }, []);

  // Render the VoterList component

  return (
    <>
      <Header showBrand={true} showNavList={false} />
      <div className="voterList">
        <VoterCard voterArray={voterArray} />
      </div>
    </>
  );
};

// Export the VoterList component
export default VoterList;

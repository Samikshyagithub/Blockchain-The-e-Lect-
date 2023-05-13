// Importing necessary modules
import React, { useState, useContext, useEffect } from "react"; // Importing React and its hooks

import { VotingProvider } from "../context/Voter"; // Importing the VotingProvider component from "../context/Voter"
import { VotingContext, fetchContract } from "../context/Voter";
import Web3Modal from "web3modal";
import { ethers, providers } from "ethers";
import Countdown from "react-countdown";
import Card from "../components/card";
import "./candidate.css";
import { Header } from "./header";
// Component definition
const Candidate = () => {
  // Destructuring values from the VotingContext
  const {
    checkIfWalletIsConnected,
    getNewCandidate,
    candidateArray,
    giveVote,
    candidateLength,
    currentAccount,
    voterLength,
    getAllVoterData,
    winnerAddress,
    winName,
  } = useContext(VotingContext);

  const [showWinner, setShowWinner] = useState(false);

  const handleCountdownComplete = () => {
    setShowWinner(true);
  };

  // Checking if the wallet is connected
  useEffect(() => {
    checkIfWalletIsConnected();
    getNewCandidate();
    getAllVoterData();
  }, []);
  // useEffect(() => {

  // }, []);

  // Component rendering
  return (
    <>
<Header showBrand={true} showNavList={false} />
    <div className="home">
      {currentAccount && (
        <div className="winner">
          <div className="winner_info">
            <div className="candidate_list">
              <p>
                Number of Candidate: <span> {candidateLength}</span>
              </p>
            </div>
            <div className="voter_list">
              <p>
                Number of Voter: <span>{voterLength}</span>
              </p>
            </div>
          </div>
          <div className="winner_message">
            <small>
              <Countdown
                date={Date.now() + 10000}
                onComplete={handleCountdownComplete}
              />
              {showWinner && (
                <div className="winner_message_box">
                  <h1>
                    <span>{winName} </span>is the winner!
                  </h1>{" "}
                </div>
              )}
            </small>
          </div>
        </div>
      )}

      <Card candidateArray={candidateArray} giveVote={giveVote} />
    </div>
    </>
    
  );
};
// Exporting the Candidate component as default.
export default Candidate;

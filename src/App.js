import { Home } from "./pages/home";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Candidate from "./pages/candidate";
import VoterList from "./pages/VoterList";
import { VotingProvider } from "./context/Voter";
function App() {
  return (
    <VotingProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/voting" exact element={<Candidate />} />
          <Route path="/voterlist" exact element={<VoterList />} />
        </Routes>
      </Router>
    </VotingProvider>
  );
}

export default App;

import { useEffect, useState } from "react";

import { getDashboard } from "../Services/DashboardService";

import "./Dashboard.css";

import PlayerSearch from "../components/Dashboard/PlayerSearch/PlayerSearch";
import PlayerCard from "../components/Dashboard/PlayerCard/PlayerCard";
import QuickStats from "../components/Dashboard/QuickStats/QuickStats";
import LastMatch from "../components/Dashboard/LastMatch/LastMatch";
import LeaguePosition from "../components/Dashboard/LeaguePosition/LeaguePosition";

function Dashboard() {
  const [selectedPlayer, setSelectedPlayer] = useState(() => {
    const savedPlayer = localStorage.getItem("rememberedPlayer");

    if (!savedPlayer) {
      return null;
    }

    try {
      return JSON.parse(savedPlayer);
    } catch (error) {
      console.error("Failed to load remembered player:", error);
      localStorage.removeItem("rememberedPlayer");
      return null;
    }
  });

  const [playerData, setPlayerData] = useState(null);

  useEffect(() => {
    if (!selectedPlayer) return;

    async function loadDashboard() {
      try {
        const data = await getDashboard(selectedPlayer);
        setPlayerData(data);
      } catch (err) {
        console.error("Failed to load dashboard", err);
      }
    }

    loadDashboard();
  }, [selectedPlayer]);

  console.log(playerData);

  return (
    <main className="dashboard">
      {/* Hero */}
      <section className="dashboard-hero">
        <div className="dashboard-hero-content">
          <span className="dashboard-tag">🎯 MY OCHE</span>

          <h1>Your Personal Player Hub</h1>

          <p>
            Search for your player profile to view your latest league
            statistics, results and standings. Remember your player on this
            device and your dashboard will load automatically when you return.
          </p>
        </div>
      </section>

      {/* Dashboard Content */}
      <section className="dashboard-content">
        <PlayerSearch onPlayerSelected={setSelectedPlayer} />

        {selectedPlayer && !playerData ? (
          <section className="dashboard-placeholder">
            <div className="placeholder-icon">⏳</div>

            <h2>Loading Player...</h2>

            <p>Please wait while we load your dashboard.</p>
          </section>
        ) : playerData ? (
          <div className="dashboard-layout">
            <div className="left-column">
              <PlayerCard player={playerData} selectedPlayer={selectedPlayer} />
              <QuickStats player={playerData} />
            </div>

            <div className="right-column">
              <LeaguePosition player={playerData} />
              <LastMatch player={playerData} />
            </div>
          </div>
        ) : (
          <section className="dashboard-placeholder">
            <div className="placeholder-icon">🎯</div>

            <h2>Select Your Player Profile</h2>

            <p>
              Search for your DartCounter profile above to unlock your
              dashboard, league statistics, recent matches and season
              performance.
            </p>
          </section>
        )}
      </section>
    </main>
  );
}

export default Dashboard;

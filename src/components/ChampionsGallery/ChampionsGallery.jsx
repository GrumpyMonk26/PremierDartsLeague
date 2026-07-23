import "./ChampionsGallery.css";
import { champions } from "../../data/championsData";

function ChampionsGallery() {
  return (
    <section className="champions">
      <div className="section-header">
        <span className="section-tag">CHAMPIONS GALLERY</span>

        <h2>Our Champions</h2>

        <p>
          Every season tells a story. Celebrate the players who have lifted the
          Premier League Darts trophy and etched their names into league
          history.
        </p>
      </div>

      <div className="champions-grid">
        {champions.map((champion) => (
          <div className="champion-card" key={champion.season}>
            <div className="champion-image">
              <img src={champion.image} alt={champion.champion} />
            </div>

            <div className="champion-content">
              <span className="season">{champion.season}</span>

              <h3>{champion.champion}</h3>

              <p>{champion.division}</p>

              <div className="champion-stats">
                <div>
                  <strong>{champion.average}</strong>

                  <span>Average</span>
                </div>

                <div>
                  <strong>{champion.year}</strong>

                  <span>Year</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ChampionsGallery;

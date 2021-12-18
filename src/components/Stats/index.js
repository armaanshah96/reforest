import "./Stats.css";

const Stats = () => {
  return (
    <div className="stats-container">
      <div className="stat">
        <p className="standard-font-size">donated <span className="earth-accent-color">538 MATIC</span></p>
      </div>
      <div className="stat">
        <p className="standard-font-size">planted <span className="earth-accent-color">5 TREES</span></p>
      </div>
    </div>
  );
};

export default Stats;

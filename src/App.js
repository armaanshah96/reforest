import nft from "./assets/nft.png";
import "./App.css";
import Stats from "./components/Stats";
import ConnectWallet from "./components/ConnectWallet";
import Details from "./components/Details";
import Participants from "./components/Participants";

function App() {
  return (
    <div className="App earthy-background">
      <div className="left">
      </div>
      <div className="App-header middle">
        <p className="sticky header-font-size">The Reforest Project (🌱,🌳)</p>
        <img src={nft} className="reforest-nft" alt="Reforest NFT" />
        <Details />
      </div>
      <div className="right">
        <div className="meta-container">
          <Stats />
          <ConnectWallet />
        </div>
        <Participants />
      </div>
    </div>
  );
}

export default App;

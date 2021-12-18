import { useState } from "react";
import "./ConnectWallet.css";

const ConnectWallet = () => {
  const [wallet, setWallet] = useState(null);
  const [buttonText, setButtonText] = useState('connect wallet');
  const fakeAddress = "0x000bf34...";

  const toggleWallet = () => {
    if (wallet) {
      // placeholder
      setWallet('connect wallet');
      setButtonText("connect wallet");
    } else {
      // placeholder
      setWallet(fakeAddress);
      setButtonText(fakeAddress);
    }
  };

  const renderContents = () => {
    return wallet ? (
      <>
        <div
          className="connected btn"
          onMouseOut={() => setButtonText(fakeAddress)}
          onMouseOver={() => setButtonText("disconnect wallet")}
          onClick={toggleWallet}
        >
          <p className="standard-font-size">{buttonText}</p>
        </div>
        <div className="donate btn">
          <p className="standard-font-size">donate</p>
        </div>
      </>
    ) : (
      <div className="not-connected btn" onClick={toggleWallet}>
        <p className="standard-font-size">{buttonText}</p>
      </div>
    );
  };

  return <div className="container">{renderContents()}</div>;
};

export default ConnectWallet;

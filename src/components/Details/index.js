import './Details.css';
import Detail from "./Detail";

const detailsData = [
  {
    title: "about",
    text: "The reforest project goal is a simple one. Encourage donation to reforestation by leveraging the ease of crowdfunding with crypto. Each donation causes the Reforest NFT, that giant orb ^^, to grow. Your participation gives you partial ownership of the NFT. Welcome, help us reforest.",
  },
  {
    title: "how to participate",
    text: "Connect your wallet and donate $MATIC. The aim is to make this universally accessible, so pay what is reasonable and if you have the means, consider paying for at least 1 tree at the equivalent of $100 USD.",
  },
  {
    title: "where does the money go?",
    text: "NAME_OF_CHARITY is the charity of choice set in the Reforest smart contract (link) . Each donation is collected in the smart contract and when the amount supersedes 1000 MATIC, the contract automatically issues a payment to NAME_OF_CHARITY. Additionally, after 2 weeks if the 1000 MATIC threshold is not met, an automatic payment is issued to ensure money is stored in the contract for short time periods.",
  },
];
const Details = () => {
  return (
    <div className="details-container">
      {detailsData.map((detail) => {
        return (
          <Detail key={detail.title} title={detail.title} text={detail.text} />
        );
      })}
    </div>
  );
};

export default Details;

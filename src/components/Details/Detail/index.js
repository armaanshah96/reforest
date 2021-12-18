import './Detail.css';

const Detail = ({ title, text }) => {
  return (
    <div className="detail-container">
      <p className="large-font-size"><u>{title}</u></p>
      <p className="standard-font-size">{text}</p>
    </div>
  );
};

export default Detail;

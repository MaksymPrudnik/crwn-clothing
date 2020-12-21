import { useHistory } from "react-router-dom";
import "./styles.scss";

export const MenuItem = ({ title, imageUrl, size, linkUrl }) => {
  const history = useHistory();
  return (
    <div className={`menu-item ${size}`} onClick={() => history.push(linkUrl)}>
      <div
        className="background-image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      >
        <div className="content">
          <h2 className="title">{title.toUpperCase()}</h2>
          <span className="subtitle">SHOP NOW</span>
        </div>
      </div>
    </div>
  );
};

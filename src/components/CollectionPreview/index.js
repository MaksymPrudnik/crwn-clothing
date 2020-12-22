import "./styles.scss";

import { CollectionItem } from "../CollectionItem";
import { useHistory, useRouteMatch } from "react-router-dom";

export const CollectionPreview = ({ title, items }) => {
  const history = useHistory();
  const match = useRouteMatch();
  return (
    <div className="collection-preview">
      <h1 onClick={() => history.push(`${match.path}/${title.toLowerCase()}`)}>
        {title.toUpperCase()}
      </h1>
      <div className="preview">
        {items
          .filter((item, idx) => idx < 4)
          .map((item) => (
            <CollectionItem key={item.id} item={item} />
          ))}
      </div>
    </div>
  );
};

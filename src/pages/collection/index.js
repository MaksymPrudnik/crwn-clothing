import { useSelector } from "react-redux";
import { CollectionItem } from "../../components/CollectionItem";
import "./styles.scss";

export const CollectionPage = ({
  match: {
    params: { category },
  },
}) => {
  const { title, items } = useSelector(
    (state) => state.shop.collections[category]
  );
  return (
    <div className="collection-page">
      <h2 className="title">{title}</h2>
      <div className="items">
        {items.map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

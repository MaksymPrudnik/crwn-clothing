import { useSelector } from "react-redux";

import "./styles.scss";

import { CollectionPreview } from "../CollectionPreview";

export const CollectionOverview = () => {
  const collectionsData = useSelector((state) => state.shop.collections);
  const collections = Object.values(collectionsData);
  return (
    <div className="collection-overview">
      {collections.map(({ id, ...otherCollectionProps }) => (
        <CollectionPreview key={id} {...otherCollectionProps} />
      ))}
    </div>
  );
};

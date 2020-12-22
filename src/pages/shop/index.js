import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Route } from "react-router-dom";

import { CollectionOverview } from "../../components/CollectionOverveiw";
import { CollectionPage } from "../collection";
import { WithSpinner } from "../../components/WithSpinner";

import { convertCollectionSnapshotToMap, firestore } from "../../firebase";

import { updateCollections } from "../../redux/shop/actions";

const CollectionOverviewWithSpinner = WithSpinner(CollectionOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

export const ShopPage = ({ match }) => {
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();
  useEffect(() => {
    const collectionsRef = firestore.collection("collections");

    const unsubscribeFromSnapshot = collectionsRef.onSnapshot(
      async (snapshot) => {
        const collectionsMap = convertCollectionSnapshotToMap(snapshot);
        dispatch(updateCollections(collectionsMap));
        setIsLoading(false);
      }
    );

    return () => {
      unsubscribeFromSnapshot();
    };
  }, [dispatch]);

  return (
    <div className="shop-page">
      <Route
        exact
        path={`${match.path}`}
        render={(props) => (
          <CollectionOverviewWithSpinner isLoading={isLoading} {...props} />
        )}
      />
      <Route
        path={`${match.path}/:category`}
        render={(props) => (
          <CollectionPageWithSpinner isLoading={isLoading} {...props} />
        )}
      />
    </div>
  );
};

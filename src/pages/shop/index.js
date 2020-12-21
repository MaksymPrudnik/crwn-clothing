import { Route } from "react-router-dom";
import { CollectionOverview } from "../../components/CollectionOverveiw";
import { CollectionPage } from "../collection";

export const ShopPage = ({ match }) => (
  <div className="shop-page">
    <Route exact path={`${match.path}`} component={CollectionOverview} />
    <Route path={`${match.path}/:category`} component={CollectionPage} />
  </div>
);

import React, { useEffect } from "react";
import { Route } from "react-router-dom";

import { fetchCollectionStart } from "../../redux/shop/shop.actions";
import { selectCollectionFetching } from "../../redux/shop/shop.selectors";
import { createStructuredSelector } from "reselect";

import CollectionsOverview from "../../components(reusable)/collection-overview/collection-overview.component";
import CollectionPage from "../collection/collection.component";

import { connect } from "react-redux";

import WithSpinner from "../../components(reusable)/with-spinner/with-spinner.component";

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

const ShopPage = ({ match, isCollectionFetching, fetchCollectionStart }) => {
  useEffect(() => {
    fetchCollectionStart();
  },[fetchCollectionStart]);

  // fetching firebase like an api provided in the firebase documentation
  // fetch('https://firestore.googleapis.com/v1/projects/crownclothingapp/databases/(default)/documents/collections')
  // .then(response=> response.json())
  // .then(collections => console.log(collections))

  return (
    <div className="shop-page">
      <Route
        exact
        path={`${match.path}`}
        render={(props) => (
          <CollectionsOverviewWithSpinner
            isLoading={isCollectionFetching}
            {...props}
          />
        )}
      />
      <Route
        path={`${match.path}/:collectionId`}
        render={(props) => (
          <CollectionPageWithSpinner
            isLoading={isCollectionFetching}
            {...props}
          />
        )}
      />
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  isCollectionFetching: selectCollectionFetching,
});

const mapDispatchToProps = (dispatch) => ({
  fetchCollectionStart: () => dispatch(fetchCollectionStart()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);

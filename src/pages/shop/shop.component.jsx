import React from "react";
import { Route } from "react-router-dom";

import {
  firestore,
  convertCollectionsSnapshotToMap,
} from "../../firebase/firebase.utils";

import CollectionsOverview from "../../components(reusable)/collection-overview/collection-overview.component";
import CollectionPage from "../collection/collection.component";

import { connect } from "react-redux";
import { updateCollections } from "../../redux/shop/shop.actions";

import WithSpinner from "../../components(reusable)/with-spinner/with-spinner.component";


const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends React.Component {

  state ={
    loading:true
  }

  unsubscribedFromSnapShot = null;

  componentDidMount() {
    const { updateCollections } = this.props;
    const collectionRef = firestore.collection("collections");


    // fetching firebase like an api provided in the firebase documentation
    // fetch('https://firestore.googleapis.com/v1/projects/crownclothingapp/databases/(default)/documents/collections')
    // .then(response=> response.json())
    // .then(collections => console.log(collections))

    collectionRef.get().then((snapshot) => {
      const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
      updateCollections(collectionsMap);
      this.setState({loading:false})
    });
  }

  render() {
    const { match } = this.props;
    const {loading} = this.state;

    return (
      <div className="shop-page">
        <Route exact path={`${match.path}`} render={(props)=><CollectionsOverviewWithSpinner isLoading={loading} {...props} />} />
        <Route
          path={`${match.path}/:collectionId`}
          render={(props)=><CollectionPageWithSpinner isLoading={loading} {...props} />}
        />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  updateCollections: (collectionsMap) =>
    dispatch(updateCollections(collectionsMap)),
})

export default connect(null, mapDispatchToProps)(ShopPage);

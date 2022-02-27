
/* redux saga simply helps us to connect outside methods 
like to fetch an api or something else into our redux state 
store. from saga we can control different types of api requests(like we can decide when they should be fetched or executed), 
using yield infront of any function!!! */


import { takeLatest, call, put,all } from "redux-saga/effects";

import {
  firestore,
  convertCollectionsSnapshotToMap,
} from "../../firebase/firebase.utils";

import { fetchCollectionSuccess, fetchCollectionFaliure } from "./shop.actions";

import ShopActionTypes from "./shop.types";

export function* fetchCollectionAsync() {
  yield console.log("i am fired");

  try {
    const collectionRef = firestore.collection("collections");
    const snapshot = yield collectionRef.get();
    const collectionsMap = yield call(
      convertCollectionsSnapshotToMap,
      snapshot
    );
    yield put(fetchCollectionSuccess(collectionsMap));
  } catch (error) {
    yield put(fetchCollectionFaliure(error.message));
  }

  //   collectionRef
  //     .get()
  //     .then((snapshot) => {
  //       const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
  //       dispatch(fetchCollectionSuccess(collectionsMap));
  //     })
  //     .catch((error) => dispatch(fetchCollectionFaliure(error.message)));
}

export function* fetchCollectionStart() {
  yield takeLatest(
    ShopActionTypes.FETCH_COLLECTIONS_START,
    fetchCollectionAsync
  );
}

export function* shopSagas(){
  yield all([call(fetchCollectionStart)]);
}

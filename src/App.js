import React from "react";
import "./App.css";
import ShopPage from "./pages/shop/shop.component";
import { Homepage } from "./pages/homepage/homepage.component";
import { Route, Switch,Redirect } from "react-router-dom";
import Header from "./components(reusable)/header/header.component";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import { connect } from "react-redux";
import { setCurrentUser } from "./redux/user/user.actions";
import { selectCurrentUser } from "./redux/user/user.selectors";
import { createStructuredSelector } from "reselect";
import CheckoutPage from "./pages/checkout/checkout.component";
class App extends React.Component {
  
  unsubscribedFromAuth = null;

  componentDidMount() {

    const {setCurrentUser} = this.props

    this.unsubscribedFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot((snapShot) => {
            setCurrentUser({
              id: snapShot.id,
              ...snapShot.data(),
            })
          
        });
      } else {
        setCurrentUser( userAuth );
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribedFromAuth();
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/shop" component={ShopPage} />
          <Route exact path="/checkout" component={CheckoutPage} />
          <Route exact path="/signin" render={()=>this.props.currentUser ? (<Redirect to='/' />) : (<SignInAndSignUpPage />)} />
        </Switch>
      </div>
    );
  }
}
const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser
})
const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);

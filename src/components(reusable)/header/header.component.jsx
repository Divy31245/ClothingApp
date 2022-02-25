import React from "react";


import { ReactComponent as Logo } from "../../assets/crown.svg";

import { auth } from "../../firebase/firebase.utils";

import { connect } from "react-redux";

import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";

import { selectCurrentUser } from "../../redux/user/user.selectors";
import { selectCartHidden } from "../../redux/cart/cart.selectors";

import { signOutStart } from "../../redux/user/user.actions";

import { createStructuredSelector } from "reselect";
import { HeaderContainer, LogoContainer,  OptionLink, OptionsContainer } from "./header.component.styles";

const Header = ({ currentUser, hidden ,signOutStart}) => (
  <HeaderContainer >
    <LogoContainer to="/" >
      <Logo></Logo>
    </LogoContainer>
    <OptionsContainer>
      <OptionLink  to="/shop">
        SHOP
      </OptionLink>
      <OptionLink  to="/shop">
        CONTACT
      </OptionLink>
      {currentUser ? (
        <OptionLink as='div' onClick={signOutStart}>
          SIGN OUT
        </OptionLink>
      ) : (
        <OptionLink  to="/signin">
          SIGN IN
        </OptionLink>
      )}
      <CartIcon />
    </OptionsContainer>
    {hidden ? null : <CartDropdown />}
  </HeaderContainer>
);

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,
});

const mapDispatchToProps = dispatch =>({
  signOutStart: ()=> dispatch(signOutStart())
})

export default connect(mapStateToProps,mapDispatchToProps)(Header);

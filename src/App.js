import React from 'react';
import './App.css';
import ShopPage from './pages/shop/shop.component';
import { Homepage } from './pages/homepage/homepage.component';
import { Route, Switch } from 'react-router-dom'
import Header from './components(reusable)/header/header.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';


function App() {
  return <div>
            <Header />
            <Switch>
                <Route exact path='/' component={Homepage} />
                <Route path='/shop' component={ShopPage} />
                <Route path='/signin' component={SignInAndSignUpPage} />
            </Switch>   
        </div>;
  
   
  
}

export default App;

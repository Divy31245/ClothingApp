import React from 'react';
import './App.css';
import ShopPage from './pages/shop/shop.component';
import { Homepage } from './pages/homepage/homepage.component';
import { Route, Switch } from 'react-router-dom'
import Header from './components(reusable)/header/header.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import {auth ,createUserProfileDocument} from './firebase/firebase.utils'





class App extends React.Component{

    constructor(){
        super();

        this.state = {
            currentUser:null
        }
    }


    unsubscribedFromAuth = null;

    componentDidMount(){
         this.unsubscribedFromAuth = auth.onAuthStateChanged(async userAuth =>{
                if(userAuth){
                    const userRef = await createUserProfileDocument(userAuth);

                    userRef.onSnapshot(snapShot =>{
                        this.setState(
                            {
                                currentUser:{
                                    id:snapShot.id,
                                    ...snapShot.data()
                                }
                            }
                        )
                        console.log(this.state)
                    })
                }
                else{
                    this.setState({currentUser:userAuth});
                }
        });
    }

    componentWillUnmount(){
        this.unsubscribedFromAuth();
    }
  
    render(){
        return (
        <div>
            <Header currentUser={this.state.currentUser} />
            <Switch>
                <Route exact path='/' component={Homepage} />
                <Route path='/shop' component={ShopPage} />
                <Route path='/signin' component={SignInAndSignUpPage} />
            </Switch>   
        </div>
        );
    }
    
  
   
  
}

export default App;

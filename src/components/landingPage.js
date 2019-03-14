import React from 'react';
import {connect} from 'react-redux';
import {Link, Redirect} from 'react-router-dom';
// import {login} from '../actions/auth';
import './landingPage.css';
// import { showFindGame } from '../actions/sideBar-actions';
import LoginForm from './loginForm';

export function LandingPage(props) {
    // If we are logged in redirect straight to the user's dashboard
    if (props.loggedIn) {
        return <Redirect to="/dashboard" />;
    }
    
    // const onSubmit = () =>  {
    //     props.dispatch(login('spectator', '0123456789'));
    //     props.dispatch(showFindGame())
    // }
    
    return (
        <div className="home">
            <h1>Gametron</h1>
            <p>Use this app to easily create or join games.</p>
            <p>Compete against other players to achieve Vicory!</p>
            {/* <p>
                Just want to spectate? <span 
                className='submit-link' 
                onClick={()=>onSubmit()}>Click Here</span>  
            </p> */}
            
            <p>
                <Link className='link' to="/register">Create a New Account</Link> or login below.
            </p>
            <div className='logIn subcard'>
                <LoginForm />
            </div>
            <br />
            <p>
            Just want to demo the app? Use these:
            <br /> Username: demo 
            <br /> Password: password12
            </p>
            
        </div>
    );
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(LandingPage);

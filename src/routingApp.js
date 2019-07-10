import React from 'react';
import App from './App';
import UserProfile from './userProfile';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'


export class RoutingApp extends React.Component{
    constructor(props){
        super(props);
        this.state={
            userList:this.getDataFromNetwork() || []
        }
    }
    getDataFromNetwork = () => {
        //makes api request
        const data = this.httpGet("https://demo9197058.mockable.io/users");
        return JSON.parse(data);
      }
    
      httpGet(theUrl) {
        var xmlHttp = new XMLHttpRequest();
        xmlHttp.open( "GET", theUrl, false ); // false for synchronous request
        xmlHttp.send( null );
        return xmlHttp.responseText;
      }
    render(){
        return(
            <Router>
                <div>
                    <Route exact path="/" render={() => <App userList={this.state.userList} />}/>
                    <Route path='/user/:id' render={({match})=><UserProfile id={match.params.id} userList={this.state.userList}/>}></Route>
                </div>
            </Router>
        );
    }
}

export default RoutingApp;
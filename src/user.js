import React from 'react';
import {Link,Redirect,withRouter } from "react-router-dom";
import { browserHistory } from 'react-router';
export class User extends React.Component{
    constructor(props){
        super(props);
        this.state={
            isClicked:false
        }
    }

    render(){
        
        const user=this.props.userData;
        if(this.state.isClicked===true){
            this.props.history.push('/user/:'+user.id);
            return <Redirect to={`/user/:${user.id}`}></Redirect>
            
        }
        //console.log(user);
        return(
            <tr onClick={this.handleClick} style={{
                        cursor:"pointer",
                        ":hover": {
                           textDecoration: "none",
                           color: "red",
                         },
                    }}>
                
                    <td>{user.first_name}</td>
                    <td>{user.last_name}</td>
                    <td>{user.company_name}</td>
                    <td>{user.city}</td>
                    <td>{user.state}</td>
                    <td>{user.zip}</td>
                    <td>{user.email}</td>
                    <td>{user.web}</td>
                    <td>{user.age}</td>
            </tr>
            
        );
    }
    handleClick=()=>{
        this.setState({isClicked:true});
    }
}


export default withRouter(User);

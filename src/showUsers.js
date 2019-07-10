import React from 'react';
import User from './user';
import Pagination from './pagination';
import UserProfile from './userProfile';
import './showUsers.css'

export class ShowUsers extends React.Component{
    constructor(props){
        super(props);
        this.state={
            userList:this.props.userList,
            flipFirstName:false,
            flipLastName:false,
            flipCompanyName:false,
            flipCity:false,
            flipState:false,
            flipZip:false,
            flipEmail:false,
            flipWeb:false,
            flipAge:false
        }
    }
    componentWillReceiveProps(nextProps){
        console.log(nextProps);
        this.setState({userList:nextProps.userList});
    }
    render(){
        console.log(this.props.userList);
        var paginatedUserList=[];
        for(var i=0;i<(Math.min(5,this.state.userList.length));i++){
            if(this.state.userList[i]){
                paginatedUserList.push(this.state.userList[i]);}
        }
        console.log(paginatedUserList);
        //this.props.handlePagination(startingList);
        const userListRenderer= paginatedUserList.map((user)=>{
            console.log(user);
            return <User userData={user}></User>
        })
        return( 
            <div>
                <table style={{paddingBottom:"10px"}}>
                    <tr>
                        <th value="first_name" onClick={this.handleAlphabeticalSorting} style={{cursor:"pointer"}}>First Name</th>
                        <th value="last_name" onClick={this.handleAlphabeticalSorting} style={{cursor:"pointer"}}>Last Name</th>
                        <th value="company_name" onClick={this.handleAlphabeticalSorting} style={{cursor:"pointer"}}>Company Name</th>
                        <th value="city" onClick={this.handleAlphabeticalSorting} style={{cursor:"pointer"}}>City</th>
                        <th value="state" onClick={this.handleAlphabeticalSorting} style={{cursor:"pointer"}}>State</th>
                        <th value="zip" onClick={this.handleNumericalSorting} style={{cursor:"pointer"}}>ZIP</th>
                        <th value="email" onClick={this.handleAlphabeticalSorting} style={{cursor:"pointer"}}>Email</th>
                        <th value="web" onClick={this.handleAlphabeticalSorting} style={{cursor:"pointer"}}> Web</th>
                        <th value="age" onClick={this.handleNumericalSorting} style={{cursor:"pointer"}}>Age</th>
                    </tr>
                    {userListRenderer}
                </table>
                <Pagination userList={this.props.userList} handlePagination={this.handlePagination}></Pagination>
            </div>
        );
    }
    handlePagination=(updatedList)=>{
        this.setState({userList:updatedList});
    }
    handleAlphabeticalSorting=(event)=>{
        const x=event.target.getAttribute('value');
        //sort and flip based on first name
        if(event.target.getAttribute('value')=="first_name"){
            if(this.state.flipFirstName===false){
                this.setState({flipFirstName:true});}
            else this.setState({flipFirstName:false});
        }
        //sort and flip based on last name
        if(event.target.getAttribute('value')=="last_name"){
            if(this.state.flipLastName===false){
                this.setState({flipLastName:true});}
            else this.setState({flipLastName:false});
        }
        //sort and flip based on company name
        if(event.target.getAttribute('value')=="company_name"){
            if(this.state.flipCompanyName===false){
                this.setState({flipCompanyName:true});}
            else this.setState({flipCompanyName:false});
        }
        //sort and flip based on city
        if(event.target.getAttribute('value')=="city"){
            if(this.state.flipCity===false){
                this.setState({flipCity:true});}
            else this.setState({flipCity:false});
        }
        //sort and flip based on state
        if(event.target.getAttribute('value')=="state"){
            if(this.state.flipState===false){
                this.setState({flipState:true});}
            else this.setState({flipState:false});
        }
        //sort and flip based on email
        if(event.target.getAttribute('value')=="email"){
            if(this.state.flipEmail===false){
                this.setState({flipEmail:true});}
            else this.setState({flipEmail:false});
        }
        //sort and flip based on web
        if(event.target.getAttribute('value')=="web"){
            if(this.state.flipWeb===false){
                this.setState({flipWeb:true});}
            else this.setState({flipWeb:false});
        }
        //sort based on the target value
        const sortedList=this.props.userList.sort((a,b) =>{
            return (a[x]).localeCompare(b[x])}
            );
        //reversing the list based on first name
        if(this.state.flipFirstName===true){sortedList.reverse()}
        
        //reversing the list based on last name
        if(this.state.flipLastName===true){sortedList.reverse()}
        
        //reversing the list based on company name
        if(this.state.flipCompanyName===true){sortedList.reverse()}
        
        //reversing the list based on city
        if(this.state.flipCity===true){sortedList.reverse()}
        
        //reversing the list based on state
        if(this.state.flipState===true){sortedList.reverse()}
        
        //reversing the list based on Email
        if(this.state.flipEmail===true){sortedList.reverse()}

        //reversing the list based on Web
        if(this.state.flipWeb===true){sortedList.reverse()}
        this.setState({userList:sortedList});
    }

    handleNumericalSorting=(event)=>{
        const x=event.target.getAttribute('value');
        //sort and flip based on zip
        if(event.target.getAttribute('value')=="zip"){
            if(this.state.flipZip===false){
                this.setState({flipZip:true});}
            else this.setState({flipZip:false});
        }
        //sort and flip based on age
        if(event.target.getAttribute('value')=="age"){
            if(this.state.flipAge===false){
                this.setState({flipAge:true});}
            else this.setState({flipAge:false});
        }
        const sortedList=this.props.userList.sort((a,b) =>{
            return parseFloat(a[x]) - parseFloat(b[x])}
            );
        //reversing the list based on Zip
        if(this.state.flipZip===true){sortedList.reverse()}
        //reversing the list based on Age
        if(this.state.flipAge===true){sortedList.reverse()}
        this.setState({userList:sortedList});
    }
}

export default ShowUsers;
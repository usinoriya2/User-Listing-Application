import React from 'react';
import './App.css';
import ShowUsers from './showUsers';
import Search from './search';
import { Pagination } from './pagination';

export class App extends React.Component{
  constructor(props){
    super(props);
    this.state={
      userList:this.props.userList
    }
  }

 

  render(){
    console.log(this.state.userList);
    return(
      <div style={{margin:"20px"}}>
        <Search userList={this.props.userList} handleSearch={this.handleSearch}></Search>
        <ShowUsers userList={this.state.userList}></ShowUsers>
      </div>
    );
  }
  

  handleSearch=(searchedList)=>{
    this.setState({userList:searchedList});
  }
}

export default App;

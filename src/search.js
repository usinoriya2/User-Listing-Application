import React from 'react';

export class Search extends React.Component{
    constructor(props){
        super(props);
        this.state={
            searchedList:this.props.userList
        }
    }
    render(){
        return(
            <div style={{paddingBottom:"20px"}}> 
                <input style={{ width: "30%",
                                height:"40px",
                                display: "inline-block",
                                border: "1px solid #ccc",
                                borderRadius: "4px",
                                boxSizing: "border-box",
                                fontSize:"25px"}} placeholder="  Search by first name" onChange={this.handleChange}></input>
            </div>
        );
    }
    handleChange=(event)=>{
        const updatedList=[];
        console.log(event.target.value);
        this.props.userList.map((user)=>{
            if(user.first_name.toLowerCase().includes((event.target.value).toLowerCase())){
                updatedList.push(user);
            }
        });
        console.log(updatedList);
        this.setState({searchedList:updatedList});
        this.props.handleSearch(updatedList);
    }
}
export default Search;
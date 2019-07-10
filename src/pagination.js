import React from 'react';
import User from './user';
import './pagination.css';

export class Pagination extends React.Component{
    constructor(props){
        super(props);
        this.state={
            updatedList:[],
            leftLimit:0,
            rightLimit:Math.min(9,this.props.userList.length/5),
            currentButton:1
        }
    }
    render(){
        console.log(this.state.currentButton,this.state.leftLimit,this.state.rightLimit);
        const userList=this.props.userList;
        const startingList=[];
        const totalUsers= userList.length;
        const usersPerPage=5;
        const noOfPages=Math.ceil(totalUsers/usersPerPage);
        const handleClick=(event)=>{
            console.log(event.target.value);
            const newList=[];
            const currentButton=parseInt(event.target.value);
            this.setState({currentButton:currentButton});
            const firstIndexOfUserArray=(currentButton*usersPerPage)-usersPerPage;
            const lastIndexOfUserArray=(currentButton*usersPerPage)-1;
            for(var i=firstIndexOfUserArray;i<=lastIndexOfUserArray;i++){
                newList.push(userList[i]);
            }
            this.setState({updatedList:newList});
            this.props.handlePagination(newList);
            console.log(firstIndexOfUserArray,lastIndexOfUserArray,this.state.updatedList,newList);
        }
        var buttonRenderer=[];
        var buttons=[];
        console.log(this.state.currentButton);
        for(var i=0;i<noOfPages;i++){
            var x={backgroundColor: "blue", color: "white"};
            buttons.push(<button class={(i+1)===this.state.currentButton ? "buttonOnClick" : "myButton"} onClick={handleClick} value={i+1}>{i+1}</button>);
        }

        const handleNext=(event)=>{
            var leftLimit=this.state.leftLimit;
            var rightLimit=this.state.rightLimit;
            var currentButton=this.state.currentButton;
            var upperLimit=this.props.userList.length/5;
            if(currentButton<upperLimit){
                currentButton++;
            }
            if(currentButton===rightLimit+2 && rightLimit<upperLimit){
                leftLimit=leftLimit+1;
                rightLimit=rightLimit+1;
            }
            event.target.value=currentButton;
            this.setState({leftLimit:leftLimit});
            this.setState({rightLimit:rightLimit});
            this.setState({currentButton:currentButton});
            handleClick(event);
        }

        const handlePrevious=(event)=>{
            var leftLimit=this.state.leftLimit;
            var rightLimit=this.state.rightLimit;
            var currentButton=this.state.currentButton;
            if(currentButton>1){
                currentButton--;
            }
            if(currentButton===leftLimit-1 && leftLimit>=1){
                leftLimit=leftLimit-1;
                rightLimit=rightLimit-1;
            }
            event.target.value=currentButton;
            this.setState({leftLimit:leftLimit});
            this.setState({rightLimit:rightLimit});
            this.setState({currentButton:currentButton});
            handleClick(event);
        }

        //algorithm to show 10 buttons at a time and implement window
        var leftLimit=this.state.leftLimit;
        var rightLimit=this.state.rightLimit;
        for(var i=leftLimit;i<=rightLimit;i++){
            buttonRenderer.push(buttons[i]);
        }
        
        return(
            <div>
                <div style={{textAlign:"center", paddingTop:"10px"}}>
                    <button class="myButton" onClick={handlePrevious} value="">Previous</button>
                    <button class="myButton" onClick={this.handleLeftButton} ><img src="./left-icon.jpg"/></button>
                    {buttonRenderer}
                    <button class="myButton" onClick={this.handleRightButton}><img src="./right-icon.jpg"/></button>
                    <button class="myButton" onClick={handleNext} value="">Next</button>
                </div>
            </div>
        );

    }
    
    

    handleLeftButton=()=>{
        var leftLimit=this.state.leftLimit;
        var rightLimit=this.state.rightLimit;
        if(leftLimit>=10){
            leftLimit=leftLimit-10;
            rightLimit=rightLimit-10;
        }
        else{
            rightLimit=Math.min(9,this.props.userList.length/5);
            leftLimit=0;
        }
        this.setState({leftLimit:leftLimit});
        this.setState({rightLimit:rightLimit});
    }

    handleRightButton=()=>{
        var leftLimit=this.state.leftLimit;
        var rightLimit=this.state.rightLimit;
        var upperLimit=this.props.userList.length/5;
        if(rightLimit<=upperLimit-10){
            leftLimit=leftLimit+10;
            rightLimit=rightLimit+10;
        }
        else{
            leftLimit=leftLimit+(upperLimit-rightLimit);
            rightLimit=upperLimit;
        }
        this.setState({leftLimit:leftLimit});
        this.setState({rightLimit:rightLimit});
    }
    
}
export default Pagination;

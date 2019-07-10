import React from 'react';
import './userProfile.css';
export class UserProfile extends React.Component{
    constructor(props){
        super(props);
        this.state={
            id: this.props.id,
            currentUSer:{}
        }
    }
    componentDidMount() {
    }
    render(){
        console.log("hello",  typeof(this.state.id));
        // this.props.userList.map((user)=>{
        //     if(user.id===this.state.id){
        //         this.setState({currentUSer:user});
        //     }
        // });
        // const user=this.state.currentUSer;
        // console.log(user);
        const users = this.props.userList.filter((user) => user.id.toString() === this.state.id.substring(1)).map(
            (user) => {
                return (
                    <div style={{margin:"20px"}}>
                        <div style={{fontFamily: "Comic Sans MS, cursive, sans-serif",fontSize:"36px", paddingBottom:"10px"}}>{user.first_name} {user.last_name}</div>
                        <table key={user.id} class="table">
                            <tr class="tr">
                                <th class="th">Company</th>
                                <td class="td">{user.company_name}</td>
                            </tr>
                            <tr class="tr">
                                <th class="th">City</th>
                                <td class="td">{user.city}</td>
                            </tr>
                            <tr>
                                <th class="th">State</th>
                                <td class="td">{user.state}</td>
                            </tr>
                            <tr>
                                <th class="th">ZIP</th>
                                <td class="td">{user.zip}</td>
                            </tr>
                            <tr>
                                <th class="th">Email</th>
                                <td class="td">{user.email}</td>
                            </tr>
                            <tr>
                                <th class="th">Web</th>
                                <td class="td">{user.web}</td>
                            </tr>
                            <tr>
                                <th class="th">Age</th>
                                <td class="td">{user.age}</td>
                            </tr>
                        </table>
                    </div>

                );
            }
        );
        return(
            <div>
                {/* <div>{user.first_name}</div>
                <div>{user.last_name}</div>
                <div>{user.company_name}</div>
                <div>{user.city}</div>
                <div>{user.state}</div>
                <div>{user.zip}</div>
                <div>{user.email}</div>
                <div>{user.web}</div>
                <div>{user.age}</div> */}
                {users}
            </div>
        );
    }
}

export default UserProfile;
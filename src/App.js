import React from 'react';
import logo from './logo.svg';
import './App.css';
import $ from 'jquery'
import Axios from 'axios'
const axios = Axios.create();
class App extends React.Component{
    login(){
        axios.request({
            url:"login.php",
            method:'get',
            params:{
                username:$("#uname").val(),
                pass:$("#userpwd").val()
            }
        }).then(res=>{
            alert('login success');
        })
    }
    render() {
            return (
                <form action="" method="post">
                <table>
                <tr>
                <td align="right">用户名：</td>
            <td><input type="text" name="username" value="user" id="uname"/></td>
                </tr>
                <tr>
                <td align="right">密 码：</td>
            <td><input type="password" id="userpwd" /></td>
                </tr>
                <tr>
                <td><input type="submit" name="submit" value="登陆" onClick={this.login}/></td>
            <td><a href="register.php">注册</a></td>
            </tr>
            </table>
            </form>

        );
    }


}

export default App;

import React from 'react'

 class Login extends React.Component {
    render() {
        return (
            <div id="admLogin">
            <img id="cross" src={require('./images/cross.jpg')}/>
            <h1 id="adm">Admin Login</h1>
            <div id="admUser">
            <i class="fas fa-user"></i>
            <input type="text" placeholder="Username" id="aUname"/>
            </div>
            <div id="admPass">
            <i class="fas fa-lock"></i>
            <input type="password" placeholder="Password" id="aPass"/>
            </div>
            <button class="btn btn-primary" type="button" id="aLogin">Login</button> 
            </div>
        )
    }
}

export default Login

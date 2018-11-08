import React, { Component } from 'react';


function loginFetch() {
    let payload = {
        "login-username": document.getElementById('login-username').value,
        "login-password": document.getElementById('login-password').value,
    };
    console.log(payload);
    fetch('http://localhost:3000/login', {
        method: 'post',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload),
    }).then(function (response) {
        document.getElementById('responseLogin').innerText = response;
    }).catch(function (err) {
        document.getElementById('responseLogin').innerText = err;
    });
};

class Login extends Component {
    render() {
        return (
            <div>
                <div id="responseLogin"></div>
                <p>Create account</p>
                <p><input type="text" id="login-username" name="login-username"></input></p>
                <p><input type="text" id="login-password" name="login-password"></input></p>
                <p><button id="login-button" onClick={loginFetch}>Login</button></p>

            </div>)
    };
};

export default Login;
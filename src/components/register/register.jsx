import React, { Component } from 'react';


function registerFetch() {
    let payload = {
        "email": document.getElementById('register-email').value,
        "username": document.getElementById('register-username').value,
        "password": document.getElementById('register-password').value,
        "passwordConf": document.getElementById('register-passwordConf').value,
    };
    console.log(payload);
    fetch('http://localhost:3000/register', {
        method: 'post',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',

        },
        body: JSON.stringify(payload),
    }).then(function (response) {
        return response.json();
    }).then(function (response) {
        document.getElementById('responseRegister').innerText = response.message;
    }).catch(function (err) {
        document.getElementById('responseRegister').innerText = err;
        console.log(err);
    });
};

class Login extends Component {
    render() {
        return (
            <div>
                <div id="responseRegister"></div>

                <p>Create account</p>
                <p><input type="email" id="register-email" name="email"></input></p>
                <p><input type="text" id="register-username" name="username"></input></p>
                <p><input type="text" id="register-password" name="password"></input></p>
                <p><input type="text" id="register-passwordConf" name="passwordConf"></input></p>
                <p><button id="register-button" onClick={registerFetch}>Create</button></p>

            </div>)
    };
};

export default Login;
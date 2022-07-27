import React, {useState} from 'react';
import axios from 'axios';
import {useHistory} from 'react-router-dom'

const Login = () => {
    const {push} = useHistory();
    
    const [credentials, setCredentials] = useState({
        username: "",
        password: ""
    });

    const handleChange = e => {
        setCredentials({
            ...credentials,
            [e.target.name]: e.target.value
          }
        );
      };

    const login = e => {
    e.preventDefault();
    axios.post('http://localhost:9000/api/login', credentials)
        .then(res => {
            console.log("response from login",res)
            localStorage.setItem("token", res.data.token);
            push('/friends');
        })
        .catch((err) => console.log(err))
    };

        return(
        <>
        <h2>Login</h2>
        <form onSubmit={login}>
            <div>
                <label htmlFor='username'>Username</label>
                <input
                type="text"
                name="username"
                value={credentials.username}
                onChange={handleChange}
                >
                </input>
            </div>
            <div>
                <label htmlFor='password'>Password</label>
                <input
                type="text"
                name="password"
                value={credentials.password}
                onChange={handleChange}>
                </input>
            </div>
            
            <button>Log in</button>
        </form>
        </>
    );
    }


export default Login
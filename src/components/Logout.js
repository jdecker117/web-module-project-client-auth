import React, {useEffect} from 'react'
import axios from 'axios'
import {useHistory} from 'react-router-dom'

const Logout = () => {
    const {push} = useHistory();
    const token = localStorage.getItem("token")
    useEffect(() => {
    axios.post('http://localhost:9000/api/logout', {}, {
        headers: {
            authorization: token
        }
    })
    .then(res=>{
        localStorage.removeItem("token");
        push('/login');
    })
    .catch(err=>{
        console.log(res)
    })
}, [])
    return(<div></div>)
}

export default Logout
import React, {useState, useEffect} from 'react'
import axios from 'axios'
import axiosWithAuth from '../utilities/axiosWithAuth'

const FriendsList = () => {
    const [friends, setFriends] = useState([]);
    const token = localStorage.getItem("token")
    useEffect(() => {
        axiosWithAuth().get("/friends")
        .then(res => {
            setFriends(res.data)
        })
        .catch(err=>{
            console.log(err)
        })
    },[])

    return (
    <div>
        <h2>FriendsList</h2>
        <ul>
            {friends.map(friend=>{
                return(<li>{friend.name} - {friend.email}</li>)
            })}
            
        </ul>
    </div>
    )
  }

export default FriendsList
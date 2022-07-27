import React, {useState} from "react"
import {useHistory} from 'react-router-dom'
import axios from 'axios'

const AddFriend = () => {
    const {push} = useHistory()
    const [form, setForm] = useState({
        name: "",
        email: '',
    })
    const token = localStorage.getItem("token");

    const handleChange = (evt) => {
        setForm({
            ...form,
            [evt.target.name]: evt.target.value
        })
    }

    const handleSubmit = (evt) => {
        evt.preventDefault();
        axios.post('http://localhost:9000/api/friends', form, {
            headers: {authorization: token}
        })
        .then(res=>{
            push('/friends')
        })
    }
    return (
        <div>
            <h2>Add Friend</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Username:</label>
                    <input onChange={handleChange} name="name" value={form.name} id="username"/>
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input onChange={handleChange} name="email" value={form.email} id="email"/>
                </div>
                <button>Add Friend</button>
            </form>
        </div>)
}

export default AddFriend
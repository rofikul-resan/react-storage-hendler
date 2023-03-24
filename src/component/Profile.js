import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import User from './User';

const Profile = () => {
    const [users, setUsers] = useState([]);
    useEffect(()=>{
        fetch("./generated.json")
        .then(res => res.json())
        .then(data => setUsers(data))
    },[])
    return (
        <div>
            {users.map(user => <User user={user} key= {user.id} ></User>)}
        </div>
    );
};



export default Profile;
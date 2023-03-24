import React from 'react';

const User = (props) => {
    const {name , id} = props.user
    return (
        <div>
            <h1>name :{name} </h1>
            <p>id :{id} </p>
        </div>
    );
};

export default User;
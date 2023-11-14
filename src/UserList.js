import React, { useEffect, useState } from 'react';
import axios from 'axios';

const UserCard = ({ user }) => {
    const cardStyles = {
        width: '100%', 
        marginBottom: '16px', 
        border: '1px solid #ccc',
        borderRadius: '4px',
    };

    return (
        <div style={cardStyles}>
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">{user.name}</h5>
                    <p className="card-text">{user.username}</p>
                    <p className="card-text">{user.email}</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        </div>
    );
};

const UserList = () => {
    const [listOfUsers, setListOfUsers] = useState([]);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(response => setListOfUsers(response.data))
            .catch(error => console.log(error));
    }, );

    const styles = {
        container: {
            textAlign: 'center',
            marginTop: '20px',
        },
        heading: {
            color: '#333',
        },
        userList: {
            display: 'grid',
            gap: '16px',
            justifyContent: 'space-around',
            gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', 
        },
    };

    return (
        <div style={styles.container}>
            <h1 style={styles.heading}>List of users</h1>
            <div style={styles.userList}>
                {listOfUsers.map((user, index) => (
                    <UserCard key={index} user={user} />
                ))}
            </div>
        </div>
    );
};

export default UserList;

import React from 'react'
import { UserContext } from '../../Context/userContext'
import { useContext } from 'react';

const Profile = () => {
    const { token, logout } = useContext(UserContext); // Usar el token y el método logout

    return (
        <div className='container'>
            <div className="card text-center">
                <h5 className="card-header">Profile</h5>
                <div className="card-body">
                    <h5 className="card-title">Email</h5>
                    <p className="card-text">Probando@gmail.com</p>
                    <a href="#" className="btn btn-success" onClick={logout}>Logout</a>
                </div>
            </div>

        </div>
    )
}

export default Profile

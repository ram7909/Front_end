import React from 'react'
import { useNavigate } from 'react-router-dom'

const Profile = ({ name, email, password }) => {

    const navigate = useNavigate()
    return (
        <>
            <div className="container" style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginTop:'50px'
            }}>
                <div className="details" style={{
                    width: '400px',
                    display: 'flex',
                    justifyContent: 'center',
                    flexDirection:'column',
                    gap:'20px',
                    border:'2px solid yellow',
                    borderRadius:'15px',
                    padding:'15px',
                    backgroundColor:'rgba(171, 170, 170, 0.2)',
                }}>
                    <h1 style={{ textAlign: 'center' }}>Profile</h1>
                    <div className="name">
                        <h4>Name : {name} </h4>
                    </div>
                    <div className="email">
                        <h4>Email : {email} </h4>
                    </div>
                    <div className="password">
                        <h4>Password : {password} </h4>
                    </div>
                    <div className="btn">
                        <button onClick={() => navigate('/admin')} type="submit" className="btn btn-primary" style={{width:'50%'}}>Edit Profile</button>
                    </div>
                    
                </div>
            </div>

        </>
    )
}

export default Profile
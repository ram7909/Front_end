import React from 'react'
import { useNavigate } from 'react-router-dom'
const Login = ({ name, email, password, setEmail, setName, setPassword }) => {
    const navigate = useNavigate();
    return (
        <>
            <div className="container" style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginTop:'50px'
            }}>
                <div className="form" style={{
                    width: "400px",
                    display: 'flex',
                    justifyContent: 'center',
                    flexDirection: 'column',
                    gap: '20px',
                    border: '2px solid yellow',
                    borderRadius: '15px',
                    padding: '15px',
                    backgroundColor: 'rgba(171, 170, 170, 0.2)'
                }}>
                    <form>
                        <h1 style={{ textAlign: 'center' }}>Login</h1>
                        <div className="mb-3">
                            <label htmlFor="exampleName" className="form-label">Name</label>
                            <input type="text" className="form-control" id="exampleName" value={name} onChange={(e) => setName(e.target.value)} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                            <input type="email" className="form-control" id="exampleInputEmail1" value={email} onChange={(e) => setEmail(e.target.value)}  />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                            <input type="password" className="form-control" id="exampleInputPassword1" value={password} onChange={(e) => setPassword(e.target.value)}  />
                        </div>
                        <button onClick={() => navigate('/profile')} type="submit" className="btn btn-primary">Login</button>
                    </form>
                </div>
            </div>


        </>
    )
}

export default Login
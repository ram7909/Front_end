import React from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const navigate = useNavigate();
    return (
        <>
            <div className="form">
                <form className='col-md-4'>
                    <h2 style={{textAlign:'center'}}>Login</h2>
                    <div class="mb-3">
                        <label for="exampleName" class="form-label">Name</label>
                        <input type="text" class="form-control" id="exampleName"/>
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Email address</label>
                        <input type="email" class="form-control" id="exampleInputEmail1"/>
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">Password</label>
                        <input type="password" class="form-control" id="exampleInputPassword1" />
                    </div>
                    <button onClick={()=>navigate('/profile')} type="submit" class="btn btn-primary">Login</button>
                </form>
            </div>

        </>
    )
}

export default Login
import React from 'react'
const Form = () => {
    return (
        <>
            <div className="container col-sm-4 bg-dark text-light">
                <div className="head-div">
                    <hr />
                    <h5>Enquriy</h5>
                    <hr />
                </div>
                <form>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
                        <input type="email" className="form-control" placeholder='Enter Full Name' />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                        <input type="email" className="form-control" placeholder='Enter Email Address' />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Phone Number</label>
                        <input type="password" className="form-control" placeholder='Enter Phone Number' />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Message</label>
                        <input type="password" className="form-control" placeholder='Message Here...' />
                    </div>
                    <button type="submit" className="btn btn-warning">Submit</button>
                </form>
            </div>
        </>
    )
}

export default Form
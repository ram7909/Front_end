import React from 'react'
import './Contact.css'
const contact = () => {
  return (
    <>
        <div className="col-sm-4 bg-dark container">
            <div className="head-div">
                <hr/>
                <h5>Contact</h5>
                <hr/>
            </div>
            <div className="email-num">
                <div className="email">
                    <p>Email Address</p>
                    <p>superman@gmail.com</p>
                </div>
                <div className="num">
                    <p>Mobile Number</p>
                    <p>+91 9875538593</p>
                </div>
            </div>
            <div className="add-des">
                <div className="add">
                    <p>Address</p>
                    <p>Indian Ocean</p>
                </div>
                <div className="des">
                    <p>Description</p>
                    <p>Salman Ka Fan</p>
                </div>
            </div>
        </div>
    </>
  )
}

export default contact
import React from 'react'
import './Course.css'
const course = {
    title: 'MERN',
    description: 'MERN Stack is a collection of powerful technologies and robust, used to develop scalable master web applications comprising backend, front-end, and database components. It is JavaScript that is used for the faster and easier development of full-stack web applications.',
    price: '80,000',
    imgsrc: 'data:image/jpeg;base64,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'
}

const Course = () => {
    return (
        <div className="main">

            <div className='course'>
                <img src={course.imgsrc} alt="" />
                <div className="item">
                    <h1>{course.title}</h1>
                    <h3>{course.price}</h3>
                    <h5>{course.description}</h5>
                </div>
            </div>
        </div>
    )
}

export default Course
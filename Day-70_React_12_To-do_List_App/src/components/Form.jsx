import React, { useState } from 'react'

const Form = ({ setData, data }) => {
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")

    const submitHandler = (e) => {
        e.preventDefault();
        alert(title + " " + description);
        const obj = { id: Math.random(), title, description };
        setData([...data , obj]);
        setTitle("");
        setDescription("");
    }
    return (
        <>
            <div className="container my-5">
                <form onSubmit={submitHandler}>
                    <div className="row d-flex justify-content-center align-items-center">
                        <div className="col-md-5">
                            <input type="text" className="form-control" placeholder='Title' value={title} onChange={(e) => setTitle(e.target.value)} />
                        </div>
                        <div className="col-md-5">
                            <input type="text" className="form-control" placeholder='Description' value={description} onChange={(e) => setDescription(e.target.value)} />
                        </div>
                        <button type="submit" className="btn btn-primary col-md-2">Add</button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Form
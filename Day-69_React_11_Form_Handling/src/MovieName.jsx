import React, { useState } from 'react'

const Form = () => {
    const [name, setName] = useState("")
    const [des, setDes] = useState("")
    const [date, setDate] = useState("")
    const [img, setImg] = useState("")

    const submitHandler = (e) =>{
        e.preventDefault();
        alert("You Form Has Been Submited" + name + des + date + img)
        setName("");
        setDes("");
        setDate("");
        setImg("");
    }
    return (
        <>
            <div className="container my-5 bg-black text-light p-4" style={{ width: '650px', borderRadius: '10px', border: '2px solid blue' }}>
                <h1 className='text-center'>Movie Detail's</h1>
                <form onSubmit={submitHandler}>
                    <div className="mb-3">
                        <label htmlFor="exampleInputName1" className="form-label">Movie Name</label>
                        <input type="text" className="form-control bg-black text-light" value={name} onChange={(e)=>setName(e.target.value)} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Description</label>
                        <input type="text" className="form-control bg-black text-light" value={des} onChange={(e)=>setDes(e.target.value)} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Release Date</label>
                        <input type="date" className="form-control bg-black text-light" value={date} onChange={(e)=>setDate(e.target.value)} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputProfile1" className="form-label">Poster</label>
                        <input type="file" className="form-control bg-black text-light" value={img} onChange={(e)=>setImg(e.target.value)} />
                    </div>
                    <div className="d-grid col-6 mx-auto mt-5">
                        <button type="submit" className="btn btn-primary" >Submit</button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Form
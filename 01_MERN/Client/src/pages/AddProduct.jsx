import React from 'react'

const AddProduct = () => {
    return (
        <>
            <div className="container" style={{ height: '100vh' }}>
                <div className="container my-3 p-4" style={{
                    width: '600px', border: '1px solid blue', borderRadius: '10px'
                }}>
                    <div className="mb-3">
                        <label className="form-label">Title</label>
                        <input type="text" className="form-control" />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Description</label>
                        <input type="text" className="form-control" />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Price</label>
                        <input type="number" className="form-control" />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Quantity</label>
                        <input type="number" className="form-control" />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">image</label>
                        <input type="text" className="form-control" />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">category</label>
                        <select class="form-select form-select-lg mb-3 bg-black text-light" aria-label="Large select example">
                            <option selected>Select Category</option>
                            <option value="mobiles">Mobile</option>
                            <option value="taletes">Tablet</option>
                            <option value="laptops">Laptop</option>
                        </select>
                    </div>
                    <div className='d-grid col-6 mx-auto'>
                        <button className='btn btn-outline-primary'>Add Product</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AddProduct
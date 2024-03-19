import React from 'react'

function Header({search, setSearch}) {
    return (
        <div style={{backgroundColor : "#430A5D", color : "#EEE4B1"}} className=''>
            <nav>
                <div className='container-fluid p-4 '>
                    <div className='row'>
                        <div className='col-12 col-md-6'>
                            <h2 className='navbar-brand fs-2 fw-bolder'>Food Zone</h2>
                        </div>
                        <div className='col'>
                            <div className='row'>
                                <div className='col-12 col-md-8'>
                                    <form onSubmit={(e) => e.preventDefault()}>
                                        <input
                                            type='text'
                                            placeholder='Search Food'
                                            className='w-75 p-2 form-control my-3 my-md-0'
                                            value={search}
                                            onChange={(e) => setSearch(e.target.value)}
                                        />
                                    </form>
                                </div>
                                <div className='col-12 text-center col-md-4 mt-3 mt-md-0'>
                                    <button
                                        type='button'
                                        className='btn btn-primary fs-5 fw-bold'
                                        data-bs-toggle="modal"
                                        data-bs-target="#mymodal"
                                    >Sign in/Register</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>

            <div className='modal ' id='mymodal'>
                <div className='modal-dialog '>
                    <div className='modal-content '>
                        <div className='modal-header'>
                            <h5 className='modal-title text-black'>Sign in / Register</h5>
                            <button
                                type='button'
                                className='btn-close'
                                data-bs-dismiss = "modal"
                            ></button>
                        </div>
                        <div className='modal-body'>
                            <form>
                                <input 
                                    type='text'
                                    className='form-control my-3'
                                    placeholder='Name'
                                    required
                                />
                                <input 
                                    type='text'
                                    className='form-control my-3'
                                    placeholder='Phone Number'
                                    required
                                />
                                <input 
                                    type='text'
                                    className='form-control my-3'
                                    placeholder='Email'
                                    required
                                />
                                
                            </form>

                        </div>
                        <div className='modal-footer'>
                                <button
                                    type='submit'
                                    className='btn btn-warning'
                                    data-bs-dismiss="modal"
                                >Submit</button>
                                <button
                                    type='submit'
                                    className='btn btn-warning'
                                    data-bs-dismiss="modal"
                                >Close</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header

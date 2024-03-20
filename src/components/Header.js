import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <div style={{ backgroundColor: "#430A5D", color: "#EEE4B1" }}>
            <nav>
                <div className='container-fluid p-4 '>
                    <div className='row'>
                        <div className='col-12 col-md-8'>
                            <h2 className='navbar-brand fs-1 fw-bolder'>Food Zone</h2>
                        </div>
                        <div className='col-12 col-md-2 my-3 my-md-2'>

                        <Link to="about" className='text-decoration-none fs-4 fw-bold' style={{color: "#EEE4B1"}}>About</Link>
                        </div>

                        <div className='col-12 col-md-2 my-md-2'>
                            <button
                                type='button'
                                className='btn btn-primary fs-5 fw-bold'
                                data-bs-toggle="modal"
                                data-bs-target="#mymodal"
                            >Sign in</button>


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
                                data-bs-dismiss="modal"
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

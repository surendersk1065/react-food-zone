import React from 'react'
import { Link } from 'react-router-dom'
import './index.css'

function Catagories({search, setSearch}) {

    return (
        <div style={{ backgroundColor: "#430A5D" }} className='border rounded sticky-top'>
            <h1 className='my-4 mx-5 text-white'>Catagories</h1>
            <ul className='list-inline d-flex justify-content-around pb-3'>
                <li className='mt-4 my-md-0 text-center '><Link to="food" className='focus-ring  py-1 px-2 text-decoration-none border rounded-2 fs-md-4 fs-md-4'
                    style={{ color: "#EEE4B1" }}
                >All</Link></li>
                <li className='mt-4 my-md-0 text-center'><Link to="breakfast" className='focus-ring py-1 px-2 text-decoration-none border rounded-2  fs-md-4'
                    style={{ color: "#EEE4B1" }}
                >BreakFast</Link></li>
                <li className='mt-4 my-md-0 text-center'><Link to="lunch" className='focus-ring py-1 px-2 text-decoration-none border rounded-2  fs-md-4'
                    style={{ color: "#EEE4B1" }}
                >Lunch</Link></li>
                <li className='mt-4 my-md-0 text-center'><Link to="dinner" className='focus-ring py-1 px-2 text-decoration-none border rounded-2  fs-md-4'
                    style={{ color: "#EEE4B1" }}
                >Dinner</Link></li>
                <li className='mt-4 my-md-0 text-center'><Link to="dessert" className='focus-ring py-1 px-2 text-decoration-none border rounded-2  fs-md-4'
                    style={{ color: "#EEE4B1" }}
                >Dessert</Link></li>
            </ul>
            <div className='ps-3 pb-4 pt-md-3 pb-md-4 text-md-center'>
                <form onSubmit={(e) => e.preventDefault()}>
                    <input
                        type='text'
                        placeholder='Search Food'
                        className='w-50 w-md-50 p-2 rounded'
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}

                    />
                </form>
            </div>

        </div>
    )
}

export default Catagories

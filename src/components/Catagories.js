import React from 'react'
import { Link } from 'react-router-dom'
import './index.css'

function Catagories({search, setSearch, handleSubmit}) {

    return (
        <div style={{ backgroundColor: "#430A5D" }} className=' rounded sticky-top'>
            <ul className='list-inline d-flex justify-content-around py-3'>
                <li className='mt-3 mt-md-4 my-md-0 text-center '><Link to="/" className='focus-ring  py-1 px-2 text-decoration-none border rounded-2 fs-md-4 fs-md-4'
                    style={{ color: "#EEE4B1" }}
                >All</Link></li>
                <li className='mt-3 mt-md-4 my-md-0 text-center'><Link to="breakfast" className='focus-ring py-1 px-2 text-decoration-none border rounded-2  fs-md-4'
                    style={{ color: "#EEE4B1" }}
                >BreakFast</Link></li>
                <li className='mt-3 mt-md-4 my-md-0 text-center'><Link to="lunch" className='focus-ring py-1 px-2 text-decoration-none border rounded-2  fs-md-4'
                    style={{ color: "#EEE4B1" }}
                >Lunch</Link></li>
                <li className='mt-3 mt-md-4 my-md-0 text-center'><Link to="dinner" className='focus-ring py-1 px-2 text-decoration-none border rounded-2  fs-md-4'
                    style={{ color: "#EEE4B1" }}
                >Dinner</Link></li>
                <li className='mt-3 mt-md-4 my-md-0 text-center'><Link to="dessert" className='focus-ring py-1 px-2 text-decoration-none border rounded-2  fs-md-4'
                    style={{ color: "#EEE4B1" }}
                >Dessert</Link></li>
                
            </ul>
            <div className='ps-3 pb-4 pt-md-2 pb-md-4 text-md-center'>
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

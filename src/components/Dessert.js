import React from 'react'
import { Link } from 'react-router-dom'

function Dessert({item}) {
  return (
      <main>
        {
          (item.length) ?
          (
            <div className='container'>
            <div className='row'>
              {item.map((val) => (
                  <div className='col-12 col-md-4 mx-4 mx-md-2 my-4 p-5 border rounded' key={val.id}
                  style={{backgroundColor :"#430A5D",width :"300px"}}
                  >
                      <Link to = {`/dessert/${val.id}`} className='text-decoration-none fs-3'>
                      <img src={ val.image } className='image-fluid rounded-circle'
                        style={{width : "150px",height : "150px"}}
                      alt=''/>
                      <p
                        style={{ color : "#EEE4B1"}}
                        className='mt-3'
                      >{val.name}</p>
                      <button className='btn btn-primary'>{val.price}.Rs</button>
                      </Link>
                  </div>
              ))}
            </div>
          </div>
          )
          :
          <p className='text-center fs-3 my-4'>No matching item</p>
        }

    </main>
  
  )
}

export default Dessert

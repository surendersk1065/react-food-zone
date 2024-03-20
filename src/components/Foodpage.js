import React from 'react'
import { useParams } from 'react-router-dom'
import { useState } from 'react'

function Foodpage({item}) {
    const { id } = useParams()
    const fooditem = item.find((val) => (val.id).toString() === id)
    const [count, setcount] = useState(0)
    const [price, setPrice] = useState(0)
    
    function decrement (val)  {
      if(count <0 || count === 0) {
        setcount(count)
      }
      else{
        setcount(count - 1) 
      }
      
      if(count < 0 || count === 0) {
        setPrice(price)
      }
      else{
      setPrice(price - val)
      } 

      
    }
    function increment (val) {
      if(count >5 || count === 5) {
        setcount(count)
      }
      else{
        setcount(count + 1) 
      }
      
      if(count > 5 || count === 5) {
        setPrice(price)
      }
      else{
      setPrice(price + val)
      } 

    }
    
    
  return (
    <div>
      <div className='mx-4'>
        {
           fooditem && 
            <div className='container my-4 text-black p-4 rounded' style={{backgroundColor : "#FFC700"}}>
                <h2 className='text-danger fw-bold'>{fooditem.name}</h2>
                <p>{fooditem.desc}</p>
                <p>{fooditem.hotel}</p>
                <p>{fooditem.location}</p>
                <button onClick={() => decrement(fooditem.price)} className='btn btn-primary me-2 mb-1'>-</button><span>{count}</span> <button onClick={() => increment(fooditem.price)} className='btn btn-primary ms-2 mb-1'>+</button>
                <p>Bill to Pay : {price}.Rs</p>
                <button className='btn btn-primary'>Place Order</button>
            </div>
        }
        {
            !fooditem &&
            <div>
                <h2>Page not Found</h2>
                <p>Click All to view menu</p>
            </div>
        }
      </div>
    </div>
  )
}

export default Foodpage


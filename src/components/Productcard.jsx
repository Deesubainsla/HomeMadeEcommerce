import React from 'react'
import { Link } from 'react-router-dom'

function Productcard({product}) {
    return <div>
        {/* <div className="card bg-base-100 w-96 shadow-sm w-[200px] h-[400px]"> */}
        <div className="rounded-lg  card bg-base-100 w-75 mx-auto  transition duration-300 ease-in-out   hover:shadow-2xl  shadow-lg">
            <figure className=' mt-4'>
                <img
                    className='object-fit-contain w-[200px] h-[200px]'
                    src={product.img[0]}
                    alt="Shoes" />
            </figure>
            <div className="card-body">
                <h2 className="card-title line-clamp-1">
                   {product.title}
                  
                </h2>
                <p className='line-clamp-2'>{product.description}...</p>
                <div className="card-actions justify-end">
                    <div className="badge badge-secondary font-bold">Rs.{product.price}</div>
                    <Link to={`/product/${product.id}`} className="badge badge-outline cursor-pointer">View Details</Link>
                    
                </div>
            </div>
        </div>
    </div>
}

export default Productcard
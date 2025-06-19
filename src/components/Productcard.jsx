import React from 'react'

function Productcard({product}) {
    return <div>
        {/* <div className="card bg-base-100 w-96 shadow-sm w-[200px] h-[400px]"> */}
        <div className="rounded-lg  card bg-base-100 w-75 mx-auto  transition duration-300 ease-in-out   hover:shadow-2xl  shadow-lg">
            <figure>
                <img
                    className='object-fit-contain w-[200px] h-[200px]'
                    src={product.img}
                    alt="Shoes" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">
                   {product.title}
                    <div className="badge badge-secondary">NEW</div>
                </h2>
                <p className='line-clamp-2'>{product.description}...</p>
                <div className="card-actions justify-end">
                    <div className="badge badge-outline">Fashion</div>
                    <div className="badge badge-outline">Products</div>
                </div>
            </div>
        </div>
    </div>
}

export default Productcard
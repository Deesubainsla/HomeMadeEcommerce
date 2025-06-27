import React from 'react'
import data from '../data/data.json'
import Productcard from './Productcard'

function Products() {
    return <div className=' bg-white mt-2 text-center'>

        <div className="mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-2">Our Products</h2>
            <div className="w-24 h-1 mx-auto bg-violet-600 mb-4 rounded-full"></div>
            <p className="text-gray-600 w-[80%] mx-auto">
                Explore our range of handcrafted products made with love and natural ingredients. Every item is carefully made to ensure purity, wellness, and authenticity in your daily routine.
            </p>
        </div>

        <div className="grid grid-flow-row grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-y-10">
            {data.map(((product,index)=>(
                <div key={index}>
                    <Productcard product={product}/>
                </div>
            )))}
        </div>

    </div>
}

export default Products
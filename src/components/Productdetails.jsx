import React from 'react'
import { useParams } from 'react-router-dom'
import data from '../data/data.json'

function Productdetails() {
    const { id } = useParams();
    const product = data.find(p => p.id === parseInt(id));

    if (!product) {
        return <div className="text-center py-10 text-red-500 font-bold">Product not found</div>;
    }


    return <div className='text-center w-full min-h-[90vh] mt-12'>
        <h2 className="text-4xl font-bold text-gray-800 my-2">{product.title}</h2>
        <div className="w-24 h-1 mx-auto bg-violet-600 mb-4 rounded-full"></div>

        {/* image slider */}

        <div className="carousel w-[60%] mt-6">
            {product.img.map((imge, i) => (
                <div key={i} id={`item${i}`} className="carousel-item w-full h-[300px]">
                    <img
                        src={imge}
                        className="w-full object-contain h-[300px]"
                        alt='slider img' />
                </div>
            ))}
            
        </div>
        <div className="flex w-full mb-8 justify-center gap-2 py-2">
            {product.img.map((im,i)=>(
                <a key={i} href={`#item${i}`} className="btn btn-xs">{i+1}</a>
            ))}
            
        </div>
        {/* image slider */}

        <span className='text-xl font-bold border border-gray-100 shadow-lg rounded p-2'>Rs.{product.price}</span>
        <p className="text-gray-600 w-[80%] mx-auto my-8">
            {product.description.split('\n').map((para, index)=>(
                <span key={index}>{para}<br/></span>
            ))}
        </p>

    </div>
}

export default Productdetails
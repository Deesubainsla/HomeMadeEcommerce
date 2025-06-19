import React from 'react'
import { Link } from 'react-scroll'

function Home() {
    return <div className='h-[90vh]  '>
        <section className="w-full bg-white py-8 px-4 md:px-12 flex flex-col md:flex-row items-center justify-between h-full">
            {/* Text Content */}
            <div className="md:w-1/2 w-full text-left space-y-4">
                <div className="inline-flex items-center px-3 py-1 bg-white border border-gray-300 rounded-full shadow-sm">
                    <span className="text-sm text-gray-600 font-medium">🌿 Naturally Handmade</span>
                </div>
                <h1 className="text-3xl md:text-4xl font-extrabold text-gray-800 leading-tight">
                    Pure, Handcrafted Products for a Healthier You
                </h1>
                <p className="text-gray-600 text-base">
                    Discover our homemade wellness range made with natural ingredients. Skin-safe, eco-friendly, and made with love.
                </p>
                <Link to='products' smooth={true} duration={500}>
                    <button className="bg-purple-600 hover:bg-purple-700 text-white font-semibold px-5 py-2.5 rounded-lg transition duration-300">
                    Explore Now
                    </button>
                </Link>
                
            </div>

            {/* Image Section */}
            <div className="md:w-1/2 w-full h-[350px] md:h-full mb-6 md:mb-0">
                <img
                    src="/homemadeicon.avif"
                    alt="Homemade Product Showcase"
                    className="w-full h-full object-contain rounded-lg"
                />
            </div>
        </section>


    </div>
}

export default Home
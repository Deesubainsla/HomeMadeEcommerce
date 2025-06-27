import React from 'react'
import { FaMapMarkerAlt, FaPhoneAlt, FaClock } from 'react-icons/fa';

function Contact() {
    return <div className='bg-violet-200 h-400px'>
        <section className="w-full px-4 md:px-20 py-16 bg-white text-center">
            {/* Heading */}
            <div className="mb-12">
                <h2 className="text-4xl font-bold text-gray-800 mb-2">Contact</h2>
                <div className="w-24 h-1 mx-auto bg-violet-600 mb-4 rounded-full"></div>
                <p className="text-gray-600">
                    Have a question, custom request, or just want to say hello? We’d love to hear from you!
                    Whether you're curious about our handmade products or need support with an order, feel free
                    to reach out — we’re here to help and connect.
                </p>
            </div>

            {/* Info Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Address */}
                <div className="bg-gray-50 rounded-xl p-8 shadow-sm hover:shadow-md transition">
                    <div className="flex justify-center mb-4">
                        <div className="w-14 h-14 bg-violet-100 rounded-full flex items-center justify-center text-violet-600 text-xl">
                            <FaMapMarkerAlt />
                        </div>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">Our Address</h3>
                    <p className="text-gray-600">
                        Sec-3, Ballabhgarh,<br />Haryana, India
                    </p>
                </div>

                {/* Contact */}
                <div className="bg-gray-50 rounded-xl p-8 shadow-sm hover:shadow-md transition">
                    <div className="flex justify-center mb-4">
                        <div className="w-14 h-14 bg-violet-100 rounded-full flex items-center justify-center text-violet-600 text-xl">
                            <FaPhoneAlt />
                        </div>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">Contact Number</h3>
                    <p className="text-gray-600">Mobile: 7678113074</p>
                    <p className="text-gray-600">Email: No Professional Email yet</p>
                </div>

                {/* Opening Hours */}
                <div className="bg-gray-50 rounded-xl p-8 shadow-sm hover:shadow-md transition">
                    <div className="flex justify-center mb-4">
                        <div className="w-14 h-14 bg-violet-100 rounded-full flex items-center justify-center text-violet-600 text-xl">
                            <FaClock />
                        </div>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">Opening Hour</h3>
                    <p className="text-gray-600">Monday - Saturday: 9:00 - 18:00</p>
                    <p className="text-gray-600">Sunday: Closed</p>
                </div>
            </div>
        </section>
    </div>
}

export default Contact
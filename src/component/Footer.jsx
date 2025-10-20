
export default function Footer() {
    return (
        <div className="bg-gray-800 text-gray-200 mt-20 pt-16 animate-fadeIn">
            <div className="w-full bg-gray-900 text-gray-300 pt-12 pb-12 mt-12 md:mt-16 animate-fadeIn">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div className="lg:col-span-1 md:col-span-1">
                            <h5 className="text-white text-xl font-semibold mb-4">Address</h5>
                            <p className="mb-3 flex items-center"><i className="fa fa-map-marker-alt mr-3 text-blue-400"></i>123 Street, New York, USA</p>
                            <p className="mb-3 flex items-center"><i className="fa fa-phone-alt mr-3 text-blue-400"></i>+012 345 67890</p>
                            <p className="mb-3 flex items-center"><i className="fa fa-envelope mr-3 text-blue-400"></i>info@example.com</p>

                            <div className="flex pt-2 space-x-2">
                                <a className="w-10 h-10 flex items-center justify-center border border-gray-400 text-white rounded-full hover:bg-gray-700 transition" href=""><i className="fab fa-twitter"></i></a>
                                <a className="w-10 h-10 flex items-center justify-center border border-gray-400 text-white rounded-full hover:bg-gray-700 transition" href=""><i className="fab fa-facebook-f"></i></a>
                                <a className="w-10 h-10 flex items-center justify-center border border-gray-400 text-white rounded-full hover:bg-gray-700 transition" href=""><i className="fab fa-youtube"></i></a>
                                <a className="w-10 h-10 flex items-center justify-center border border-gray-400 text-white rounded-full hover:bg-gray-700 transition" href=""><i className="fab fa-linkedin-in"></i></a>
                            </div>
                        </div>

                        <div className="lg:col-span-1 md:col-span-1">
                            <h5 className="text-white text-xl font-semibold mb-4">Services</h5>
                            <a className="block text-gray-300 hover:text-white transition duration-200 mb-2" href="">Cardiology</a>
                            <a className="block text-gray-300 hover:text-white transition duration-200 mb-2" href="">Pulmonary</a>
                            <a className="block text-gray-300 hover:text-white transition duration-200 mb-2" href="">Neurology</a>
                            <a className="block text-gray-300 hover:text-white transition duration-200 mb-2" href="">Orthopedics</a>
                            <a className="block text-gray-300 hover:text-white transition duration-200 mb-2" href="">Laboratory</a>
                        </div>

                        <div className="lg:col-span-1 md:col-span-1">
                            <h5 className="text-white text-xl font-semibold mb-4">Quick Links</h5>
                            <a className="block text-gray-300 hover:text-white transition duration-200 mb-2" href="">About Us</a>
                            <a className="block text-gray-300 hover:text-white transition duration-200 mb-2" href="">Contact Us</a>
                            <a className="block text-gray-300 hover:text-white transition duration-200 mb-2" href="">Our Services</a>
                            <a className="block text-gray-300 hover:text-white transition duration-200 mb-2" href="">Terms & Condition</a>
                            <a className="block text-gray-300 hover:text-white transition duration-200 mb-2" href="">Support</a>
                        </div>
                        <div className="lg:col-span-1 md:col-span-1">
                            <h5 className="text-white text-xl font-semibold mb-4">Newsletter</h5>
                            <p className="text-gray-400 mb-4">Dolor amet sit justo amet elitr clita ipsum elitr est.</p>
                            <div className="relative max-w-sm mx-auto">
                                <input className="w-full py-3 pl-4 pr-16 border-0 rounded-lg text-gray-800 focus:ring-0 focus:outline-none" type="text" placeholder="Your email"/>
                                    <button type="button" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 absolute top-2 right-2 rounded-lg transition duration-200">SignUp</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-gray-700 pt-6 mt-6">
                    <div className="text-center text-sm">
                        <div className="md:flex md:justify-between items-center">
                            <div className="text-center md:text-left mb-3 md:mb-0">
                                &copy; <a className="border-b border-gray-500 hover:border-blue-400" href="#">Your Site Name</a>, All Right Reserved.
                            </div>
                            <div className="text-center md:text-right">
                                Designed By <a className="border-b border-gray-500 hover:border-blue-400" href="https://htmlcodex.com">HTML Codex</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
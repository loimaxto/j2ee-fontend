export default function Header() {
    return (
        <div className="w-full bg-gray-100 p-0 animate-fadeIn" data-wow-delay="0.1s">
            <div className="flex flex-row flex-wrap -mx-0 lg:flex">
                <div className="w-full lg:w-7/12 px-5 text-left">
                    <div className="h-full inline-flex items-center py-3 mr-4">
                        <small className="fa fa-map-marker-alt text-indigo-600 mr-2"></small>
                        <small>123 Street, New York, USA</small>
                    </div>
                    <div className="h-full inline-flex items-center py-3">
                        <small className="far fa-clock text-indigo-600 mr-2"></small>
                        <small>Mon - Fri : 09.00 AM - 09.00 PM</small>
                    </div>
                </div>

                <div className="w-full lg:w-5/12 px-5 text-right">
                    <div className="h-full inline-flex items-center py-3 mr-4">
                        <small className="fa fa-phone-alt text-indigo-600 mr-2"></small>
                        <small>+012 345 6789</small>
                    </div>
                    <div className="h-full inline-flex items-center">
                        <a className="w-8 h-8 rounded-full bg-white text-indigo-600 mr-1 flex items-center justify-center" href=""><i className="fab fa-facebook-f"></i></a>
                        <a className="w-8 h-8 rounded-full bg-white text-indigo-600 mr-1 flex items-center justify-center" href=""><i className="fab fa-twitter"></i></a>
                        <a className="w-8 h-8 rounded-full bg-white text-indigo-600 mr-1 flex items-center justify-center" href=""><i className="fab fa-linkedin-in"></i></a>
                        <a className="w-8 h-8 rounded-full bg-white text-indigo-600 mr-0 flex items-center justify-center" href=""><i className="fab fa-instagram"></i></a>
                    </div>
                </div>
            </div>
        </div>
    )
}
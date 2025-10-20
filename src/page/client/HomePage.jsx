export default function HomePage() {

    return (
        <>
            <h1 className="text-3xl text-blue-600">Home page</h1>
            <div className="max-w-screen-2xl mx-auto py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-wrap -mx-2">

                        {/* Left Column (col-lg-6) */}
                        <div className="w-full lg:w-1/2 px-2">
                            <div className="flex flex-col">
                                <img
                                    className="max-w-full h-auto rounded w-3/4 self-end"
                                    src="img/about-1.jpg"
                                    alt=""
                                />
                                <img
                                    className="max-w-full h-auto rounded w-1/2 bg-white pt-3 pr-3 -mt-[25%]"
                                    src="img/about-2.jpg"
                                    alt=""
                                />
                            </div>
                        </div>

                        {/* Right Column (col-lg-6) */}
                        <div className="w-full lg:w-1/2 px-2">
                            <p className="inline-block border rounded-full py-1 px-4">About Us</p>
                            <h1 className="mb-4 text-3xl font-bold">Why You Should Trust Us? Get Know About Us!</h1>
                            <p>Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet</p>
                            <p className="mb-4">Stet no et lorem dolor et diam, amet duo ut dolore vero eos. No stet est diam rebum amet diam ipsum. Clita clita labore, dolor duo nonumy clita sit at, sed sit sanctus dolor eos.</p>
                            <p><i className="far fa-check-circle text-blue-600 mr-3"></i>Quality health care</p>
                            <p><i className="far fa-check-circle text-blue-600 mr-3"></i>Only Qualified Doctors</p>
                            <p><i className="far fa-check-circle text-blue-600 mr-3"></i>Medical Research Professionals</p>
                            <a
                                className="bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-full py-3 px-5 mt-3 inline-block transition duration-150"
                                href=""
                            >
                                Read More
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
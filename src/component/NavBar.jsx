import { Link, NavLink } from "react-router";

export default function NavBar() {
    return (
        <nav className="bg-white lg:flex lg:flex-row lg:justify-between items-center fixed top-0 w-full z-50 p-0 shadow-md">
            <Link to="/" className="flex items-center px-4 lg:px-5 py-4">
                <h1 className="m-0 text-3xl font-bold text-blue-600">
                    <i className="far fa-hospital mr-3"></i>Klinik
                </h1>
            </Link>
            <div className="hidden lg:flex w-full lg:w-auto" id="navbarCollapse">
                <div className="flex flex-col lg:flex-row lg:ml-auto p-4 lg:p-0">
                    <NavLink to="/" className={({ isActive }) => `block py-2 px-4 lg:py-5 lg:px-4  hover:text-blue-600 transition duration-150
                        ${isActive ? "font-bold text-blue-600 " : "text-gray-700"}`}
                    >Home</NavLink>

                    <NavLink to="about" className={({ isActive }) => `block py-2 px-4 lg:py-5 lg:px-4 hover:text-blue-600 transition duration-150
                        ${isActive ? "font-bold text-blue-600" : "text-gray-700"}`}
                    >About</NavLink>
                    <NavLink to="sample-user-list" className="block py-2 px-4 lg:py-5 lg:px-4  hover:text-blue-600 transition duration-150">Sameple user list</NavLink>
                </div>
                <Link className="bg-blue-600 hover:bg-blue-700 text-white py-4 px-6 lg:px-5 rounded-none hidden lg:flex items-center transition duration-150">
                    Appointment
                </Link>
            </div>
        </nav>
    )
}
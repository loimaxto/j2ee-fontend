import { Outlet } from "react-router"
import Footer from "../../component/Footer"
import Header from "../../component/Header"
import NavBar from "../../component/NavBar"
export default function ClientLayout() {
    
    return (
        <>
        <Header></Header>
        <NavBar></NavBar>
            <div className="mt-6">
        <Outlet></Outlet>

        </div>

        <Footer></Footer>
</>
    )
}
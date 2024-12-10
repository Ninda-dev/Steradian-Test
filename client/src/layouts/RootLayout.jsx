import { Link, Outlet, useNavigate } from "react-router-dom";


export default function RootLayout() {
    const navigate = useNavigate();

    const handleLogout = async () => {
        try {
            // localStorage.removeItem("access_token");
            navigate("/login");

        } catch (error) {
            console.log(error);
        }
    }

    return (
        <>
            <div className="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center justify-center">
                    {/* Page content here */}
                    <Outlet />
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
                        {/* Sidebar content here */}
                        <li>
                            <Link to={"/"}>
                                <span className="ml-2 text-xl font-bold">STERADIAN DATA OPTIMA</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/cms">
                                <i className="fas fa-box-open"></i>
                                <span className="mx-4 font-medium">Rental</span>
                            </Link>
                        </li>
                        <li>
                        <Link to="/input">
                                <i className="fas fa-box-open"></i>
                                <span className="mx-4 font-medium">Input Cars</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/cms">
                                <i className="fas fa-box-open"></i>
                                <span className="mx-4 font-medium">CMS</span>
                            </Link>
                        </li>
                        <li>
                            <Link to={"/login"} onClick={handleLogout}
                            >
                                <i className="fas fa-sign-out-alt"></i>
                                <span className="mx-4 font-medium">Logout</span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}
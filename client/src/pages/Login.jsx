import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";
import { instanceAxios } from "../axiosClient";
import Swal from "sweetalert2";

export default function Login() {
    const [email, setEmail] = useState("admin@mail.com");
    const [username, setUsername] = useState("admin");
    const [password, setPassword] = useState("admin");
    const navigate = useNavigate()

    const handleLogin = async (e) => {
        try {
            e.preventDefault();

            // let response = await instanceAxios.post(
            //     "/login",
            //     {
            //         username,
            //         password,
            //     }
            // );

            // console.log(response, "----------");

            // localStorage.setItem("access_token", response.data.access_token);
            // console.log("masuk nih #############");

            navigate('/');
        } catch (error) {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: error.response.data.message,
            });
        }
    };

    useEffect(() => {
        google.accounts.id.initialize({
            // fill this with your own client ID
            client_id: import.meta.env.VITE_GOOGLE_CLIENT_ID,
            // callback function to handle the response
            callback: async (response) => {
                console.log("Encoded JWT ID token: " + response.credential)
                const { data } = await instanceAxios.post('/auth/google', {
                    googleToken: response.credential,
                });

                localStorage.setItem('access_token', data.access_token);

                // navigate to the home page or do magic stuff
                navigate('/')
            }
        });
        google.accounts.id.renderButton(
            // HTML element ID where the button will be rendered
            // this should be existed in the DOM
            document.getElementById('buttonDiv'),
            // customization attributes
            { theme: 'outline', size: 'large' },
        );
        // to display the One Tap dialog, or comment to remove the dialog

        google.accounts.id.prompt();
    }, []);

    return (
        <>
            <div className="ml-60 mt-10 mr-60">
                <h1 className="text-3xl font-bold mb-4">Login</h1>
                <p className="mb-8">Log in to Steradian</p>
                <div className="flex">
                    <div className="w-1/2 ">
                        <img
                            alt="Steradian"
                            className="rounded-lg shadow-md mt-1"
                            height={140}
                            src="data:image/png;base64,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"
                            width={430}
                        />

                    </div>
                    <div className="w-1/2 pl-5">
                        <form onSubmit={handleLogin}>

                            <div className="w-full py-2 dropdown dropdown-right dropdown-end">
                                <div tabIndex={0} role="button" className="btn m-1">Select Your Role</div>
                                <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                                    <li><a>HRD Manager</a></li>
                                    <li><a>Staff Rekrutmen</a></li>
                                    <li><a>Administrator</a></li>
                                </ul>
                            </div>

                            <div className="mb-4">
                                <label className="block text-gray-700">Username</label>
                                <input
                                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-600"
                                    placeholder="Enter username ..."
                                    type="text"
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700">Password</label>
                                <input
                                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-600"
                                    placeholder="Enter your password ..."
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </div>
                            <button type="submit" className="w-full text-black mt-6 bg-[#89A8B2] text-1xl py-2 rounded-lg hover:bg-gray-700 hover:text-white">
                                Log In
                            </button>
                        </form>



                        <button
                            id="buttonDiv"
                            type="button"
                            className=" mt-5 w-full py-2 rounded-lg shadow-lg hover:bg-brown-600 flex items-center justify-center"
                        >
                            <img
                                src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png"
                                alt="Google Logo"
                                className="w-5 h-5 mr-2"
                            />
                            Sign in with Google
                        </button>

                        {/* <div id="buttonDiv"></div> */}

                        <p className="text-sm font-light text-brown-400">
                            No Account?{" "}
                            <a
                                href="/register"
                                className="font-medium text-[977458ff] hover:text-[#ffffff]"
                            >
                                Register here
                            </a>
                        </p>

                    </div>
                </div>
            </div>
        </>
    )
}
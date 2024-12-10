import { useEffect, useState } from "react";
import { instanceAxios } from "../axiosClient";
import Swal from 'sweetalert2';
import Edit from "./Edit";
import { useNavigate } from 'react-router-dom';

export default function Cms() {
    const [product, setProduct] = useState([])
    const fetchProduct = async () => {
        try {
            const { data } = await instanceAxios.get('/cars');
            // console.log(data, "------fetchhhhh");

            setProduct(data);
        } catch (error) {
            Swal.fire({
                title: "Error!",
                text: "Failed to show product",
                icon: "error",
            });
        }
    }

    const navigate = useNavigate();

    const handleEdit = async (id) => {
        try {
            const { data } = await instanceAxios.get(`/cars/${id}`);
            console.log(data, "------data edit");
            navigate('/edit', { state: { product: data } });
        } catch (error) {
            Swal.fire({
                title: "Error!",
                text: "Failed to fetch product data",
                icon: "error",
            });
        }
    };

    const handleDelete = async (id) => {
        try {
            await instanceAxios.delete(`/cars/${id}`, {
                // headers: {
                //     Authorization: `Bearer ${localStorage.getItem("access_token")}`
                // }
            });
            fetchProduct();
            Swal.fire({
                title: "Success!",
                text: "Deleted product successfully",
                icon: "success",
            });
        } catch (error) {
            Swal.fire({
                title: "Error!",
                text: `Failed to delete product ${error}`,
                icon: "error",
            });
        }
    }

    useEffect(() => {
        fetchProduct();
    }, []);

    return (
        <>
            <div>
                <h1 className="text-center text-2xl font-bold">Rental List</h1>
            </div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Month Rate</th>
                            <th>Day Rate</th>
                            <th>Image</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {product.map((product, idx) => {
                            return (
                                <tr key={product.id}>
                                    <th>{idx + 1}</th>
                                    <th>{product.id}</th>
                                    <th>{product.name}</th>
                                    <th>{product.month_rate}</th>
                                    <th>{product.day_rate}</th>
                                    <td>
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-24">
                                                <img src={product.image} />
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <input type="submit" onClick={() =>
                                            <Edit key={handleEdit(product.id)} />
                                        } value="Edit" className="btn" />
                                        <input type="submit" onClick={() =>
                                            handleDelete(product.id)
                                        } value="Delete" className="btn ml-5" />
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </>
    )
}
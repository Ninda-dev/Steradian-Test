import { useLocation, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { instanceAxios } from '../axiosClient';
import Swal from 'sweetalert2';

export default function Edit() {
    const location = useLocation();
    const navigate = useNavigate();
    const { product } = location.state || {}; // destructuring untuk mengambil state

    const [form, setForm] = useState({
        name: product?.name || '',
        image: product?.image || '',
        day_rate: product?.day_rate || '',
        month_rate: product?.month_rate || ''
    });

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await instanceAxios.put(`/cars/${product.id}`, form);
            Swal.fire({
                title: "Success!",
                text: "Edit car successfully",
                icon: "success",
            });
            navigate('/');
        } catch (error) {
            Swal.fire({
                title: "Error!",
                text: `Failed to update car: ${error.message}`,
                icon: "error",
            });
        }
    };

    return (
        <div className="max-w-md mx-auto mt-10 p-6 bg-gray-300 rounded-lg shadow-md">
            <h1 className="text-2xl font-bold mb-6">Edit Cars</h1>
            {product ? (
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Name</label>
                        <input
                            type="text"
                            name="name"
                            value={form.name}
                            onChange={handleChange}
                            placeholder="Name"
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Image URL</label>
                        <input
                            type="text"
                            name="image"
                            value={form.image}
                            onChange={handleChange}
                            placeholder="Image URL"
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Day Rate</label>
                        <input
                            type="number"
                            name="day_rate"
                            value={form.day_rate}
                            onChange={handleChange}
                            placeholder="Day Rate"
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Month Rate</label>
                        <input
                            type="number"
                            name="month_rate"
                            value={form.month_rate}
                            onChange={handleChange}
                            placeholder="Month Rate"
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-gray-600 text-white py-2 px-4 rounded-md shadow-sm hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                    >
                        Update Product
                    </button>
                </form>
            ) : (
                <p>No car data available</p>
            )}
        </div>
    );
}
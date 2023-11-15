"use client"

import { useAddProjectMutation } from '@/app/redux/dataslice';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

const page = () => {

    const router = useRouter()

    const [addProject, { isError, isLoading, error }] = useAddProjectMutation() || {};

    const [formData, setFormData] = useState({
        mname: '',
        movied: '',
        moviei: '',
        moviet: '',
        dl1: '',
        dl2: '',
    });

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        addProject(formData);
        router.push('/', { scroll: false })
        // Here you can perform your logic to save formData into the database
        console.log('Form data to be saved:', formData);
        // For simplicity, logging the form data, you can replace this with your database saving logic.
    };

    return (
        <div className="max-w-md mx-auto mt-8 p-6 bg-gray-100 rounded-md shadow-md">
            <form className="space-y-4" onSubmit={handleSubmit}>



                <div>
                    <label htmlFor="movieName" className="block font-medium text-gray-700">Movie Name:</label>
                    <input
                        type="text"
                        id="movieName"
                        name="mname"
                        value={formData.mname}
                        onChange={handleInputChange}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                        placeholder="Enter movie name"
                    />
                </div>

                <div>
                    <label htmlFor="movieName" className="block font-medium text-gray-700">Movie Description:</label>
                    <input
                        type="text"
                        id="movied"
                        name="movied"
                        value={formData.movied}
                        onChange={handleInputChange}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                        placeholder="Enter movie Description"
                    />
                </div>

                <div>
                    <label htmlFor="movieName" className="block font-medium text-gray-700">Movie Image Link:</label>
                    <input
                        type="text"
                        id="movieimage"
                        name="moviei"
                        value={formData.moviei}
                        onChange={handleInputChange}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                        placeholder="Enter Image Link"
                    />
                </div>



                <div>
                    <label htmlFor="movieName" className="block font-medium text-gray-700">Movie Trailer Code:</label>
                    <input
                        type="text"
                        id="moviet"
                        name="moviet"
                        value={formData.moviet}
                        onChange={handleInputChange}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                        placeholder="Movie Trailer code"
                    />
                </div>

                <div>
                    <label htmlFor="movieName" className="block font-medium text-gray-700">Download Server 1:</label>
                    <input
                        type="text"
                        id="dl1"
                        name="dl1"
                        value={formData.dl1}
                        onChange={handleInputChange}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                        placeholder="Download Link 1"
                    />
                </div>

                <div>
                    <label htmlFor="movieName" className="block font-medium text-gray-700">Download Server 2:</label>
                    <input
                        type="text"
                        id="dl2"
                        name="dl2"
                        value={formData.dl2}
                        onChange={handleInputChange}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                        placeholder="Download Link 2"
                    />
                </div>



                {/* Other input fields with similar structure */}



                <div>
                    <button
                        type="submit"
                        className="w-full bg-indigo-500 text-white py-2 px-4 rounded-md hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600"
                    >
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
};

export default page;

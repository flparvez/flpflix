
"use client"

import React, { useState, useEffect } from 'react';

const EditForm = ({ initialFormData }) => {
    const [formData, setFormData] = useState(initialFormData);
    const [isEditing, setIsEditing] = useState(false);

    useEffect(() => {
        setFormData(initialFormData);
    }, [initialFormData]);

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleEditClick = () => {
        setIsEditing(true);
    };

    const handleCancelClick = () => {
        setIsEditing(false);
        setFormData(initialFormData);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you can perform your logic to update formData in the database
        console.log('Updated form data:', formData);
        // For simplicity, logging the form data, you can replace this with your database update logic.
        setIsEditing(false);
    };

    return (
        <div className="max-w-md mx-auto mt-8 p-6 bg-gray-100 rounded-md shadow-md">
            <form className="space-y-4" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="movieName" className="block font-medium text-gray-700">
                        Movie Name:
                    </label>
                    <input
                        type="text"
                        id="movieName"
                        name="movieName"
                        value={"Kgf Chapter 2"}
                        // value={formData.movieName}
                        onChange={handleInputChange}
                        readOnly={!isEditing}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                        placeholder="Enter movie name"
                    />
                </div>
                {/* Other input fields with similar structure */}
                <div className="flex justify-between items-center">
                    {isEditing ? (
                        <>
                            <button
                                type="submit"
                                className="w-full bg-indigo-500 text-white py-2 px-4 rounded-md hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600 mr-2"
                            >
                                Save
                            </button>
                            <button
                                type="button"
                                onClick={handleCancelClick}
                                className="w-full bg-gray-400 text-white py-2 px-4 rounded-md hover:bg-gray-500 focus:outline-none focus:bg-gray-500"
                            >
                                Cancel
                            </button>
                        </>
                    ) : (
                        <button
                            type="button"
                            onClick={handleEditClick}
                            className="w-full bg-indigo-500 text-white py-2 px-4 rounded-md hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600"
                        >
                            Edit
                        </button>
                    )}
                </div>
            </form>
        </div>
    );
};

export default EditForm;

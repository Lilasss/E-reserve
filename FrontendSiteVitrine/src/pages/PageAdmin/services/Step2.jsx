// Step2.js
import React from 'react';

const Step2 = ({ description, setDescription, handleFileChange, filePreview }) => {
    return (
        <div className="space-y-6">
            <div>
                <label>Description</label>
                <textarea
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Ajouter une description"
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-700 transition-all duration-300"
                />
            </div>
            <div>
                <input
                    type="file"
                    onChange={handleFileChange}
                    className="w-[450px] p-2 border text-sm rounded-md focus:outline-none focus:ring-1 focus:ring-gray-700 transition-all duration-300"
                />
                {filePreview && (
                    <img
                        src={filePreview}
                        alt="Preview"
                        className="mt-4 w-[300px] h-auto rounded-md"
                    />
                )}
            </div>
        </div>
    );
};

export default Step2;

import React, { useState } from "react";
import axios from "axios";

const UpdateStatus = () => {
    const [id, setId] = useState("");
    const [status, setStatus] = useState("");

    const handleUpdate = (e) => {
        e.preventDefault();

        if (id <= 0) {
            alert("Book not found. Please enter a valid Book ID.");
            return; // Stop further execution
        }

        axios.put(`http://localhost:5000/books/${id}`, { status })
        .then(() => {
            alert("Book status updated!");
            setId(""); // Clear the Book ID field
            setStatus(""); // Clear the Status field
        })
        .catch(error => console.log(error));
    };

    return (
        <div className="update-status-page">
        <div className="update-status-container">
            <h2>Update Book Status</h2>
            <form onSubmit={handleUpdate}>
                <input type="number" placeholder="Book ID" value={id} onChange={(e) => setId(e.target.value)} required />
                <select value={status} onChange={(e) => setStatus(e.target.value)} required>
                    <option value="">Select Status</option>
                    <option value="borrowed">Borrowed</option>
                    <option value="returned">Returned</option>
                </select>
                <button type="submit">Update</button>
            </form>
        </div>
        </div>
    );
};

export default UpdateStatus;

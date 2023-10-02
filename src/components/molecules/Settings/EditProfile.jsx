import React, { useState } from "react";
import withAuth from "../../hoc/withAuth";
import { Link } from "react-router-dom";
import TransparentButton from "../../atoms/TransparentButton";

const EditProfile = ({ user }) => {

    const { name } = user;
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Profile updated:", { name });
    };

    return (
        <div className="w-1/2 mx-auto mt-4 p-4">
            <h1 className="text-2xl font-bold mb-4">Edit Profile</h1>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label htmlFor="name" className="block text-white">
                        User Info
                    </label>
                    <input
                        type="name"
                        id="name"
                        value={name}
                        onChange={handleEmailChange}
                        className="w-full border rounded-md p-2 text-black"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="password" className="block text-white">
                        Password
                    </label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={handlePasswordChange}
                        className="w-full border rounded-md p-2 text-black"
                        required
                    />
                </div>
                <Link to="/dashboard">
                    <TransparentButton
                        type="submit"
                        className="mt-2"
                    >
                        Save Changes
                    </TransparentButton>
                </Link>
            </form>
        </div>
    );
};

export default withAuth(EditProfile);

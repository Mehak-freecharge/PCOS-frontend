import React, { useState } from "react";
import { Link } from "react-router-dom";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [profileImage, setProfileImage] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    // Implement signup logic here (e.g., call API)
    const formData = new FormData();
    formData.append("username", username);
    formData.append("email", email);
    formData.append("password", password);
    formData.append("profileImage", profileImage);

    try {
      const response = await fetch(
        "http://localhost:5000/api/v1/users/register",
        {
          method: "POST",
          body: formData,
        }
      );
      if (!response.ok) {
        throw new Error("Signup failed");
      }
      response.data && window.location.replace("/login");
    } catch (error) {
      setError("Signup failed. Please try again later.");
    } finally {
      setLoading(false);
    }
    console.log({ username, email, password, profileImage });
    // response.data && window.location.replace("/login");
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Sign up for an account
          </h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <label>Profile Image</label>
          <input
            className="registerInput"
            type="file"
            onChange={(e) => setProfileImage(e.target.files[0])}
          />
          <label>Username</label>
          <input
            className="registerInput"
            type="text"
            placeholder="Enter your username..."
            onChange={(e) => setUsername(e.target.value)}
          />
          {/* <label>Fullname</label>
          <input
            className="registerInput"
            type="text"
            placeholder="Enter your fullname..."
            onChange={(e) => setFullname(e.target.value)}
          /> */}
          <label>Email</label>
          <input
            className="registerInput"
            type="email"
            placeholder="Enter your email..."
            onChange={(e) => setEmail(e.target.value)}
          />
          <label>Password</label>
          <input
            className="registerInput"
            type="password"
            placeholder="Enter your password..."
            onChange={(e) => setPassword(e.target.value)}
          />
          {/* Form fields */}
          {/* Error message */}
          {error && <p className="text-red-500">{error}</p>}
          {/* Sign up button */}
          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              disabled={loading}
            >
              {loading ? "Signing up..." : "Sign up"}
            </button>
          </div>
        </form>
        <button className="registerLoginButton">
          <Link className="link" to="/login">
            LOGIN
          </Link>
        </button>
      </div>
    </div>
  );
};

export default Signup;

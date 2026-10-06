import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./CustomerLogin.css";

function CustomerLogin() {

    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (email === "" || password === "") {
            alert("Please enter email and password");
            return;
        }

        alert("Login Successful!");

        // Navigate to customer home page
        navigate("/home");
    };

    return (
        <div className="login-container">

            {/* Left Side */}
            <div className="login-left">

                <div className="logo">
                    <span>Food</span>Hub
                </div>

                <h1>Welcome Back!</h1>

                <p>
                    Login to discover delicious food
                    from your favorite restaurants.
                </p>

                <div className="food-icons">
                    🍕 🍔 🍜 🍗 🍰
                </div>

            </div>

            {/* Right Side */}
            <div className="login-right">

                <div className="login-card">

                    <h2>Welcome Back</h2>

                    <p className="subtitle">
                        Login to your FoodHub account
                    </p>

                    <form onSubmit={handleLogin}>

                        {/* Email */}
                        <div className="input-group">

                            <label htmlFor="email">
                                Email Address
                            </label>

                            <input
                                type="email"
                                id="email"
                                placeholder="Enter your email"
                                value={email}
                                onChange={(e) =>
                                    setEmail(e.target.value)
                                }
                                required
                            />

                        </div>

                        {/* Password */}
                        <div className="input-group">

                            <label htmlFor="password">
                                Password
                            </label>

                            <input
                                type="password"
                                id="password"
                                placeholder="Enter your password"
                                value={password}
                                onChange={(e) =>
                                    setPassword(e.target.value)
                                }
                                required
                            />

                        </div>

                        {/* Forgot Password */}
                        <div className="forgot-password">
                            <button
                                type="button"
                                onClick={() =>
                                    navigate("/forgotpass")
                                }
                            >
                                Forgot Password?
                            </button>
                        </div>

                        {/* Login Button */}
                        <button
                            type="submit"
                            className="login-btn"
                        >
                            Login
                        </button>

                    </form>

                    {/* Registration */}
                    <div className="divider">
                        <span>Don't have an account?</span>
                    </div>

                    <button
                        type="button"
                        className="register-link"
                        onClick={() =>
                            navigate("/registration")
                        }
                    >
                        Create Account
                    </button>

                </div>

            </div>

        </div>
    );
}

export default CustomerLogin;
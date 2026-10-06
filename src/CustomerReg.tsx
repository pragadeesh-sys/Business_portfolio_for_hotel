import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./CustomerReg.css";

function CustomerReg() {

    const navigate = useNavigate();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const handleRegister = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            alert("Passwords do not match!");
            return;
        }

        alert("Registration Successful!");

        navigate("/login");
    };

    return (
        <div className="register-container">

            <div className="register-left">

                <div className="logo">
                    <span>Food</span>Hub
                </div>

                <h1>Hungry?</h1>

                <p>
                    Create your account and discover delicious
                    food from your favorite restaurants.
                </p>

                <div className="food-icons">
                    🍕 🍔 🍜 🍗 🍰
                </div>

            </div>

            <div className="register-right">

                <div className="register-card">

                    <h2>Create Account</h2>

                    <p className="subtitle">
                        Sign up to order your favorite food
                    </p>

                    <form onSubmit={handleRegister}>

                        <div className="input-group">
                            <label htmlFor="name">
                                Full Name
                            </label>

                            <input
                                type="text"
                                id="name"
                                value={name}
                                onChange={(e) =>
                                    setName(e.target.value)
                                }
                                placeholder="Enter your full name"
                                required
                            />
                        </div>

                        <div className="input-group">
                            <label htmlFor="email">
                                Email Address
                            </label>

                            <input
                                type="email"
                                id="email"
                                value={email}
                                onChange={(e) =>
                                    setEmail(e.target.value)
                                }
                                placeholder="Enter your email"
                                required
                            />
                        </div>

                        <div className="input-group">
                            <label htmlFor="phone">
                                Phone Number
                            </label>

                            <input
                                type="tel"
                                id="phone"
                                value={phone}
                                onChange={(e) =>
                                    setPhone(e.target.value)
                                }
                                placeholder="Enter your phone number"
                                required
                            />
                        </div>

                        <div className="input-group">
                            <label htmlFor="password">
                                Password
                            </label>

                            <input
                                type="password"
                                id="password"
                                value={password}
                                onChange={(e) =>
                                    setPassword(e.target.value)
                                }
                                placeholder="Create a password"
                                required
                            />
                        </div>

                        <div className="input-group">
                            <label htmlFor="confirmPassword">
                                Confirm Password
                            </label>

                            <input
                                type="password"
                                id="confirmPassword"
                                value={confirmPassword}
                                onChange={(e) =>
                                    setConfirmPassword(e.target.value)
                                }
                                placeholder="Confirm your password"
                                required
                            />
                        </div>

                        <div className="terms">

                            <input
                                type="checkbox"
                                id="terms"
                                required
                            />

                            <label htmlFor="terms">
                                I agree to the Terms & Conditions
                            </label>

                        </div>

                        <button
                            type="submit"
                            className="register-btn"
                        >
                            Create Account
                        </button>

                    </form>

                    <div className="divider">
                        <span>
                            Already have an account?
                        </span>
                    </div>

                    <Link
                        to="/login"
                        className="login-link"
                    >
                        Login
                    </Link>

                </div>

            </div>

        </div>
    );
}

export default CustomerReg;
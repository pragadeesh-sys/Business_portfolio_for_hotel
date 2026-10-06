import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./CustomerForgot.css";

function ForgotPassword() {

    const navigate = useNavigate();

    const [otp, setOtp] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const handleResetPassword = (
        e: React.FormEvent<HTMLFormElement>
    ) => {

        e.preventDefault();

        // Clear previous error
        setErrorMessage("");

        // Check OTP
        if (otp.length !== 6 || isNaN(Number(otp))) {
            setErrorMessage(
                "Please enter a valid 6-digit OTP."
            );
            return;
        }

        // Check password length
        if (newPassword.length < 6) {
            setErrorMessage(
                "Password must be at least 6 characters."
            );
            return;
        }

        // Check password match
        if (newPassword !== confirmPassword) {
            setErrorMessage(
                "Passwords do not match."
            );
            return;
        }

        // Success
        alert("Password reset successfully!");

        // Navigate to Customer Login
        navigate("/login");
    };

    return (
        <div className="forgot-page">

            {/* =========================
                LEFT SIDE
            ========================== */}

            <div className="forgot-left">

                <div className="logo">
                    FoodHub
                </div>

                <h1>
                    Reset
                    <br />
                    Password
                </h1>

                <p>
                    Enter the OTP and create a
                    new password to continue
                    enjoying your favorite food.
                </p>

                <div className="food-icons">

                    <span>🍕</span>
                    <span>🍔</span>
                    <span>🍜</span>
                    <span>🍗</span>
                    <span>🍰</span>

                </div>

            </div>


            {/* =========================
                RIGHT SIDE
            ========================== */}

            <div className="forgot-right">

                <div className="forgot-card">

                    {/* ICON */}

                    <div className="lock-icon">
                        🔐
                    </div>


                    {/* TITLE */}

                    <h2>
                        Reset Password
                    </h2>

                    <p className="subtitle">
                        Enter the OTP sent to your registered
                        mobile number and create a new password.
                    </p>


                    {/* FORM */}

                    <form onSubmit={handleResetPassword}>

                        {/* OTP */}

                        <div className="form-group">

                            <label htmlFor="otp">
                                Enter OTP
                            </label>

                            <input
                                type="text"
                                id="otp"
                                name="otp"
                                placeholder="Enter 6-digit OTP"
                                maxLength={6}
                                inputMode="numeric"
                                autoComplete="one-time-code"
                                value={otp}
                                onChange={(e) =>
                                    setOtp(e.target.value)
                                }
                                required
                            />

                        </div>


                        {/* NEW PASSWORD */}

                        <div className="form-group">

                            <label htmlFor="newPassword">
                                New Password
                            </label>

                            <input
                                type="password"
                                id="newPassword"
                                name="newPassword"
                                placeholder="Enter new password"
                                minLength={6}
                                value={newPassword}
                                onChange={(e) =>
                                    setNewPassword(e.target.value)
                                }
                                required
                            />

                        </div>


                        {/* CONFIRM PASSWORD */}

                        <div className="form-group">

                            <label htmlFor="confirmPassword">
                                Confirm New Password
                            </label>

                            <input
                                type="password"
                                id="confirmPassword"
                                name="confirmPassword"
                                placeholder="Confirm new password"
                                minLength={6}
                                value={confirmPassword}
                                onChange={(e) =>
                                    setConfirmPassword(e.target.value)
                                }
                                required
                            />

                        </div>


                        {/* ERROR MESSAGE */}

                        {errorMessage && (
                            <p className="error-message">
                                {errorMessage}
                            </p>
                        )}


                        {/* RESET BUTTON */}

                        <button
                            type="submit"
                            className="reset-button"
                        >
                            Reset Password
                        </button>

                    </form>


                    {/* LOGIN */}

                    <p className="back-login">

                        Remember your password?

                        <button
                            type="button"
                            onClick={() => navigate("/login")}
                        >
                            Login
                        </button>

                    </p>

                </div>

            </div>

        </div>
    );
}

export default ForgotPassword;
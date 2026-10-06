
import "./CustomerIndex.css";

function Landing() {
    return (
        <div className="landing-page">

            {/* NAVBAR */}
            <nav className="navbar">

                <div className="logo">
                    🍴 FoodHub
                </div>

                <div className="nav-links">
                    <a href="#home">Home</a>
                    <a href="#about">About</a>
                    <a href="#menu">Menu</a>

                    <a href="/login">
                        Login
                    </a>

                    <a href="/registration" className="register-btn">
                        Register
                    </a>
                </div>

            </nav>


            {/* HERO SECTION */}
            <section className="hero" id="home">

                <div className="hero-content">

                    <p className="welcome-text">
                        WELCOME TO FOODHUB
                    </p>

                    <h1>
                        Delicious South Indian
                        <span> Food</span>
                    </h1>

                    <p className="description">
                        Fresh, tasty and authentic South Indian dishes
                        delivered straight to your table.
                    </p>

                    <div className="buttons">

                        <a href="/register" className="order-btn">
                            Get Started
                        </a>

                        <a href="#menu" className="menu-btn">
                            View Menu
                        </a>

                    </div>

                </div>


                {/* FOOD DESIGN */}
                <div className="hero-food">

                    <div className="food-circle">
                        🍛
                    </div>

                    <div className="food-item item1">
                        🥞
                    </div>

                    <div className="food-item item2">
                        🍚
                    </div>

                    <div className="food-item item3">
                        🫓
                    </div>

                </div>

            </section>


            {/* FEATURES */}
            <section className="features">

                <div className="feature">
                    <div className="icon">🍴</div>

                    <h3>Fresh Food</h3>

                    <p>
                        Freshly prepared delicious meals.
                    </p>
                </div>


                <div className="feature">
                    <div className="icon">⚡</div>

                    <h3>Quick Service</h3>

                    <p>
                        Fast and easy food ordering.
                    </p>
                </div>


                <div className="feature">
                    <div className="icon">💳</div>

                    <h3>Easy Ordering</h3>

                    <p>
                        Simple and convenient online ordering.
                    </p>
                </div>

            </section>


            {/* MENU */}
            <section className="menu-section" id="menu">

                <h2>Our Popular Dishes</h2>

                <p className="subtitle">
                    Taste the best of South Indian cuisine
                </p>


                <div className="food-cards">

                    <div className="food-card">
                        <div className="food-image">🥞</div>

                        <h3>Dosa</h3>

                        <p>
                            Crispy and delicious dosa
                        </p>

                        <span>₹50</span>
                    </div>


                    <div className="food-card">
                        <div className="food-image">🍚</div>

                        <h3>Idly</h3>

                        <p>
                            Soft and healthy idly
                        </p>

                        <span>₹40</span>
                    </div>


                    <div className="food-card">
                        <div className="food-image">🍛</div>

                        <h3>Pongal</h3>

                        <p>
                            Hot and tasty pongal
                        </p>

                        <span>₹60</span>
                    </div>


                    <div className="food-card">
                        <div className="food-image">🫓</div>

                        <h3>Poori</h3>

                        <p>
                            Soft and fluffy poori
                        </p>

                        <span>₹55</span>
                    </div>

                </div>

            </section>


            {/* ABOUT */}
            <section className="about" id="about">

                <h2>Why Choose FoodHub?</h2>

                <p>
                    FoodHub makes ordering your favourite South Indian
                    dishes simple, fast and convenient.
                </p>

                <p>
                    Register now and explore our delicious menu.
                </p>

                <a href="/register" className="order-btn">
                    Register Now
                </a>

            </section>


            {/* FOOTER */}
            <footer>

                <h3>🍴 FoodHub</h3>

                <p>
                    Delicious food. Easy ordering. Happy customers.
                </p>

                <p className="copyright">
                    © 2026 FoodHub. All Rights Reserved.
                </p>

            </footer>

        </div>
    );
}

export default Landing;
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./CustomerHome.css";

interface FoodItem {
    name: string;
    price: number;
    emoji: string;
    description: string;
}

interface OrderItem extends FoodItem {
    quantity: number;
}

function CustomerHome() {

    const navigate = useNavigate();

    const [orders, setOrders] = useState<OrderItem[]>([]);

    const foodItems: FoodItem[] = [
        {
            name: "Idly",
            price: 40,
            emoji: "🥣",
            description:
                "Soft steamed idly served with sambar and coconut chutney."
        },
        {
            name: "Dosa",
            price: 60,
            emoji: "🥞",
            description:
                "Crispy golden dosa served with sambar and chutney."
        },
        {
            name: "Pongal",
            price: 50,
            emoji: "🍚",
            description:
                "Traditional South Indian ven pongal with chutney."
        },
        {
            name: "Poori",
            price: 55,
            emoji: "🫓",
            description:
                "Fluffy hot poori served with delicious potato masala."
        }
    ];


    // =========================
    // ADD FOOD TO ORDER
    // =========================

    const addToOrder = (food: FoodItem) => {

        setOrders((currentOrders) => {

            const existingItem = currentOrders.find(
                (item) => item.name === food.name
            );

            if (existingItem) {

                return currentOrders.map((item) =>
                    item.name === food.name
                        ? {
                            ...item,
                            quantity: item.quantity + 1
                        }
                        : item
                );
            }

            return [
                ...currentOrders,
                {
                    ...food,
                    quantity: 1
                }
            ];
        });
    };


    // =========================
    // REMOVE ONE ITEM
    // =========================

    const removeFromOrder = (foodName: string) => {

        setOrders((currentOrders) => {

            return currentOrders
                .map((item) =>
                    item.name === foodName
                        ? {
                            ...item,
                            quantity: item.quantity - 1
                        }
                        : item
                )
                .filter((item) => item.quantity > 0);
        });
    };


    // =========================
    // CALCULATE SUBTOTAL
    // =========================

    const subtotal = orders.reduce(
        (total, item) =>
            total + item.price * item.quantity,
        0
    );


    // =========================
    // DELIVERY FEE
    // =========================

    const deliveryFee = subtotal > 0 ? 30 : 0;


    // =========================
    // TOTAL
    // =========================

    const total = subtotal + deliveryFee;


    // =========================
    // PLACE ORDER
    // =========================

    const placeOrder = () => {

        if (orders.length === 0) {
            alert("Please add food to your order first.");
            return;
        }

        alert(
            `Order placed successfully!\nTotal Bill: ₹${total}`
        );

        setOrders([]);
    };


    // =========================
    // LOGOUT
    // =========================

    const handleLogout = () => {

        const confirmLogout = window.confirm(
            "Are you sure you want to logout?"
        );

        if (confirmLogout) {
            navigate("/login");
        }
    };


    // =========================
    // SCROLL TO MENU
    // =========================

    const scrollToMenu = () => {

        document
            .getElementById("menu")
            ?.scrollIntoView({
                behavior: "smooth"
            });
    };


    return (
        <div className="customer-home">

            {/* ================= NAVBAR ================= */}

            <nav className="navbar">

                <div className="logo">
                    <span>●</span> FoodHub
                </div>

                <div className="nav-links">

                    <a href="#home">
                        Home
                    </a>

                    <a href="#menu">
                        View Menu
                    </a>

                    <a href="#orders">
                        My Orders
                    </a>

                    <a href="#bill">
                        Total Bill
                    </a>

                    <button
                        className="logout"
                        onClick={handleLogout}
                    >
                        Logout
                    </button>

                </div>

            </nav>


            {/* ================= HOME ================= */}

            <section
                className="hero"
                id="home"
            >

                <div className="hero-content">

                    <p className="small-title">
                        AUTHENTIC SOUTH INDIAN FOOD
                    </p>

                    <h1>
                        Delicious Food,
                        <br />
                        Delivered Fresh.
                    </h1>

                    <p>
                        Enjoy your favorite South Indian dishes
                        from the comfort of your home.
                    </p>

                    <button
                        className="hero-btn"
                        onClick={scrollToMenu}
                    >
                        View Menu
                    </button>

                </div>


                <div className="hero-food">

                    <div className="food-circle">
                        🍛
                    </div>

                </div>

            </section>


            {/* ================= MENU ================= */}

            <section
                className="menu-section"
                id="menu"
            >

                <div className="section-title">

                    <p>OUR MENU</p>

                    <h2>
                        South Indian Favorites
                    </h2>

                    <span>
                        Freshly prepared and served hot
                    </span>

                </div>


                <div className="food-grid">

                    {foodItems.map((food) => (

                        <div
                            className="food-card"
                            key={food.name}
                        >

                            <div className="food-image">
                                {food.emoji}
                            </div>

                            <div className="food-details">

                                <h3>
                                    {food.name}
                                </h3>

                                <p>
                                    {food.description}
                                </p>

                                <div className="food-bottom">

                                    <strong>
                                        ₹{food.price}
                                    </strong>

                                    <button
                                        onClick={() =>
                                            addToOrder(food)
                                        }
                                    >
                                        Add +
                                    </button>

                                </div>

                            </div>

                        </div>

                    ))}

                </div>

            </section>


            {/* ================= ORDERS ================= */}

            <section
                className="order-section"
                id="orders"
            >

                <div className="section-title">

                    <p>YOUR ORDER</p>

                    <h2>
                        Current Order
                    </h2>

                </div>


                <div className="order-container">

                    {/* ORDER LIST */}

                    <div id="orderList">

                        {orders.length === 0 ? (

                            <div className="empty-order">

                                <div>
                                    🛒
                                </div>

                                <h3>
                                    Your order is empty
                                </h3>

                                <p>
                                    Add delicious food from the menu.
                                </p>

                            </div>

                        ) : (

                            <div className="order-list">

                                {orders.map((item) => (

                                    <div
                                        className="order-item"
                                        key={item.name}
                                    >

                                        <div className="order-item-info">

                                            <span className="order-emoji">
                                                {item.emoji}
                                            </span>

                                            <div>
                                                <h3>
                                                    {item.name}
                                                </h3>

                                                <p>
                                                    ₹{item.price} × {item.quantity}
                                                </p>
                                            </div>

                                        </div>

                                        <div className="order-item-right">

                                            <strong>
                                                ₹{item.price * item.quantity}
                                            </strong>

                                            <button
                                                onClick={() =>
                                                    removeFromOrder(item.name)
                                                }
                                            >
                                                −
                                            </button>

                                            <button
                                                onClick={() =>
                                                    addToOrder(item)
                                                }
                                            >
                                                +
                                            </button>

                                        </div>

                                    </div>

                                ))}

                            </div>

                        )}

                    </div>


                    {/* ================= BILL ================= */}

                    <div
                        className="bill-card"
                        id="bill"
                    >

                        <h3>
                            Order Summary
                        </h3>

                        <div className="bill-row">

                            <span>
                                Subtotal
                            </span>

                            <span>
                                ₹{subtotal}
                            </span>

                        </div>


                        <div className="bill-row">

                            <span>
                                Delivery Fee
                            </span>

                            <span>
                                ₹{deliveryFee}
                            </span>

                        </div>


                        <div className="bill-line"></div>


                        <div className="bill-total">

                            <span>
                                Total Bill
                            </span>

                            <span>
                                ₹{total}
                            </span>

                        </div>


                        <button
                            className="place-order"
                            onClick={placeOrder}
                        >
                            Place Order
                        </button>

                    </div>

                </div>

            </section>


            {/* ================= FOOTER ================= */}

            <footer>

                <div className="footer-logo">
                    <span>●</span> FoodHub
                </div>

                <p>
                    Fresh South Indian food delivered to your door.
                </p>

                <p className="copyright">
                    © 2026 FoodHub. All Rights Reserved.
                </p>

            </footer>

        </div>
    );
}

export default CustomerHome;
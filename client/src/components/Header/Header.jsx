import { Link } from "react-router-dom"

function Header() {
    return (
        <div>
            <nav>
                <div className="navTop">
                    <div className="nav-divs">
                        <Link to=""><img className="logo-img" src="../public/shoe.png" alt="" /></Link>
                        <Link to="" className="brandLink"><div className="brandName">Shoos</div></Link>
                    </div>
                    <div className="nav-divs">
                        <span className="discountSeason">Diwali Sale!</span>
                    </div>
                    <div className="nav-divs">
                        <Link to="" className="navButtons">
                            <img src="/public/home.png" alt="" className="home-icon" />
                        </Link>
                        <Link to="/cart" className="navButtons">
                            <img src="/public/cart.png" alt="" className="cart-icon" />
                        </Link>
                        <Link to = "/profile" className="navButtons">
                            <img src="/public/profile.png" alt="" className="profile-icon" />
                        </Link>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Header
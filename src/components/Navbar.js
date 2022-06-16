function Navbar() {
    return (
        <nav>
           <img src={require("../images/book-icon.png")} alt="book-logo" className="book-icon"/>
           <h3 className="nav-title">my travel journal</h3>
        </nav>
    )
}

export default Navbar;
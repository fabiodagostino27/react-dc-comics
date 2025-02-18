import logoImg from "../assets/img/dc-logo.png";

const Header = () => {
    return (
        <header>
            <nav className="navbar navbar-expand-lg">
                <div className="container">
                    <a className="navbar-brand" href="#">
                        <img src={logoImg} alt="Logo DC" />
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                        <ul className="navbar-nav h-100">
                            <li className="nav-item">
                                <a href="#" className="nav-link">CHARACTERS</a>
                            </li>
                            <li className="nav-item">
                                <a href="#" className="nav-link">COMICS</a>
                            </li>
                            <li className="nav-item">
                                <a href="#" className="nav-link">MOVIES</a>
                            </li>
                            <li className="nav-item">
                                <a href="#" className="nav-link">TV</a>
                            </li>
                            <li className="nav-item">
                                <a href="#" className="nav-link">GAMES</a>
                            </li>
                            <li className="nav-item">
                                <a href="#" className="nav-link">COLLECTIBLES</a>
                            </li>
                            <li className="nav-item">
                                <a href="#" className="nav-link">VIDEOS</a>
                            </li>
                            <li className="nav-item">
                                <a href="#" className="nav-link">FANS</a>
                            </li>
                            <li className="nav-item">
                                <a href="#" className="nav-link">NEWS</a>
                            </li>
                            <li className="nav-item">
                                <a href="#" className="nav-link">SHOP</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
};


export default Header;
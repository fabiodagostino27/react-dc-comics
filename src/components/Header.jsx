import logoImg from "../assets/img/dc-logo.png";

const Header = (props) => {
    const navLinks = props.navLinks;

    return (
        <header>
            <nav className="navbar navbar-expand-lg p-0">
                <div className="container">
                    <a className="navbar-brand p-3" href="#">
                        <img src={logoImg} alt="Logo DC" />
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                        <ul className="navbar-nav h-100">
                            {navLinks.map(element => {
                                const {id, title, url, current} = element;
                                return (
                                    <li key={id} className={`nav-item ${current ? "active" : ""}`}>
                                        <a className="nav-link" href={url}>{title}</a>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
};


export default Header;
import footFb from "../assets/img/footer-facebook.png";
import footTw from "../assets/img/footer-twitter.png";
import footYt from "../assets/img/footer-youtube.png";
import footPin from "../assets/img/footer-pinterest.png";
import footPer from "../assets/img/footer-periscope.png";

const Footer = () => {
    return (
        <footer>
            <div className="footer-top">
                <div className="container d-flex justify-content-between">
                    <div className="d-flex py-4 gap-3">
                        <div>
                            <h5>DC COMICS</h5>
                            <ul className="list-group">
                                <li><a href="#">Characters</a></li>
                                <li><a href="#">Comics</a></li>
                                <li><a href="#">Movies</a></li>
                                <li><a href="#">TV</a></li>
                                <li><a href="#">Games</a></li>
                                <li><a href="#">Videos</a></li>
                                <li><a href="#">News</a></li>
                            </ul>

                            <h5>SHOP</h5>
                            <ul className="list-group">
                                <li><a href="#">Shop DC</a></li>
                                <li><a href="#">Shop DC Collectibles</a></li>
                            </ul>
                        </div>
                        <div>
                            <h5>DC</h5>
                            <ul className="list-group">
                                <li><a href="#">Terms Of Use</a></li>
                                <li><a href="#">Privacy Policy (New)</a></li>
                                <li><a href="#">AD Choices</a></li>
                                <li><a href="#">Advertising</a></li>
                                <li><a href="#">Jobs</a></li>
                                <li><a href="#">Subscriptions</a></li>
                                <li><a href="#">Talent Workshop</a></li>
                                <li><a href="#">CPSC Certifications</a></li>
                                <li><a href="#">Ratings</a></li>
                                <li><a href="#">Shop Help</a></li>
                                <li><a href="#">Contavt Us</a></li>
                            </ul>
                        </div>
                        <div>
                            <h5>SITES</h5>
                            <ul className="list-group">
                                <li><a href="#">DC</a></li>
                                <li><a href="#">MAD Magazine</a></li>
                                <li><a href="#">DC Kids</a></li>
                                <li><a href="#">DC Universe</a></li>
                                <li><a href="#">DC Power Visa</a></li>
                            </ul>
                        </div>
                    </div>
                    <figure className="w-50"></figure>
                </div>

            </div>
            <div className="footer-bottom">
                <div className="container py-4 d-flex justify-content-between">
                    <a href="#" className="p-2">SIGN-UP NOW</a>
                    <div>
                        <div className="d-flex align-items-center gap-2">
                            <span>FOLLOW US</span>
                            <div className="d-flex gap-2">
                                <a href="#">
                                    <img src={footFb} alt="Facebook" />
                                </a>
                                <a href="#">
                                    <img src={footTw} alt="Twitter" />
                                </a><a href="#">
                                    <img src={footYt} alt="YouTube" />
                                </a>
                                <a href="#">
                                    <img src={footPin} alt="Pinterest" />
                                </a>
                                <a href="#">
                                    <img src={footPer} alt="Periscope" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
};

export default Footer;
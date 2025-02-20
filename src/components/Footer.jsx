import footFb from "../assets/img/footer-facebook.png";
import footTw from "../assets/img/footer-twitter.png";
import footYt from "../assets/img/footer-youtube.png";
import footPin from "../assets/img/footer-pinterest.png";
import footPer from "../assets/img/footer-periscope.png";

const Footer = (props) => {
    const dcComicsLinks = props.footerLinks.dcComics;
    const shopLinks = props.footerLinks.shop;
    const dcLinks = props.footerLinks.dc;
    const sitesLinks = props.footerLinks.sites;

    return (
        <footer>
            <div className="footer-top">
                <div className="container d-flex justify-content-between">
                    <div className="d-flex py-4 gap-3">
                        <div>
                            <h5>DC COMICS</h5>
                            <ul className="list-group">
                                {dcComicsLinks.map(element => {
                                    const {id, title, url} = element;
                                    return (
                                        <li key={id}><a href={url}>{title}</a></li>
                                    )
                                })}
                            </ul>

                            <h5>SHOP</h5>
                            <ul className="list-group">
                                {shopLinks.map(element => {
                                    const {id, title, url} = element;
                                    return (
                                        <li key={id}><a href={url}>{title}</a></li>
                                    )
                                })}
                            </ul>
                        </div>
                        <div>
                            <h5>DC</h5>
                            <ul className="list-group">
                                {dcLinks.map(element => {
                                    const {id, title, url} = element;
                                    return (
                                        <li key={id}><a href={url}>{title}</a></li>
                                    )
                                })}
                            </ul>
                        </div>
                        <div>
                            <h5>SITES</h5>
                            <ul className="list-group">
                                {sitesLinks.map(element => {
                                    const {id, title, url} = element;
                                    return (
                                        <li key={id}><a href={url}>{title}</a></li>
                                    )
                                })}
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
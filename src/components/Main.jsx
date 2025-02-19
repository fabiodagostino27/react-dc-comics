import digitalComicsImg from "../assets/img/buy-comics-digital-comics.png";
import merchImg from "../assets/img/buy-comics-merchandise.png";
import subImg from "../assets/img/buy-comics-subscriptions.png";
import locatorImg from "../assets/img/buy-comics-shop-locator.png";
import powerVisaImg from "../assets/img/buy-dc-power-visa.svg";

const Main = () => {
    return (
        <main>
            <div className="bg-black">
                <div className="container">
                    <h3 className="text-white py-5 m-0">Content goes here</h3>
                </div>
            </div>
            <div className="bg-custom m-0">
                <div className="container">
                    <ul className="d-flex justify-content-between wrap m-0">
                        <li>
                            <a href="#">
                                <img src={digitalComicsImg} alt="Digital comics" />
                                <span>DIGITAL COMICS</span>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <img src={merchImg} alt="Merchandising" />
                                <span>DC MERCHANDISE</span>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <img src={subImg} alt="Subscription" />
                                <span>SUBSCRIPTION</span>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <img src={locatorImg} alt="Shop locator" />
                                <span>COMIC SHOP LOCATOR</span>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <img src={powerVisaImg} alt="Power visa" />
                                <span>DC POWER VISA</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </main>
    )
}

export default Main;
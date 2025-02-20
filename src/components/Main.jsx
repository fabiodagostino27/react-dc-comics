import ComicsList from "./ComicsList";
import digitalComicsImg from "../assets/img/buy-comics-digital-comics.png";
import merchImg from "../assets/img/buy-comics-merchandise.png";
import subImg from "../assets/img/buy-comics-subscriptions.png";
import locatorImg from "../assets/img/buy-comics-shop-locator.png";
import powerVisaImg from "../assets/img/buy-dc-power-visa.svg";

const Main = () => {
    return (
        <main>
            <div className="jumbotron"></div>
            <div className="bg-black text-white">
                <div className="container">
                    <div className="current blue-banner">
                        CURRENT SERIES
                    </div>
                    <div className="row py-2 gy-5">
                        <ComicsList />
                    </div>
                    <div className="text-center py-5">
                        <a href="#" className="blue-banner fs-6 px-5">LOAD MORE</a>
                    </div>
                </div>
            </div>
            <div className="bg-custom m-0">
                <div className="container">
                    <ul className="d-flex justify-content-between wrap p-0 m-0">
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
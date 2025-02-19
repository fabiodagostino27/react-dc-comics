import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

function App() {
    const navLinks = [
        { id: 1, title: "CHARACTERS", url: "#", current: false },
        { id: 2, title: "COMICS", url: "#", current: true },
        { id: 3, title: "MOVIES", url: "#", current: false },
        { id: 4, title: "TV", url: "#", current: false },
        { id: 5, title: "GAMES", url: "#", current: false },
        { id: 6, title: "COLLECTIBLES", url: "#", current: false },
        { id: 7, title: "VIDEOS", url: "#", current: false },
        { id: 8, title: "FANS", url: "#", current: false },
        { id: 9, title: "NEWS", url: "#", current: false },
        { id: 10, title: "SHOP", url: "#", current: false }
    ]

    //Footer links
    const dcComicsLinks = [
        { id: 1, title: "Characters", url: "#" },
        { id: 2, title: "Comics", url: "#" },
        { id: 3, title: "Movies", url: "#" },
        { id: 4, title: "TV", url: "#" },
        { id: 5, title: "Games", url: "#" },
        { id: 6, title: "Videos", url: "#" },
        { id: 7, title: "News", url: "#" }
    ];

    const shopLinks = [
        { id: 1, title: "Shop DC", url: "#" },
        { id: 2, title: "Shop DC Collectibles", url: "#" },
    ];

    const dcLinks = [
        { id: 1, title: "Terms Of Use", url: "#" },
        { id: 2, title: "Privacy Policy (New)", url: "#" },
        { id: 3, title: "AD Choices", url: "#" },
        { id: 4, title: "Advertising", url: "#" },
        { id: 5, title: "Jobs", url: "#" },
        { id: 6, title: "Subscriptions", url: "#" },
        { id: 7, title: "Talent Workshop", url: "#" },
        { id: 8, title: "CPSC Certifications", url: "#" },
        { id: 9, title: "Ratings", url: "#" },
        { id: 10, title: "Shop Help", url: "#" },
        { id: 11, title: "Contact Us", url: "#" }
    ];

    const sitesLinks = [
        { id: 1, title: "DC", url: "#" },
        { id: 2, title: "MAD Magazine", url: "#" },
        { id: 3, title: "DC Kids", url: "#" },
        { id: 4, title: "DC Universe", url: "#" },
        { id: 5, title: "DC Power Visa", url: "#" }
    ];
      


    return (
        <>
            <Header navLinks={navLinks} />
            <Main />
            <Footer dcComicsLinks={dcComicsLinks} shopLinks={shopLinks} dcLinks={dcLinks} sitesLinks={sitesLinks} />
        </>
    )
}

export default App;

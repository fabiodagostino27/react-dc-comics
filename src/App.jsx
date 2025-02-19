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

    return (
        <>
            <Header navLinks={navLinks}/>
            <Main />
            <Footer />
        </>
    )
}

export default App;

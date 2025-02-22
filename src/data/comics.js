const comics = [
  {
    id: 1,
    title: "Action Comics #1000: The Deluxe Edition",
    description: "The celebration of 1,000 issues of Action Comics continues with a new, Deluxe Edition of the amazing comic that won raves when it hit comics shops in April! This hardcover includes all the stories from that issue, plus the tale by writer Paul Levitz and artist Neal Adams that appeared in the Action Comics: 80 Years Of Superman hardcover, as well as all the variant covers, design sketches by Jim Lee for Superman's new look, scripts for the stories, the original art from the lost story featuring art by Curt Swan and more! Plus: a complete reprint of the stories that started it all—the Superman stories Action Comics #1 and 2 from 1938!",
    thumb: "data:image/jpeg;base64,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",
    price: "$19.99",
    series: "Action Comics",
    sale_date: "2018-10-02",
    type: "comic book",
    artists: [
      "José Luis García-López",
      "Clay Mann",
      "Rafael Albuquerque"
    ],
    writers: [
      "Brad Meltzer",
      "Tom King",
      "Scott Snyder",
    ]
  },
  {
    id: 2,
    title: "American Vampire 1976 #1",
    description: "America is broken. Trust between the government and the American public has crumbled. Paranoia reigns supreme. It's 1976, and this is the concluding chapter of the Eisner Award-winning American Vampire! Skinner Sweet has exhausted all efforts to regain his lost immortality. With his powers and purpose gone, he is now determined to go out with a bang. At a seedy motorcycle rally in the desert where he's closer than ever to his death wish, Pearl Jones and a shocking partner track him down for one last, desperate mission: The force known as the Gray Trader and its minions are tunneling through the bowels of the world to unleash hell on Earth—just in time for America's bicentennial. With catastrophe looming, it's up to Skinner and Pearl to reconcile and change the course of history—or die trying. The series that launched the careers of superstars Scott Snyder and Rafael Albuquerque returns for nine final issues and the closing chapter of the legacy of American Vampire.",
    thumb: "https://imgs.search.brave.com/OU2E3_3vA7flyv-SJ3TcFW1d99KDlp5ZfmW9ylLLFDo/rs:fit:1012:1200:1/g:ce/aHR0cHM6Ly9pMC53/cC5jb20vd3d3LnN1/cGVycG91dm9pci5j/b20vd3AtY29udGVu/dC91cGxvYWRzLzIw/MjAvMDcvQW1lcmlj/YW4tVmFtcGlyZS0x/OTc2LTAxLWNvdi1B/bGJ1cXVlcnF1ZS0y/MDIwLmpwZz9yZXNp/emU9MTAxMiUyQzE1/NTYmc3NsPTE",
    price: "$3.99",
    series: "American Vampire 1976",
    sale_date: "2020-10-06",
    type: "comic book",
    artists: ["Rafael Albuquerque"],
    writers: ["Scott Snyder"]
  },
  {
    id: 3,
    title: "Aquaman Vol. 4: Underworld",
    description: "Enraged by rumors of Arthur's survival in the slums of Atlantis, the ruthless King Rath orders the use of ancient Atlantean techno-magic to track down the Aquaman at all costs! But the ex-king Arthur can't hide for long when his fate collides with that of a mysterious young woman on the run from Rath's own secret police. Her name: Dolphin. Collects AQUAMAN #25-30.",
    thumb: "https://imgs.search.brave.com/gAZQuZyt6WjcUWF6aXCIBaiJqtOJAK-X4nxS9Vbvwno/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9jZG4y/LnBlbmd1aW4uY29t/LmF1L2NvdmVycy9v/cmlnaW5hbC85Nzgx/NDAxMjc1NDI2Lmpw/Zw",
    price: "$16.99",
    series: "Aquaman",
    sale_date: "2018-01-24",
    type: "graphic novel",
    artists: ["Stjepan Sejic"],
    writers: ["Dan Abnett"]
  },
  {
    id: 4,
    title: "Batgirl #1",
    description: "“Beyond Burnside” Chapter One: The Batgirl you know and love is going global with Eisner Award-winning and New York Times best-selling writer Hope Larson (A Wrinkle in Time, Goldie Vance) and all-star artist Rafael Albuquerque (AMERICAN VAMPIRE). In order to up her game, Babs travels to Japan on a quest to train with the most elite modern combat masters of the East. But when a chance meeting with an old friend puts a target on her back, Batgirl may need to use her new skills to solve a deadly mystery.",
    thumb: "https://imgs.search.brave.com/YET9wY29Aa29TyHqlbieS9qsz3HWyNYQx-WkRqdBRX4/rs:fit:640:984:1/g:ce/aHR0cDovL2dldHlv/dXJjb21pY29uLmNv/LnVrL3dwLWNvbnRl/bnQvdXBsb2Fkcy8y/MDE2LzA4L2JhdGdp/cmwtcmViaXJ0aC0x/LWNvdmVyLmpwZw",
    price: "$2.99",
    series: "Batgirl",
    sale_date: "2016-07-27",
    type: "comic book",
    artists: ["Rafael Albuquerque"],
    writers: ["Hope Larson"]
  },
  {
    id: 5,
    title: "Batman #56",
    description: "The Dark Knight's looking to drop both the hammer and sickle on the KGBeast. The Russian super-assassin has gone too far, and Batman will stop at nothing to hunt him down. But is the Dark Knight willing to step into the darkness himself to find justice?",
    thumb: "https://imgs.search.brave.com/jgxYlrx442aozemzjqdmCsd9DkIkRollJp1T8sG8TfE/rs:fit:720:1106:1/g:ce/aHR0cHM6Ly9veXN0/ZXIuaWduaW1ncy5j/b20vd29yZHByZXNz/L3N0Zy5pZ24uY29t/LzIwMTgvMTAvU1RM/MDk3MDk1LTcyMHgx/MTA2LmpwZw",
    price: "$3.99",
    series: "Batman",
    sale_date: "2018-10-03",
    type: "comic book",
    artists: ["Tony S. Daniel"],
    writers: ["Tom King"]
  },
  {
    id: 6,
    title: "Batman Beyond #1",
    description: "“THE RETURN” part one! Terry McGinnis is back as Batman, much to the delight of his family and friends. But is the original Joker really back as well? Inspired by the possible return of their role model, the Jokerz have taken over an entire section of Gotham City and are determined to wreak havoc in the still-rebuilding city. While Batman battles chaos on the streets, his friend Dana is at the mercy of the new leader of the now-unified gang.",
    thumb: "https://m.media-amazon.com/images/I/81nNdtcgPbL._UF1000,1000_QL80_.jpg",
    price: "$2.99",
    series: "Batman Beyond",
    sale_date: "2016-10-26",
    type: "comic book",
    artists: ["Bernard Chang"],
    writers: ["Dan Jurgens"],
  },
  {
    id: 7,
    title: "Batman/Superman #1",
    description: "Up in the sky, in the dark of the night, trust no one - for the infected walk among us. Spinning out of the devastating events of THE BATMAN WHO LAUGHS, Superman and Batman are together once more in an all-new monthly series - and they're facing a terrifying new threat that could strike from anywhere. The Dark Knight and the Man of Steel must journey into the depths of Gotham City to learn which of their fellow heroes has been transformed into the horrifying horseman of their most dangerous and deranged foe ever. Our heroes will need to fight to survive, but an even more dangerous question lurkes in the shadows: Can Superman and Batman even trust each other?",
    thumb: "https://imgs.search.brave.com/cSaB3m-tghN3_Cllp9IOlUPEPsyShCnl8gijRyPFdrg/rs:fit:791:1200:1/g:ce/aHR0cHM6Ly8xNDk0/NTUxNTIudjIucHJl/c3NhYmxlY2RuLmNv/bS93cC1jb250ZW50/L3VwbG9hZHMvMjAx/OS8wOC9CTVNNX0N2/MV9CQVQuanBn",
    price: "$3.99",
    series: "Batman/Superman",
    sale_date: "2019-08-28",
    type: "comic book",
    artists: ["David Marquez"],
    writers: ["Joshua Williamson"],
  },
  {
    id: 8,
    title: "Batman/Superman Annual #1",
    description: "On a dark and stormy night in the fifth dimension, two mortal foes meet to settle an age-old question once and for all: In a fight between Batman and Superman, who would win? The combatants? Mr. Mxyzptlk and Bat-Mite. And in this battle for the ages, you will find out if a fifth-dimensional imp can bleed. It’s all in this, the ultimate slugfest between the Dark Knight and the Man of Steel-plus a whole lot of magic!",
    thumb: "https://imgs.search.brave.com/jfaQd--WUx7RG8MiQ-VyCOqLUJW19ojBnjkNOG81rL4/rs:fit:666:1024:1/g:ce/aHR0cHM6Ly90aGVn/d3cuY29tL3dwLWNv/bnRlbnQvdXBsb2Fk/cy8yMDIwLzA5L0Jh/dG1hbi1TdXBlcm1h/bi1Bbm51YWwtQ3Yx/LTY2NngxMDI0Lmpw/Zw",
    price: "$4.99",
    series: "Batman/Superman Annual",
    sale_date: "2020-09-29",
    type: "comic book",
    artists: ["Clayton Henry", "Gleb Melnikov", "Dale Eaglesham"],
    writers: ["Joshua Williamson"],
  },
  {
    id: 9,
    title: "Batman: The Joker War Zone #1",
    description: "Gotham City is a battleground as The Joker takes over the Wayne fortune and wages a street war against the Dark Knight and his allies! Enter the “war zone” with short stories featuring characters like Cassandra Cain, Stephanie Brown, and Luke Fox and see how they’re fighting back in a city under siege! Also, the brutal full debut of the mysterious new anti-hero known as Clownhunter!",
    thumb: "https://imgs.search.brave.com/kSLCPBIeE9s218LRC4cIyrHOYmxrSS2Wt7LvNNfED2I/rs:fit:455:700:1/g:ce/aHR0cHM6Ly9jb21p/Y2Jvb2tyZWFsbS5j/b20vY292ZXItc2Nh/bi81ZmFmMTFjYTk1/NGQ1MGVjZDA1ZmU3/M2U1NjBiNWQyOC94/bC8tLWlzc3VlLTEu/anBn",
    price: "$5.99",
    series: "Batman: The Joker War Zone",
    sale_date: "2020-09-29",
    type: "comic book",
    artists: ["Guillem March", "Ashley A. Woods", "Olivier Coipel", "James Stokoe", "Darko Lafuente"],
    writers: ["Sam Johns", "Joshua Williamson", "John Ridley"],
  },
  {
    id: 10,
    title: "Batman: Three Jokers #1",
    description: "Thirty years after Batman: The Killing Joke changed comics forever, Three Jokers reexamines the myth of who, or what, The Joker is and what at the heart of his eternal battle with Batman. New York Times bestselling writer Geoff Johns and Jason Fabok reunite to tell the ultimate story of Batman and The Joker!",
    thumb: "https://imgs.search.brave.com/a6fAPUra4t94xMJFlYv6X7Lwm4z_qPmslx7Hiqafbok/rs:fit:600:923:1/g:ce/aHR0cHM6Ly9jZG4u/ZmxpY2tlcmluZ215/dGguY29tL3dwLWNv/bnRlbnQvdXBsb2Fk/cy8yMDIwLzA4L0Jh/dG1hbi1UaHJlZS1K/b2tlcnMtMS02MDB4/OTIzLTEuanBn",
    price: "$6.99",
    series: "Batman: Three Jokers",
    sale_date: "2020-08-25",
    type: "comic book",
    artists: ["Jason Fabok"],
    writers: ["Geoff Johns"],
  },
  {
    id: 11,
    title: "Batman: White Knight Presents: Harley Quinn #1",
    description: "The Joker is dead, Bruce Wayne is behind bars...and Gotham City is just starting to redefine itself without Batman.",
    thumb: "https://imgs.search.brave.com/qMxyCwK99aguaETp4ioxXLrpxwNg2JNBN3Oq7LGAgzM/rs:fit:780:1200:1/g:ce/aHR0cHM6Ly9jZG4u/ZmxpY2tlcmluZ215/dGguY29tL3dwLWNv/bnRlbnQvdXBsb2Fk/cy8yMDIwLzEwL0Jh/dG1hbi1XaGl0ZS1L/bmlnaHQtUHJlc2Vu/dHMtSGFybGV5LVF1/aW5uLTEtMS5qcGc",
    price: "$4.99",
    series: "Batman: White Knight Presents: Harley Quinn",
    sale_date: "2020-10-20",
    type: "comic book",
    artists: ["Matteo Scalera"],
    writers: ["Katana Collins"],
  },
  {
    id: 12,
    title: "Catwoman Vol. 1: Copycats",
    description: "Following her near-miss wedding with Batman, Catwoman hits the streets to expose a copycat.",
    thumb: "https://m.media-amazon.com/images/I/91Yg1Zm8J4L._UF1000,1000_QL80_.jpg",
    price: "$16.99",
    series: "Catwoman",
    sale_date: "2019-04-10",
    type: "graphic novel",
    artists: ["Fernando Blanco", "Joëlle Jones"],
    writers: ["Joëlle Jones"],
  },
];

export default comics
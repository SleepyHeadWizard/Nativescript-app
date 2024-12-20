interface Question {
    type: string;
    difficulty: string;
    category: string;
    question: string;
    correct_answer: string;
    incorrect_answers: string[];
}


const questions: Question[] = [
    {
        type: "multiple",
        difficulty: "easy",
        category: "General Knowledge",
        question: "What alcoholic drink is made from molasses?",
        correct_answer: "Rum",
        incorrect_answers: [
            "Gin",
            "Vodka",
            "Whisky"
        ]
    },
    {
        type: "multiple",
        difficulty: "easy",
        category: "General Knowledge",
        question: "The &ldquo;fairy&rdquo; type made it&rsquo;s debut in which generation of the Pokemon core series games?",
        correct_answer: "6th",
        incorrect_answers: [
            "2nd",
            "7th",
            "4th"
        ]
    },
    
    {
        "type": "multiple",
        "difficulty": "easy",
        "category": "General Knowledge",
        "question": "What alcoholic drink is made from molasses?",
        "correct_answer": "Rum",
        "incorrect_answers": [
            "Gin",
            "Vodka",
            "Whisky"
        ]
    },
    {
        "type": "multiple",
        "difficulty": "easy",
        "category": "General Knowledge",
        "question": "The &ldquo;fairy&rdquo; type made it&rsquo;s debut in which generation of the Pokemon core series games?",
        "correct_answer": "6th",
        "incorrect_answers": [
            "2nd",
            "7th",
            "4th"
        ]
    },
    {
        "type": "multiple",
        "difficulty": "easy",
        "category": "General Knowledge",
        "question": "What geometric shape is generally used for stop signs?",
        "correct_answer": "Octagon",
        "incorrect_answers": [
            "Hexagon",
            "Circle",
            "Triangle"
        ]
    },
    {
        "type": "multiple",
        "difficulty": "easy",
        "category": "General Knowledge",
        "question": "Terry Gilliam was an animator that worked with which British comedy group?",
        "correct_answer": "Monty Python",
        "incorrect_answers": [
            "The Goodies&lrm;",
            "The League of Gentlemen&lrm;",
            "The Penny Dreadfuls"
        ]
    },
    {
        "type": "multiple",
        "difficulty": "easy",
        "category": "General Knowledge",
        "question": "What is the Spanish word for &quot;donkey&quot;?",
        "correct_answer": "Burro",
        "incorrect_answers": [
            "Caballo",
            "Toro",
            "Perro"
        ]
    },
    {
        "type": "multiple",
        "difficulty": "easy",
        "category": "General Knowledge",
        "question": "What was the nickname given to the Hughes H-4 Hercules, a heavy transport flying boat which achieved flight in 1947?",
        "correct_answer": "Spruce Goose",
        "incorrect_answers": [
            "Noah&#039;s Ark",
            "Fat Man",
            "Trojan Horse"
        ]
    },
    {
        "type": "multiple",
        "difficulty": "easy",
        "category": "General Knowledge",
        "question": "Which of the following is not the host of a program on NPR?",
        "correct_answer": "Ben Shapiro",
        "incorrect_answers": [
            "Terry Gross",
            "Ira Glass",
            "Peter Sagal"
        ]
    },
    {
        "type": "multiple",
        "difficulty": "easy",
        "category": "General Knowledge",
        "question": "How many furlongs are there in a mile?",
        "correct_answer": "Eight",
        "incorrect_answers": [
            "Two",
            "Four",
            "Six"
        ]
    },
    {
        "type": "multiple",
        "difficulty": "easy",
        "category": "General Knowledge",
        "question": "In Half-Life, what is the name of the alien that attaches to heads?",
        "correct_answer": "Headcrab",
        "incorrect_answers": [
            "Bullsquid",
            "Vortigaunt",
            "Facehugger"
        ]
    },
    {
        "type": "multiple",
        "difficulty": "easy",
        "category": "General Knowledge",
        "question": "What company developed the vocaloid Hatsune Miku?",
        "correct_answer": "Crypton Future Media",
        "incorrect_answers": [
            "Sega",
            "Sony",
            "Yamaha Corporation"
        ]
    },
    {
        "type": "multiple",
        "difficulty": "easy",
        "category": "General Knowledge",
        "question": "What is the largest organ of the human body?",
        "correct_answer": "Skin",
        "incorrect_answers": [
            "Heart",
            "large Intestine",
            "Liver"
        ]
    },
    {
        "type": "multiple",
        "difficulty": "easy",
        "category": "General Knowledge",
        "question": "What does the &#039;S&#039; stand for in the abbreviation SIM, as in SIM card? ",
        "correct_answer": "Subscriber",
        "incorrect_answers": [
            "Single",
            "Secure",
            "Solid"
        ]
    },
    {
        "type": "multiple",
        "difficulty": "easy",
        "category": "General Knowledge",
        "question": "In aerodynamics, which force pushes an object upwards?",
        "correct_answer": "Lift",
        "incorrect_answers": [
            "Drag",
            "Weight",
            "Thrust"
        ]
    },
    {
        "type": "multiple",
        "difficulty": "easy",
        "category": "General Knowledge",
        "question": "In past times, what would a gentleman keep in his fob pocket?",
        "correct_answer": "Watch",
        "incorrect_answers": [
            "Money",
            "Keys",
            "Notebook"
        ]
    },
    {
        "type": "multiple",
        "difficulty": "easy",
        "category": "General Knowledge",
        "question": "Which sign of the zodiac comes between Virgo and Scorpio?",
        "correct_answer": "Libra",
        "incorrect_answers": [
            "Gemini",
            "Taurus",
            "Capricorn"
        ]
    },
    {
        "type": "multiple",
        "difficulty": "easy",
        "category": "General Knowledge",
        "question": "What is the official language of Brazil?",
        "correct_answer": "Portugese",
        "incorrect_answers": [
            "Brazilian",
            "Spanish",
            "English"
        ]
    },
    {
        "type": "multiple",
        "difficulty": "easy",
        "category": "General Knowledge",
        "question": "What is Cynophobia the fear of?",
        "correct_answer": "Dogs",
        "incorrect_answers": [
            "Birds",
            "Flying",
            "Germs"
        ]
    },
    {
        "type": "multiple",
        "difficulty": "easy",
        "category": "General Knowledge",
        "question": "What is the famous Papa John&#039;s last name?",
        "correct_answer": "Schnatter",
        "incorrect_answers": [
            "Chowder",
            "Williams",
            "ANDERSON"
        ]
    },
    {
        "type": "multiple",
        "difficulty": "easy",
        "category": "General Knowledge",
        "question": "Which country, not including Japan, has the most people of japanese decent?",
        "correct_answer": "Brazil",
        "incorrect_answers": [
            "China",
            "South Korea",
            "United States of America"
        ]
    },
    {
        "type": "multiple",
        "difficulty": "easy",
        "category": "General Knowledge",
        "question": "What is the French word for &quot;fish&quot;?",
        "correct_answer": "poisson",
        "incorrect_answers": [
            "fiche",
            "escargot",
            "mer"
        ]
    },
    {
        "type": "multiple",
        "difficulty": "easy",
        "category": "General Knowledge",
        "question": "What nuts are used in the production of marzipan?",
        "correct_answer": "Almonds",
        "incorrect_answers": [
            "Peanuts",
            "Walnuts",
            "Pistachios"
        ]
    },
    {
        "type": "multiple",
        "difficulty": "easy",
        "category": "General Knowledge",
        "question": "Who invented the first ever chocolate bar, in 1847?",
        "correct_answer": "Joseph Fry",
        "incorrect_answers": [
            "Andrew Johnson",
            "John Cadbury",
            "John Tyler"
        ]
    },
    {
        "type": "multiple",
        "difficulty": "easy",
        "category": "General Knowledge",
        "question": "When someone is cowardly, they are said to have what color belly?",
        "correct_answer": "Yellow",
        "incorrect_answers": [
            "Green",
            "Red",
            "Blue"
        ]
    },
    {
        "type": "multiple",
        "difficulty": "easy",
        "category": "General Knowledge",
        "question": "In the video-game franchise Kingdom Hearts, the main protagonist, carries a weapon with what shape?",
        "correct_answer": "Key",
        "incorrect_answers": [
            "Sword",
            "Pen",
            "Cellphone"
        ]
    },
    {
        "type": "multiple",
        "difficulty": "easy",
        "category": "General Knowledge",
        "question": "The New York Times slogan is, &ldquo;All the News That&rsquo;s Fit to&hellip;&rdquo;",
        "correct_answer": "Print",
        "incorrect_answers": [
            "Digest",
            "Look",
            "Read"
        ]
    },
    {
        "type": "multiple",
        "difficulty": "easy",
        "category": "General Knowledge",
        "question": "Which of the following card games revolves around numbers and basic math?",
        "correct_answer": "Uno",
        "incorrect_answers": [
            "Go Fish",
            "Twister",
            "Munchkin"
        ]
    },
    {
        "type": "multiple",
        "difficulty": "easy",
        "category": "General Knowledge",
        "question": "How would one say goodbye in Spanish?",
        "correct_answer": "Adi&oacute;s",
        "incorrect_answers": [
            " Hola",
            "Au Revoir",
            "Salir"
        ]
    },
    {
        "type": "multiple",
        "difficulty": "easy",
        "category": "General Knowledge",
        "question": "What is &quot;dabbing&quot;?",
        "correct_answer": "A dance",
        "incorrect_answers": [
            "A medical procedure",
            "A sport",
            "A language"
        ]
    },
    {
        "type": "multiple",
        "difficulty": "easy",
        "category": "General Knowledge",
        "question": "Which of the following is not an Ivy League University?",
        "correct_answer": "Stanford",
        "incorrect_answers": [
            "University of Pennsylvania",
            "Harvard",
            "Princeton"
        ]
    },
    {
        "type": "multiple",
        "difficulty": "easy",
        "category": "General Knowledge",
        "question": "When was the Playstation 3 released?",
        "correct_answer": "November 11, 2006",
        "incorrect_answers": [
            "January 8, 2007",
            "December 25, 2007",
            "July 16, 2006"
        ]
    },
    {
        "type": "multiple",
        "difficulty": "easy",
        "category": "General Knowledge",
        "question": "If you are caught &quot;Goldbricking&quot;, what are you doing wrong?",
        "correct_answer": "Slacking",
        "incorrect_answers": [
            "Smoking",
            "Stealing",
            "Cheating"
        ]
    },
    {
        "type": "multiple",
        "difficulty": "easy",
        "category": "General Knowledge",
        "question": "Foie gras is a French delicacy typically made from what part of a duck or goose?",
        "correct_answer": "Liver",
        "incorrect_answers": [
            "Heart",
            "Stomach",
            "Intestines"
        ]
    },
    {
        "type": "multiple",
        "difficulty": "easy",
        "category": "General Knowledge",
        "question": "What is the shape of the toy invented by Hungarian professor Ernő Rubik?",
        "correct_answer": "Cube",
        "incorrect_answers": [
            "Sphere",
            "Cylinder",
            "Pyramid"
        ]
    },
    {
        "type": "multiple",
        "difficulty": "easy",
        "category": "General Knowledge",
        "question": "What does a funambulist walk on?",
        "correct_answer": "A Tight Rope",
        "incorrect_answers": [
            "Broken Glass",
            "Balls",
            "The Moon"
        ]
    },
    {
        "type": "multiple",
        "difficulty": "easy",
        "category": "General Knowledge",
        "question": "What was the first ever London Underground line to be built?",
        "correct_answer": "Metropolitan Line",
        "incorrect_answers": [
            "Circle Line",
            "Bakerloo Line",
            "Victoria Line"
        ]
    },
    {
        "type": "multiple",
        "difficulty": "easy",
        "category": "General Knowledge",
        "question": "Earth is located in which galaxy?",
        "correct_answer": "The Milky Way Galaxy",
        "incorrect_answers": [
            "The Mars Galaxy",
            "The Galaxy Note",
            "The Black Hole"
        ]
    },
    {
        "type": "multiple",
        "difficulty": "easy",
        "category": "General Knowledge",
        "question": "What zodiac sign is represented by a pair of scales?",
        "correct_answer": "Libra",
        "incorrect_answers": [
            "Aries",
            "Capricorn",
            "Sagittarius"
        ]
    },
    {
        "type": "multiple",
        "difficulty": "easy",
        "category": "General Knowledge",
        "question": "According to Sherlock Holmes, &quot;If you eliminate the impossible, whatever remains, however improbable, must be the...&quot;",
        "correct_answer": "Truth",
        "incorrect_answers": [
            "Answer",
            "Cause",
            "Source"
        ]
    },
    {
        "type": "multiple",
        "difficulty": "easy",
        "category": "General Knowledge",
        "question": "Which of the following presidents is not on Mount Rushmore?",
        "correct_answer": "John F. Kennedy",
        "incorrect_answers": [
            "Theodore Roosevelt",
            "Abraham Lincoln",
            "Thomas Jefferson"
        ]
    },
    {
        "type": "multiple",
        "difficulty": "easy",
        "category": "General Knowledge",
        "question": "What was the name of the WWF professional wrestling tag team made up of the wrestlers Ax and Smash?",
        "correct_answer": "Demolition",
        "incorrect_answers": [
            "The Dream Team",
            "The Bushwhackers",
            "The British Bulldogs"
        ]
    },
    {
        "type": "multiple",
        "difficulty": "easy",
        "category": "General Knowledge",
        "question": "What type of animal was Harambe, who was shot after a child fell into it&#039;s enclosure at the Cincinnati Zoo?",
        "correct_answer": "Gorilla",
        "incorrect_answers": [
            "Tiger",
            "Panda",
            "Crocodile"
        ]
    },
    {
        "type": "multiple",
        "difficulty": "easy",
        "category": "General Knowledge",
        "question": "Which of the following blood component forms a plug at the site of injuries?",
        "correct_answer": "Platelets",
        "incorrect_answers": [
            "Red blood cells",
            "White blood cells",
            "Blood plasma"
        ]
    },
    {
        "type": "multiple",
        "difficulty": "easy",
        "category": "General Knowledge",
        "question": "What is Tasmania?",
        "correct_answer": "An Australian State",
        "incorrect_answers": [
            "A flavor of Ben and Jerry&#039;s ice-cream",
            "A Psychological Disorder",
            "The Name of a Warner Brothers Cartoon Character"
        ]
    },
    {
        "type": "multiple",
        "difficulty": "easy",
        "category": "General Knowledge",
        "question": "Which of these colours is NOT featured in the logo for Google?",
        "correct_answer": "Pink",
        "incorrect_answers": [
            "Yellow",
            "Blue",
            "Green"
        ]
    },
    {
        "type": "multiple",
        "difficulty": "easy",
        "category": "General Knowledge",
        "question": "Which of the following is the IATA code for Manchester Airport?",
        "correct_answer": "MAN",
        "incorrect_answers": [
            "EGLL",
            "LHR",
            "EGCC"
        ]
    },
    {
        "type": "multiple",
        "difficulty": "easy",
        "category": "General Knowledge",
        "question": "Which American-owned brewery led the country in sales by volume in 2015?",
        "correct_answer": "D. G. Yuengling and Son, Inc",
        "incorrect_answers": [
            "Anheuser Busch",
            "Boston Beer Company",
            "Miller Coors"
        ]
    },
    {
        "type": "multiple",
        "difficulty": "easy",
        "category": "General Knowledge",
        "question": "The Canadian $1 coin is colloquially known as a what?",
        "correct_answer": "Loonie",
        "incorrect_answers": [
            "Boolie",
            "Foolie",
            "Moodie"
        ]
    },
    {
        "type": "multiple",
        "difficulty": "easy",
        "category": "General Knowledge",
        "question": "What word represents the letter &#039;T&#039; in the NATO phonetic alphabet?",
        "correct_answer": "Tango",
        "incorrect_answers": [
            "Target",
            "Taxi",
            "Turkey"
        ]
    },
    {
        "type": "multiple",
        "difficulty": "easy",
        "category": "General Knowledge",
        "question": "What is the name of Poland in Polish?",
        "correct_answer": "Polska",
        "incorrect_answers": [
            "Pupcia",
            "Polszka",
            "P&oacute;land"
        ]
    },
    {
        "type": "multiple",
        "difficulty": "easy",
        "category": "General Knowledge",
        "question": "When someone is inexperienced they are said to be what color?",
        "correct_answer": "Green",
        "incorrect_answers": [
            "Red",
            "Blue",
            "Yellow"
        ]
    },

    {
            "type": "multiple",
            "difficulty": "medium",
            "category": "General Knowledge",
            "question": "When did the website &quot;Facebook&quot; launch?",
            "correct_answer": "2004",
            "incorrect_answers": [
                "2005",
                "2003",
                "2006"
            ]
        },
        {
            "type": "multiple",
            "difficulty": "medium",
            "category": "General Knowledge",
            "question": "Which country drives on the left side of the road?",
            "correct_answer": "Japan",
            "incorrect_answers": [
                "Germany",
                "Russia",
                "China"
            ]
        },
        {
            "type": "multiple",
            "difficulty": "medium",
            "category": "General Knowledge",
            "question": "What is the romanized Japanese word for &quot;university&quot;?",
            "correct_answer": "Daigaku",
            "incorrect_answers": [
                "Toshokan",
                "Jimusho",
                "Shokudou"
            ]
        },
        {
            "type": "multiple",
            "difficulty": "medium",
            "category": "General Knowledge",
            "question": "Which of these companies does NOT manufacture automobiles?",
            "correct_answer": "Ducati",
            "incorrect_answers": [
                "Nissan",
                "GMC",
                "Fiat"
            ]
        },
        {
            "type": "multiple",
            "difficulty": "medium",
            "category": "General Knowledge",
            "question": "Earl Grey tea is black tea flavoured with what?",
            "correct_answer": "Bergamot oil",
            "incorrect_answers": [
                "Lavender",
                "Vanilla",
                "Honey"
            ]
        },
        {
            "type": "multiple",
            "difficulty": "medium",
            "category": "General Knowledge",
            "question": "Frank Lloyd Wright was the architect behind what famous building?",
            "correct_answer": "The Guggenheim",
            "incorrect_answers": [
                "Villa Savoye",
                "Sydney Opera House",
                "The Space Needle"
            ]
        },
        {
            "type": "multiple",
            "difficulty": "medium",
            "category": "General Knowledge",
            "question": "What was the soft drink Pepsi originally introduced as?",
            "correct_answer": "Brad&#039;s Drink",
            "incorrect_answers": [
                "Pepsin Pop",
                "Carolina Cola",
                "Pepsin Syrup"
            ]
        },
        {
            "type": "multiple",
            "difficulty": "medium",
            "category": "General Knowledge",
            "question": "Apple co-founder Steve Jobs died from complications of which form of cancer?",
            "correct_answer": "Pancreatic",
            "incorrect_answers": [
                "Bone",
                "Liver",
                "Stomach"
            ]
        },
        {
            "type": "multiple",
            "difficulty": "medium",
            "category": "General Knowledge",
            "question": "Scotch whisky and Drambuie make up which cocktail?",
            "correct_answer": "Rusty Nail",
            "incorrect_answers": [
                "Screwdriver",
                "Sex on the Beach",
                "Manhattan"
            ]
        },
        {
            "type": "multiple",
            "difficulty": "medium",
            "category": "General Knowledge",
            "question": "Which of these words means &quot;idle spectator&quot;?",
            "correct_answer": "Gongoozler",
            "incorrect_answers": [
                "Gossypiboma",
                "Jentacular",
                "Meupareunia"
            ]
        },
        {
            "type": "multiple",
            "difficulty": "medium",
            "category": "General Knowledge",
            "question": "Which of the following carbonated soft drinks were introduced first?",
            "correct_answer": "Dr. Pepper",
            "incorrect_answers": [
                "Coca-Cola",
                "Sprite",
                "Mountain Dew"
            ]
        },
        {
            "type": "multiple",
            "difficulty": "medium",
            "category": "General Knowledge",
            "question": "What is the full title of the Prime Minister of the UK?",
            "correct_answer": "First Lord of the Treasury",
            "incorrect_answers": [
                "Duke of Cambridge",
                "Her Majesty&#039;s Loyal Opposition",
                "Manager of the Crown Estate"
            ]
        },
        {
            "type": "multiple",
            "difficulty": "medium",
            "category": "General Knowledge",
            "question": "Which iconic Disneyland attraction was closed in 2017 to be remodeled as a &quot;Guardians of the Galaxy&quot; themed ride?",
            "correct_answer": "Twilight Zone Tower of Terror",
            "incorrect_answers": [
                "The Haunted Mansion",
                "Pirates of the Caribbean",
                "Peter Pan&#039;s Flight"
            ]
        },
        {
            "type": "multiple",
            "difficulty": "medium",
            "category": "General Knowledge",
            "question": "In the Morse code, which letter is indicated by 3 dots? ",
            "correct_answer": "S",
            "incorrect_answers": [
                "O",
                "A",
                "C"
            ]
        },
        {
            "type": "multiple",
            "difficulty": "medium",
            "category": "General Knowledge",
            "question": "The term &quot;scientist&quot; was coined in which year?",
            "correct_answer": "1833",
            "incorrect_answers": [
                "1933",
                "1942",
                "1796"
            ]
        },
        {
            "type": "multiple",
            "difficulty": "medium",
            "category": "General Knowledge",
            "question": "A statue of Charles Darwin sits in what London museum?",
            "correct_answer": "Natural History Museum",
            "incorrect_answers": [
                "Tate",
                "British Museum",
                "Science Museum"
            ]
        },
        {
            "type": "multiple",
            "difficulty": "medium",
            "category": "General Knowledge",
            "question": "According to the United States&#039; CDC, one in how many Americans die annually due to smoking?",
            "correct_answer": "Five",
            "incorrect_answers": [
                "Twenty",
                "Ten",
                "One hundred"
            ]
        },
        {
            "type": "multiple",
            "difficulty": "medium",
            "category": "General Knowledge",
            "question": "When was Hubba Bubba first introduced?",
            "correct_answer": "1979",
            "incorrect_answers": [
                "1984",
                "1972",
                "1980"
            ]
        },
        {
            "type": "multiple",
            "difficulty": "medium",
            "category": "General Knowledge",
            "question": "What is the German word for &quot;spoon&quot;?",
            "correct_answer": "L&ouml;ffel",
            "incorrect_answers": [
                "Gabel",
                "Messer",
                "Essst&auml;bchen"
            ]
        },
        {
            "type": "multiple",
            "difficulty": "medium",
            "category": "General Knowledge",
            "question": "The architect known as Le Corbusier was an important figure in what style of architecture?",
            "correct_answer": "Modernism",
            "incorrect_answers": [
                "Neoclassical",
                "Baroque",
                "Gothic Revival"
            ]
        },
        {
            "type": "multiple",
            "difficulty": "medium",
            "category": "General Knowledge",
            "question": "Where did the pineapple plant originate?",
            "correct_answer": "South America",
            "incorrect_answers": [
                "Hawaii",
                "Europe",
                "Asia"
            ]
        },
        {
            "type": "multiple",
            "difficulty": "medium",
            "category": "General Knowledge",
            "question": "What is the average life span of a garden ant?",
            "correct_answer": "15 years",
            "incorrect_answers": [
                "24 hours",
                "1 week",
                "3 years"
            ]
        },
        {
            "type": "multiple",
            "difficulty": "medium",
            "category": "General Knowledge",
            "question": "Linus Pauling, one of the only winners of multiple Nobel Prizes, earned his Nobel Prizes in Chemistry and what?",
            "correct_answer": "Peace",
            "incorrect_answers": [
                "Physics",
                "Economics",
                "Physiology/Medicine"
            ]
        },
        {
            "type": "multiple",
            "difficulty": "medium",
            "category": "General Knowledge",
            "question": "What is a Burgee?",
            "correct_answer": "A flag",
            "incorrect_answers": [
                "A rope",
                "A window",
                "A type of food"
            ]
        },
        {
            "type": "multiple",
            "difficulty": "medium",
            "category": "General Knowledge",
            "question": "What year was Apple Inc. founded?",
            "correct_answer": "1976",
            "incorrect_answers": [
                "1978",
                "1980",
                "1974"
            ]
        },
        {
            "type": "multiple",
            "difficulty": "medium",
            "category": "General Knowledge",
            "question": "What is the world&#039;s most expensive spice by weight?",
            "correct_answer": "Saffron",
            "incorrect_answers": [
                "Cinnamon",
                "Cardamom",
                "Vanilla"
            ]
        },
        {
            "type": "multiple",
            "difficulty": "medium",
            "category": "General Knowledge",
            "question": "This field is sometimes known as &ldquo;The Dismal Science.&rdquo;",
            "correct_answer": "Economics",
            "incorrect_answers": [
                "Philosophy",
                "Politics",
                "Physics"
            ]
        },
        {
            "type": "multiple",
            "difficulty": "medium",
            "category": "General Knowledge",
            "question": "Which logical fallacy means to attack the character of your opponent rather than their arguments?",
            "correct_answer": "Ad hominem",
            "incorrect_answers": [
                "Post hoc ergo propter hoc",
                "Tu quoque",
                "Argumentum ad populum"
            ]
        },
        {
            "type": "multiple",
            "difficulty": "medium",
            "category": "General Knowledge",
            "question": "What is the name of the very first video uploaded to YouTube?",
            "correct_answer": "Me at the zoo",
            "incorrect_answers": [
                "tribute",
                "carrie rides a truck",
                "Her new puppy from great grandpa vern."
            ]
        },
        {
            "type": "multiple",
            "difficulty": "medium",
            "category": "General Knowledge",
            "question": "On average, Americans consume 100 pounds of what per second?",
            "correct_answer": "Chocolate",
            "incorrect_answers": [
                "Potatoes",
                "Donuts",
                "Cocaine"
            ]
        },
        {
            "type": "multiple",
            "difficulty": "medium",
            "category": "General Knowledge",
            "question": "What name represents the letter &quot;M&quot; in the NATO phonetic alphabet?",
            "correct_answer": "Mike",
            "incorrect_answers": [
                "Matthew",
                "Mark",
                "Max"
            ]
        },
        {
            "type": "multiple",
            "difficulty": "medium",
            "category": "General Knowledge",
            "question": "What is the name of the popular animatronic singing fish prop, singing such hits such as &quot;Don&#039;t Worry, Be Happy&quot;?",
            "correct_answer": "Big Mouth Billy Bass",
            "incorrect_answers": [
                "Big Billy Bass",
                "Singing Fish",
                "Sardeen"
            ]
        },
        {
            "type": "multiple",
            "difficulty": "medium",
            "category": "General Knowledge",
            "question": "Who invented Pastafarianism?",
            "correct_answer": "Bobby Henderson",
            "incorrect_answers": [
                "Eric Tignor",
                "Bill Nye",
                "Zach Soldi"
            ]
        },
        {
            "type": "multiple",
            "difficulty": "medium",
            "category": "General Knowledge",
            "question": "Which Italian automobile manufacturer gained majority control of U.S. automobile manufacturer Chrysler in 2011?",
            "correct_answer": "Fiat",
            "incorrect_answers": [
                "Maserati",
                "Alfa Romeo",
                "Ferrari"
            ]
        },
        {
            "type": "multiple",
            "difficulty": "medium",
            "category": "General Knowledge",
            "question": "A doctor with a PhD is a doctor of what?",
            "correct_answer": "Philosophy",
            "incorrect_answers": [
                "Psychology",
                "Phrenology",
                "Physical Therapy"
            ]
        },
        {
            "type": "multiple",
            "difficulty": "medium",
            "category": "General Knowledge",
            "question": "The Mexican Beer &quot;Corona&quot; is what type of beer?",
            "correct_answer": "Pale Lager",
            "incorrect_answers": [
                "India Pale Ale",
                "Pilfsner",
                "Baltic Porter"
            ]
        },
        {
            "type": "multiple",
            "difficulty": "medium",
            "category": "General Knowledge",
            "question": "Where does water from Poland Spring water bottles come from?",
            "correct_answer": "Maine, United States",
            "incorrect_answers": [
                "Hesse, Germany",
                "Masovia, Poland",
                "Bavaria, Poland"
            ]
        },
        {
            "type": "multiple",
            "difficulty": "medium",
            "category": "General Knowledge",
            "question": "What is real haggis made of?",
            "correct_answer": "Sheep&#039;s Heart, Liver and Lungs",
            "incorrect_answers": [
                "Sheep&#039;s Heart, Kidneys and Lungs",
                "Sheep&#039;s Liver, Kidneys and Eyes",
                "Whole Sheep"
            ]
        },
        {
            "type": "multiple",
            "difficulty": "medium",
            "category": "General Knowledge",
            "question": "Whose greyscale face is on the kappa emoticon on Twitch?",
            "correct_answer": "Josh DeSeno",
            "incorrect_answers": [
                "Justin DeSeno",
                "John DeSeno",
                "Jimmy DeSeno"
            ]
        },
        {
            "type": "multiple",
            "difficulty": "medium",
            "category": "General Knowledge",
            "question": "What does the &quot;G&quot; mean in &quot;G-Man&quot;?",
            "correct_answer": "Government",
            "incorrect_answers": [
                "Going",
                "Ghost",
                "Geronimo"
            ]
        },
        {
            "type": "multiple",
            "difficulty": "medium",
            "category": "General Knowledge",
            "question": "What is the unit of currency in Laos?",
            "correct_answer": "Kip",
            "incorrect_answers": [
                "Ruble",
                "Konra",
                "Dollar"
            ]
        },
        {
            "type": "multiple",
            "difficulty": "medium",
            "category": "General Knowledge",
            "question": "Which of the following Ivy League universities has its official motto in Hebrew as well as in Latin?",
            "correct_answer": "Yale University",
            "incorrect_answers": [
                "Princeton University",
                "Harvard University",
                "Columbia University"
            ]
        },
        {
            "type": "multiple",
            "difficulty": "medium",
            "category": "General Knowledge",
            "question": "What country saw a world record 315 million voters turn out for elections on May 20, 1991?",
            "correct_answer": "India",
            "incorrect_answers": [
                "United States of America",
                "Soviet Union",
                "Poland"
            ]
        },
        {
            "type": "multiple",
            "difficulty": "medium",
            "category": "General Knowledge",
            "question": "What was the destination of the missing flight MH370?",
            "correct_answer": "Beijing",
            "incorrect_answers": [
                "Kuala Lumpur",
                "Singapore",
                "Tokyo"
            ]
        },
        {
            "type": "multiple",
            "difficulty": "medium",
            "category": "General Knowledge",
            "question": "What is the currency of Poland?",
            "correct_answer": "Złoty",
            "incorrect_answers": [
                "Ruble",
                "Euro",
                "Krone"
            ]
        },
        {
            "type": "multiple",
            "difficulty": "medium",
            "category": "General Knowledge",
            "question": "Directly between the Washington Monument and the Reflecting Pool is a memorial to which war?",
            "correct_answer": "World War II",
            "incorrect_answers": [
                "Vietnam War",
                "American Civil War",
                "American Revolutionary War"
            ]
        },
        {
            "type": "multiple",
            "difficulty": "medium",
            "category": "General Knowledge",
            "question": "What was the original name of the search engine &quot;Google&quot;?",
            "correct_answer": "BackRub",
            "incorrect_answers": [
                "CatMassage",
                "SearchPro",
                "Netscape Navigator"
            ]
        },
        {
            "type": "multiple",
            "difficulty": "medium",
            "category": "General Knowledge",
            "question": "What is the star sign of someone born on Valentines day?",
            "correct_answer": "Aquarius",
            "incorrect_answers": [
                "Pisces",
                "Capricorn",
                "Scorpio"
            ]
        },
        {
            "type": "multiple",
            "difficulty": "medium",
            "category": "General Knowledge",
            "question": "What is a dead mall?",
            "correct_answer": "A mall with high vacancy rates or low consumer foot traffic",
            "incorrect_answers": [
                "A mall with no stores",
                "A mall that has been condemed",
                "A mall after business hours"
            ]
        },
        {
            "type": "multiple",
            "difficulty": "medium",
            "category": "General Knowledge",
            "question": "Which item of clothing is usually worn by a Scotsman at a wedding?",
            "correct_answer": "Kilt",
            "incorrect_answers": [
                "Skirt",
                "Dress",
                "Rhobes"
            ]
        },
                {
                    "type": "multiple",
                    "difficulty": "hard",
                    "category": "General Knowledge",
                    "question": "Located in Chile, El Teniente is the world&#039;s largest underground mine for what metal?",
                    "correct_answer": "Copper",
                    "incorrect_answers": [
                        "Iron",
                        "Nickel",
                        "Silver"
                    ]
                },
                {
                    "type": "multiple",
                    "difficulty": "hard",
                    "category": "General Knowledge",
                    "question": "Before the 19th Century, the &quot;Living Room&quot; was originally called the...",
                    "correct_answer": "Parlor",
                    "incorrect_answers": [
                        "Open Room",
                        "Sitting Room",
                        "Loft"
                    ]
                },
                {
                    "type": "multiple",
                    "difficulty": "hard",
                    "category": "General Knowledge",
                    "question": "How many calories are in a 355 ml can of Pepsi Cola?",
                    "correct_answer": "150",
                    "incorrect_answers": [
                        "200",
                        "100",
                        "155"
                    ]
                },
                {
                    "type": "multiple",
                    "difficulty": "hard",
                    "category": "General Knowledge",
                    "question": "When was &quot;YouTube&quot; founded?",
                    "correct_answer": "February 14, 2005",
                    "incorrect_answers": [
                        "May 22, 2004",
                        "September 12, 2005",
                        "July 19, 2009"
                    ]
                },
                {
                    "type": "multiple",
                    "difficulty": "hard",
                    "category": "General Knowledge",
                    "question": "The words &quot;bungalow&quot; and &quot;shampoo&quot; originate from the languages of which country?",
                    "correct_answer": "India",
                    "incorrect_answers": [
                        "Papua New Guinea",
                        "Ethiopia",
                        "China"
                    ]
                },
                {
                    "type": "multiple",
                    "difficulty": "hard",
                    "category": "General Knowledge",
                    "question": "What is the romanized Chinese word for &quot;airplane&quot;?",
                    "correct_answer": "Feiji",
                    "incorrect_answers": [
                        "Qiche",
                        "Zongxian",
                        "Huojian"
                    ]
                },
                {
                    "type": "multiple",
                    "difficulty": "hard",
                    "category": "General Knowledge",
                    "question": "What is the airspeed velocity of an unladen swallow?",
                    "correct_answer": "24 MPH",
                    "incorrect_answers": [
                        "15 MPH",
                        "20 MPH",
                        "200 MPH"
                    ]
                },
                {
                    "type": "multiple",
                    "difficulty": "hard",
                    "category": "General Knowledge",
                    "question": "Named after the mallow flower, mauve is a shade of what?",
                    "correct_answer": "Purple",
                    "incorrect_answers": [
                        "Red",
                        "Brown",
                        "Pink"
                    ]
                },
                {
                    "type": "multiple",
                    "difficulty": "hard",
                    "category": "General Knowledge",
                    "question": "Disney&#039;s Haunted Mansion is home to a trio of Hitchhiking Ghosts. Which of these is NOT one of them?",
                    "correct_answer": "Harry",
                    "incorrect_answers": [
                        "Gus",
                        "Phineas",
                        "Ezra"
                    ]
                },
                {
                    "type": "multiple",
                    "difficulty": "hard",
                    "category": "General Knowledge",
                    "question": "What was the third country to have a McDonald&#039;s restaurant?",
                    "correct_answer": "Costa Rica",
                    "incorrect_answers": [
                        "Japan",
                        "France",
                        "Australia"
                    ]
                },
                {
                    "type": "multiple",
                    "difficulty": "hard",
                    "category": "General Knowledge",
                    "question": "Originally another word for poppy, coquelicot is a shade of what?",
                    "correct_answer": "Red",
                    "incorrect_answers": [
                        "Green",
                        "Blue",
                        "Pink"
                    ]
                },
                {
                    "type": "multiple",
                    "difficulty": "hard",
                    "category": "General Knowledge",
                    "question": "The Quadrangularis Reversum is best described as which of the following?",
                    "correct_answer": "A percussion instrument",
                    "incorrect_answers": [
                        "A building in Oxford University",
                        "A chess move",
                        "A geometric theorem"
                    ]
                },
                {
                    "type": "multiple",
                    "difficulty": "hard",
                    "category": "General Knowledge",
                    "question": "Virtual reality company Oculus VR lost which of it&#039;s co-founders in a freak car accident in 2013?",
                    "correct_answer": "Andrew Scott Reisse",
                    "incorrect_answers": [
                        "Nate Mitchell",
                        "Jack McCauley",
                        "Palmer Luckey"
                    ]
                },
                {
                    "type": "multiple",
                    "difficulty": "hard",
                    "category": "General Knowledge",
                    "question": "Which of the following chemicals are found in eggplant seeds?",
                    "correct_answer": "Nicotine",
                    "incorrect_answers": [
                        "Mescaline",
                        "Cyanide",
                        "Psilocybin"
                    ]
                },
                {
                    "type": "multiple",
                    "difficulty": "hard",
                    "category": "General Knowledge",
                    "question": "What year was the RoboSapien toy robot released?",
                    "correct_answer": "2004",
                    "incorrect_answers": [
                        "2000",
                        "2001",
                        "2006"
                    ]
                },
                {
                    "type": "multiple",
                    "difficulty": "hard",
                    "category": "General Knowledge",
                    "question": "The word &quot;astasia&quot; means which of the following?",
                    "correct_answer": "The inability to stand up",
                    "incorrect_answers": [
                        "The inability to make decisions",
                        "The inability to concentrate on anything",
                        "A feverish desire to rip one&#039;s clothes off"
                    ]
                },
                {
                    "type": "multiple",
                    "difficulty": "hard",
                    "category": "General Knowledge",
                    "question": "Which of these cities does NOT have a United States Minting location?",
                    "correct_answer": "St. Louis, MO",
                    "incorrect_answers": [
                        "San Fransisco, CA",
                        "Philidelphia, PA",
                        "West Point, NY"
                    ]
                },
                {
                    "type": "multiple",
                    "difficulty": "hard",
                    "category": "General Knowledge",
                    "question": "What is the romanized Korean word for &quot;heart&quot;?",
                    "correct_answer": "Simjang",
                    "incorrect_answers": [
                        "Aejeong",
                        "Jeongsin",
                        "Segseu"
                    ]
                },
                {
                    "type": "multiple",
                    "difficulty": "hard",
                    "category": "General Knowledge",
                    "question": "In flight systems, what does the initialism &quot;TCAS&quot; stand for?",
                    "correct_answer": "Traffic Collision Avoidance System",
                    "incorrect_answers": [
                        "Traffic Communication Alert System",
                        "Traffic Configuration Alignment System",
                        "Traffic Call-sign Abbreviation System"
                    ]
                },
                {
                    "type": "multiple",
                    "difficulty": "hard",
                    "category": "General Knowledge",
                    "question": "Which of the following is an existing family in &quot;The Sims&quot;?",
                    "correct_answer": "The Goth Family",
                    "incorrect_answers": [
                        "The Family",
                        "The Simoleon Family",
                        "The Proud Family"
                    ]
                },
                {
                    "type": "multiple",
                    "difficulty": "hard",
                    "category": "General Knowledge",
                    "question": "Which product did Nokia, the telecommunications company, originally sell?",
                    "correct_answer": "Paper",
                    "incorrect_answers": [
                        "Phones",
                        "Computers",
                        "Processors"
                    ]
                },
                {
                    "type": "multiple",
                    "difficulty": "hard",
                    "category": "General Knowledge",
                    "question": "Which of the following languages does NOT use gender as a part of its grammar?",
                    "correct_answer": "Turkish",
                    "incorrect_answers": [
                        "German",
                        "Danish",
                        "Polish"
                    ]
                },
                {
                    "type": "multiple",
                    "difficulty": "hard",
                    "category": "General Knowledge",
                    "question": "Which of the following  British Monarchs never appeared on a circulated pound sterling coin?",
                    "correct_answer": "Edward VIII",
                    "incorrect_answers": [
                        "Victoria",
                        "George VI",
                        "Charles II"
                    ]
                },
                {
                    "type": "multiple",
                    "difficulty": "hard",
                    "category": "General Knowledge",
                    "question": "Which film star has his statue in Leicester Square?",
                    "correct_answer": "Charlie Chaplin",
                    "incorrect_answers": [
                        "Paul Newman",
                        "Rowan Atkinson ",
                        "Alfred Hitchcock"
                    ]
                },
                {
                    "type": "multiple",
                    "difficulty": "hard",
                    "category": "General Knowledge",
                    "question": "Who founded the Khan Academy?",
                    "correct_answer": "Sal Khan",
                    "incorrect_answers": [
                        "Ben Khan",
                        "Kitt Khan",
                        "Adel Khan"
                    ]
                },
                {
                    "type": "multiple",
                    "difficulty": "hard",
                    "category": "General Knowledge",
                    "question": "Which one of these Swedish companies was founded in 1943?",
                    "correct_answer": "IKEA",
                    "incorrect_answers": [
                        "H &amp; M",
                        "Lindex",
                        "Clas Ohlson"
                    ]
                },
                {
                    "type": "multiple",
                    "difficulty": "hard",
                    "category": "General Knowledge",
                    "question": "Sciophobia is the fear of what?",
                    "correct_answer": "Shadows",
                    "incorrect_answers": [
                        "Eating",
                        "Bright lights",
                        "Transportation"
                    ]
                },
                {
                    "type": "multiple",
                    "difficulty": "hard",
                    "category": "General Knowledge",
                    "question": "The word &quot;aprosexia&quot; means which of the following?",
                    "correct_answer": "The inability to concentrate on anything",
                    "incorrect_answers": [
                        "The inability to make decisions",
                        "A feverish desire to rip one&#039;s clothes off",
                        "The inability to stand up"
                    ]
                },
                {
                    "type": "multiple",
                    "difficulty": "hard",
                    "category": "General Knowledge",
                    "question": "In &quot;Battle Cats&quot;, what is Moneko / MISS Moneko&#039;s critical percentage rate?",
                    "correct_answer": "15%",
                    "incorrect_answers": [
                        "20%",
                        "10%",
                        "25%"
                    ]
                },
                {
                    "type": "multiple",
                    "difficulty": "hard",
                    "category": "General Knowledge",
                    "question": "Chartreuse is a color between yellow and what?",
                    "correct_answer": "Green",
                    "incorrect_answers": [
                        "Red",
                        "Black",
                        "Purple"
                    ]
                },
                {
                    "type": "multiple",
                    "difficulty": "hard",
                    "category": "General Knowledge",
                    "question": "What is the weight of a Gold Bar in Fallout: New Vegas?",
                    "correct_answer": "35 Pounds",
                    "incorrect_answers": [
                        "30 Pounds",
                        "40 Pounds",
                        "32.50 Pounds"
                    ]
                },
                {
                    "type": "multiple",
                    "difficulty": "hard",
                    "category": "General Knowledge",
                    "question": "Which musician has collaborated with American producer Porter Robinson and released the 2016 song &quot;Shelter&quot;?",
                    "correct_answer": "Madeon",
                    "incorrect_answers": [
                        "Mat Zo",
                        "deadmau5",
                        "Zedd"
                    ]
                },
                {
                    "type": "multiple",
                    "difficulty": "hard",
                    "category": "General Knowledge",
                    "question": "The Swedish word &quot;Grunka&quot; means what in English?",
                    "correct_answer": "Thing",
                    "incorrect_answers": [
                        "People",
                        "Place",
                        "Pineapple"
                    ]
                },
                {
                    "type": "multiple",
                    "difficulty": "hard",
                    "category": "General Knowledge",
                    "question": "According to the 2014-2015 Australian Bureau of Statistics, what percentage of Australians were born overseas?",
                    "correct_answer": "28%",
                    "incorrect_answers": [
                        "13%",
                        "20%",
                        "7%"
                    ]
                },
                {
                    "type": "multiple",
                    "difficulty": "hard",
                    "category": "General Knowledge",
                    "question": "Electronic music producer Kygo&#039;s popularity skyrocketed after a certain remix. Which song did he remix?",
                    "correct_answer": "Ed Sheeran - I See Fire",
                    "incorrect_answers": [
                        "Marvin Gaye - Sexual Healing",
                        "Coldplay - Midnight",
                        "a-ha - Take On Me"
                    ]
                },
                {
                    "type": "multiple",
                    "difficulty": "hard",
                    "category": "General Knowledge",
                    "question": "Which of these banks are NOT authorized to issue currency notes in Hong Kong?",
                    "correct_answer": "OCBC",
                    "incorrect_answers": [
                        "HSBC",
                        "Standard Chartered",
                        "Bank of China"
                    ]
                },
                {
                    "type": "multiple",
                    "difficulty": "hard",
                    "category": "General Knowledge",
                    "question": "If someone said &quot;you are olid&quot;, what would they mean?",
                    "correct_answer": "You smell extremely unpleasant.",
                    "incorrect_answers": [
                        "You are out of shape/weak.",
                        "Your appearance is repulsive.",
                        "You are incomprehensible/an idiot."
                    ]
                },
                {
                    "type": "multiple",
                    "difficulty": "hard",
                    "category": "General Knowledge",
                    "question": "De Eemhof, Port Zelande and Het Heijderbos are holiday villas owned by what company?",
                    "correct_answer": "Center Parcs",
                    "incorrect_answers": [
                        "Yelloh Village",
                        "Keycamp",
                        "Villa Plus"
                    ]
                },
                {
                    "type": "multiple",
                    "difficulty": "hard",
                    "category": "General Knowledge",
                    "question": "According to Fair Works Australia, how long do you have to work to get Long Service Leave?",
                    "correct_answer": "7 years",
                    "incorrect_answers": [
                        "2 years",
                        "8 years",
                        "6 months"
                    ]
                },
                {
                    "type": "multiple",
                    "difficulty": "hard",
                    "category": "General Knowledge",
                    "question": "What does the Latin phrase &quot;Veni, vidi, vici&quot; translate into English?",
                    "correct_answer": "I came, I saw, I conquered",
                    "incorrect_answers": [
                        "See no evil, hear no evil, speak no evil",
                        "Life, liberty, and happiness",
                        "Past, present, and future"
                    ]
                },
                {
                    "type": "multiple",
                    "difficulty": "hard",
                    "category": "General Knowledge",
                    "question": "How many notes are there on a standard grand piano?",
                    "correct_answer": "88",
                    "incorrect_answers": [
                        "98",
                        "108",
                        "78"
                    ]
                },
                {
                    "type": "multiple",
                    "difficulty": "hard",
                    "category": "General Knowledge",
                    "question": "If you planted the seeds of Quercus robur, what would grow?",
                    "correct_answer": "Trees",
                    "incorrect_answers": [
                        "Grains",
                        "Vegetables",
                        "Flowers"
                    ]
                },
                {
                    "type": "multiple",
                    "difficulty": "hard",
                    "category": "General Knowledge",
                    "question": "What is the romanized Arabic word for &quot;moon&quot;?",
                    "correct_answer": "Qamar",
                    "incorrect_answers": [
                        "Najma",
                        "Kawkab",
                        "Shams"
                    ]
                },
                {
                    "type": "multiple",
                    "difficulty": "hard",
                    "category": "General Knowledge",
                    "question": "In the MMO RPG &quot;Realm of the Mad God&quot;, what dungeon is widely considered to be the most difficult?",
                    "correct_answer": "The Shatter&#039;s",
                    "incorrect_answers": [
                        "Snake Pit",
                        "The Tomb of the Acient&#039;s",
                        "The Puppet Master&#039;s Theater"
                    ]
                },
                {
                    "type": "multiple",
                    "difficulty": "hard",
                    "category": "General Knowledge",
                    "question": "Which of the following is not another name for the eggplant?",
                    "correct_answer": "Potimarron",
                    "incorrect_answers": [
                        "Brinjal",
                        "Guinea Squash",
                        "Melongene"
                    ]
                },
                {
                    "type": "multiple",
                    "difficulty": "hard",
                    "category": "General Knowledge",
                    "question": "In &quot;Resident Evil 3&quot;, how many inventory slots does Jill have at the start of the game?",
                    "correct_answer": "10",
                    "incorrect_answers": [
                        "6",
                        "8",
                        "12"
                    ]
                },
                {
                    "type": "multiple",
                    "difficulty": "hard",
                    "category": "General Knowledge",
                    "question": "The word &quot;abulia&quot; means which of the following?",
                    "correct_answer": "The inability to make decisions",
                    "incorrect_answers": [
                        "The inability to stand up",
                        "The inability to concentrate on anything",
                        "A feverish desire to rip one&#039;s clothes off"
                    ]
                },
                {
                    "type": "multiple",
                    "difficulty": "hard",
                    "category": "General Knowledge",
                    "question": "What type of dog is &#039;Handsome Dan&#039;, the mascot of Yale University?",
                    "correct_answer": "Bulldog",
                    "incorrect_answers": [
                        "Yorkshire Terrier",
                        "Boxer",
                        "Pug"
                    ]
                },
                {
                    "type": "multiple",
                    "difficulty": "hard",
                    "category": "General Knowledge",
                    "question": "Nephelococcygia is the practice of doing what?",
                    "correct_answer": "Finding shapes in clouds",
                    "incorrect_answers": [
                        "Sleeping with your eyes open",
                        "Breaking glass with your voice",
                        "Swimming in freezing water"
                    ]
                },
                {
                    "type": "multiple",
                    "difficulty": "hard",
                    "category": "General Knowledge",
                    "question": "What is the most commonly used noun in the English language?",
                    "correct_answer": "Time",
                    "incorrect_answers": [
                        "Home",
                        "Water",
                        "Man"
                    ]
                }
];

function getQuestions(): Question[] {
    return questions;
}

export { getQuestions, Question };

let game = null;
let found = [];
const cluesElements = document.querySelectorAll('.clues');
const modal = document.getElementById('dialog');
const closeModalButton = modal.querySelector('button');
const modalResult = document.getElementById('result-popup');
const modalFeedback = document.getElementById('feedback');
const closeModalFeedback = modalFeedback.querySelector('button');
const modalStart = document.getElementById('start');
const closeModalStart = modalStart.querySelector('button');

const messages = [
    // {
    //     id: "bear-wall",
    //     title: "Bear",
    //     message: `Nothing to see here...`,
    //     image: "https://raw.githubusercontent.com/lessacs/project-1/main/images/kenney_furniturePack/Isometric/bear_SE.png",
    //     story: []
    // },
    {
        id: "tv",
        title: "TV",
        message: `I would love to rest and watch a movie. Maybe I could prepare myself a juice and some popcorn. I would also need to be sitting confortably...`,
        image: "https://raw.githubusercontent.com/lessacs/project-1/main/images/kenney_furniturePack/Isometric/televisionModern_SE.png",
        story: ["sofa", "blender", "oven"]
    },
    {
        id: "sofa",
        title: "Sofa",
        message: `I just want to rest and read a book while drinking tea... I had a tough day...`,
        image: "https://raw.githubusercontent.com/lessacs/project-1/main/images/kenney_furniturePack/Isometric/loungeSofa_SE.png",
        story: ["bookshelf-books","livingRoom-cup-table"]
    },
    {
        id: "bed-pillow",
        title: "Bed pillow",
        message: `I am tired, lets go to bed... I need a tea first, a good book and to brush my teeth...`,
        image: "https://raw.githubusercontent.com/lessacs/project-1/main/images/kenney_furniturePack/Isometric/pillowLong_SE.png",
        story: ["bathroom-mirror", "bookshelf-books", "livingRoom-cup-table"]
    },
    {
        id: 'bedroom-rug',
        title: "Rug",
        message: `This rug is dirty, I need to clean the bathroom and tidy my flat... Damn, I almost forgot I am running out of clean underwear!`,
        image: "https://raw.githubusercontent.com/lessacs/project-1/main/images/kenney_furniturePack/Isometric/rugRound_SE.png",
        story: ["bathroom-mirror", "washing-machine", "dryer"]
    },
    {
        id: "bathroom-mirror",
        title: "Mirror",
        message: `Time for bed...`,
        image: 'https://raw.githubusercontent.com/lessacs/project-1/main/images/kenney_furniturePack/Isometric/bathroomMirror_SE.png',
        story: ["bed-pillow"]
    },
    {
        id: "nightstand",
        title: "Nightstand",
        message: "Time for bed and lights off. I need to wake up early.",
        image: "https://raw.githubusercontent.com/lessacs/project-1/main/images/kenney_furniturePack/Isometric/cabinetBed_SW.png",
        story: ["bathroom-mirror", "bed-pillow"]
    },
    {
        id: "microwave",
        title: "Microwave",
        message: "I am hungry, let's make a soup.",
        image: "https://raw.githubusercontent.com/lessacs/project-1/main/images/kenney_furniturePack/Isometric/kitchenMicrowave_SE.png",
        story: ["blender", "oven"]
    },
    {
        id: "blender",
        title: "Blender",
        message: "Time for making a smoothie and relaxing in front of the TV...",
        image: "https://raw.githubusercontent.com/lessacs/project-1/main/images/kenney_furniturePack/Isometric/kitchenBlender_SE.png",
        story: ["tv", "sofa"]
    },
    {
        id: "oven",
        title: "Stove",
        message: "Time to cook a soup!",
        image: "https://raw.githubusercontent.com/lessacs/project-1/main/images/kenney_furniturePack/Isometric/kitchenStoveElectric_SE.png",
        story: ["blender"]
    },
    {
        id: "washing-machine",
        title: "Washing machine",
        message: "Let's start a machine while I go back to work.",
        image: "https://raw.githubusercontent.com/lessacs/project-1/main/images/kenney_furniturePack/Isometric/washer_SE.png",
        story: ["laptop"]
    },
    {
        id: "dryer",
        title: "Dryer",
        message: "Washing is done. Time to relax. Let's chill in front of Netflix. I'll make myself a smoothie.",
        image: 'https://raw.githubusercontent.com/lessacs/project-1/main/images/kenney_furniturePack/Isometric/dryer_SE.png',
        story: ["tv", "sofa", "blender"]
    },
    {
        id: "livingRoom-radio",
        title: "Radio",
        message: "Let's put on some nice music and get to work, I have some emails to answer to... Let's not forget my coffee.",
        image: "https://raw.githubusercontent.com/lessacs/project-1/main/images/kenney_furniturePack/Isometric/radio_SE.png",
        story: ["laptop", "livingRoom-cup-table"]
    },
    {
        id: "livingRoom-cup-table",
        title: "Cup",
        message: "One thing that goes well with a hot drink is a good book",
        image: "https://raw.githubusercontent.com/lessacs/project-1/main/images/kenney_furniturePack/Isometric/plantSmall3_SE.png",
        story: ["bookshelf-books"]
    },
    {
        id: "bookshelf-books",
        title: "Books",
        message: "A tea, a book and bedtime. Perfect way to end a great evening!",
        image: "https://raw.githubusercontent.com/lessacs/project-1/main/images/kenney_furniturePack/Isometric/books_SE.png",
        story: ["livingRoom-cup-table", "bed-pillow"]
    },
    {
        id: "laptop",
        title: "Laptop",
        message: "I have a lot of coding to do. It sure would be nice if I was sitting comfortably with a drink in my hand, with nice music playing in the background",
        image: "https://raw.githubusercontent.com/lessacs/project-1/main/images/kenney_furniturePack/Isometric/laptop_SE.png",
        story: ["livingRoom-radio", "sofa", "livingRoom-cup-table"]
    }
];


modalStart.showModal();
closeModalStart.addEventListener('click', () => modalStart.close());


cluesElements.forEach(clue => {
    clue.addEventListener("click", () => {
        const message = messages.find(msg => msg.id === clue.id);
        if (!message) return;

        if (!game) {
            game = [message.id, ...message.story];
            found.push(message.id);
        } else {
            if (game.includes(message.id)) {
                if ( !found.includes(message.id)) {
                    found.push(message.id);
                }
                if (game.length === found.length) {
                    modalResult.querySelector('h3').textContent = 'You win! Congratulations'
                    modalResult.showModal();
                } else {
                    modalFeedback.showModal();
                }
            } else {
                modalResult.querySelector('h3').textContent = 'You lose! Try again!'
                modalResult.showModal();
                }
            return;
        }
        modal.querySelector('h3').textContent = message.title;
        modal.querySelector('p').textContent = message.message;
        modal.querySelector('img').src = message.image;
        modal.showModal();
    })

})

closeModalButton.addEventListener("click", () => modal.close());
closeModalFeedback.addEventListener('click', () => modalFeedback.close());

document.querySelectorAll('.reset').forEach(btn => {
    btn.addEventListener('click', ()=> {
        game = null;
        found = [];
        modalResult.close();
    })
})



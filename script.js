// function togglePopup() {
//     document.getElementById("laptop").classList.toggle("active")
// }
let game = null;
const found = []
const cluesElements = document.querySelectorAll('.clues')
const modal = document.getElementById('dialog')
const closeModalButton = modal.querySelector('button')
const messages = [
    {
        id: "bear-wall",
        title: "Bear",
        message: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
        molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
        numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
        optio, eaque rerum! Provident similique accusantium nemo autem.`,
        image: "https://raw.githubusercontent.com/lessacs/project-1/main/images/kenney_furniturePack/Isometric/bear_SE.png"
    },
    {
        id: "tv",
        title: "tv",
        message: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
        molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
        numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
        optio, eaque rerum! Provident similique accusantium nemo autem.`,
        image: "https://raw.githubusercontent.com/lessacs/project-1/main/images/kenney_furniturePack/Isometric/televisionModern_SE.png"
    },
    {
        id: "sofa",
        title: "sofa",
        message: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
        molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
        numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
        optio, eaque rerum! Provident similique accusantium nemo autem.`,
        image: "https://raw.githubusercontent.com/lessacs/project-1/main/images/kenney_furniturePack/Isometric/loungeSofa_SE.png"
    },
    {
        id: "bed-pillow",
        title: "bed-pillow",
        message: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
        molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
        numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
        optio, eaque rerum! Provident similique accusantium nemo autem.`,
        image: "https://raw.githubusercontent.com/lessacs/project-1/main/images/kenney_furniturePack/Isometric/pillowLong_SE.png"
    },
    {
        id: 'bedroom-rug',
        title: "Rug",
        message: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
        molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
        numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
        optio, eaque rerum! Provident similique accusantium nemo autem.`,
        image: "https://raw.githubusercontent.com/lessacs/project-1/main/images/kenney_furniturePack/Isometric/rugRound_SE.png"
    },
    {
        id: "bathroom-mirror",
        title: "bathroom-mirror",
        message: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
        molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
        numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
        optio, eaque rerum! Provident similique accusantium nemo autem.`,
        image: 'https://raw.githubusercontent.com/lessacs/project-1/main/images/kenney_furniturePack/Isometric/bathroomMirror_SE.png'
    },
    {
        id: "nightstand",
        title: "nightstand",
        message: "",
        image: "https://raw.githubusercontent.com/lessacs/project-1/main/images/kenney_furniturePack/Isometric/cabinetBed_SW.png"
    },
    {
        id: "microwave",
        title: "microwave",
        message: "",
        image: "https://raw.githubusercontent.com/lessacs/project-1/main/images/kenney_furniturePack/Isometric/kitchenMicrowave_SE.png"
    },
    {
        id: "blender",
        title: "blender",
        message: "",
        image: "https://raw.githubusercontent.com/lessacs/project-1/main/images/kenney_furniturePack/Isometric/kitchenBlender_SE.png"
    },
    {
        id: "oven",
        title: "oven",
        message: "",
        image: "https://raw.githubusercontent.com/lessacs/project-1/main/images/kenney_furniturePack/Isometric/kitchenStoveElectric_SE.png"
    },
    {
        id: "washing-machine",
        title: "washing-machine",
        message: "",
        image: "https://raw.githubusercontent.com/lessacs/project-1/main/images/kenney_furniturePack/Isometric/washer_SE.png"
    },
    {
        id: "dryer",
        title: "dryer",
        message: "",
        image: 'https://raw.githubusercontent.com/lessacs/project-1/main/images/kenney_furniturePack/Isometric/dryer_SE.png',
    },
    {
        id: "livingRoom-radio",
        title: "livingRoom-radio",
        message: "",
        image: "https://raw.githubusercontent.com/lessacs/project-1/main/images/kenney_furniturePack/Isometric/radio_SE.png"
    },
    {
        id: "livingRoom-cup-table",
        title: "livingRoom-cup-table",
        message: "One thing that goes well with a hot drink is a good book",
        image: "https://raw.githubusercontent.com/lessacs/project-1/main/images/kenney_furniturePack/Isometric/plantSmall3_SE.png",
        story: ["bookshelf-books"]
    },
    {
        id: "bookshelf-books",
        title: "bookshelf-books",
        messages: "",
        image: "https://raw.githubusercontent.com/lessacs/project-1/main/images/kenney_furniturePack/Isometric/books_SE.png"
    },
    {
        id: "laptop",
        title: "laptop",
        message: "I have a lot of coding to do. It sure would be nice if I was sitting comfortably with a drink in my hand, with nice music playing in the background",
        image: "https://raw.githubusercontent.com/lessacs/project-1/main/images/kenney_furniturePack/Isometric/laptop_SE.png",
        story: ["livingRoom-radio", "sofa", "livingRoom-cup-table"]
    }



]

cluesElements.forEach(clue => {
    clue.addEventListener("click", () => {
        console.log('click')
        const message = messages.find(msg => msg.id === clue.id)
        console.log(clue.id)
        if (!message) return


        console.log(game, message)
        if (!game) {
            game = message.story;
        } else {
            if (game.includes(message.id) && !found.includes(message.id)) {
                //nice
                found.push(message.id);
                if (game.length === found.length) {
                    alert('win')
                } else {
                    alert("nice")

                }
            } else {
                // you lose
                alert("bad")
            }

            return
        }


        modal.querySelector('h3').textContent = message.title
        modal.querySelector('p').textContent = message.message
        modal.querySelector('img').src = message.image
        modal.showModal()
    })

})

closeModalButton.addEventListener("click", () => modal.close())




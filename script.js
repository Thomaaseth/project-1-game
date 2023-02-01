// function togglePopup() {
//     document.getElementById("laptop").classList.toggle("active")
// }
const cluesElements = document.querySelectorAll('.clues')
const modal = document.getElementById('dialog')
const closeModalButton = modal.querySelector('button')
const messages =[
    {
        title: "bear-wall",
        message: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
        molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
        numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
        optio, eaque rerum! Provident similique accusantium nemo autem.`,
        image: "https://raw.githubusercontent.com/lessacs/project-1/main/images/kenney_furniturePack/Isometric/bear_SE.png"
    },
    {
        title: "tv",
        message: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
        molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
        numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
        optio, eaque rerum! Provident similique accusantium nemo autem.`,
        image: "https://raw.githubusercontent.com/lessacs/project-1/main/images/kenney_furniturePack/Isometric/televisionModern_SE.png"
    },
    {
        title: "sofa",
        message: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
        molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
        numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
        optio, eaque rerum! Provident similique accusantium nemo autem.`,
        image: "https://raw.githubusercontent.com/lessacs/project-1/main/images/kenney_furniturePack/Isometric/loungeSofa_SE.png"
    },
    {
        title: "bed-pillow",
        message: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
        molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
        numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
        optio, eaque rerum! Provident similique accusantium nemo autem.`,
        image: "https://raw.githubusercontent.com/lessacs/project-1/main/images/kenney_furniturePack/Isometric/pillowLong_SE.png"
    },
    {
        title: "bedroom-rug",
        message: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
        molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
        numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
        optio, eaque rerum! Provident similique accusantium nemo autem.`,
        image: "https://raw.githubusercontent.com/lessacs/project-1/main/images/kenney_furniturePack/Isometric/rugRound_SE.png"
    },
    {
        title: "bathroom-mirror",
        message:`Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
        molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
        numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
        optio, eaque rerum! Provident similique accusantium nemo autem.`,
        image:'https://raw.githubusercontent.com/lessacs/project-1/main/images/kenney_furniturePack/Isometric/bathroomMirror_SE.png'
    },
    {
        title: "nightstand",
        message: "",
        image:"https://raw.githubusercontent.com/lessacs/project-1/main/images/kenney_furniturePack/Isometric/cabinetBed_SW.png"
    },
    {
        title: "microwave",
        message: "",
        image:"https://raw.githubusercontent.com/lessacs/project-1/main/images/kenney_furniturePack/Isometric/kitchenMicrowave_SE.png"
    },
    {
        title: "blender",
        message: "",
        image: "https://raw.githubusercontent.com/lessacs/project-1/main/images/kenney_furniturePack/Isometric/kitchenBlender_SE.png"
    },
    {
        title: "oven",
        message: "",
        image: "https://raw.githubusercontent.com/lessacs/project-1/main/images/kenney_furniturePack/Isometric/kitchenStoveElectric_SE.png"
    },
    {
        title:"washing-machine",
        message: "",
        image: "https://raw.githubusercontent.com/lessacs/project-1/main/images/kenney_furniturePack/Isometric/washer_SE.png"
    },
    {
        title: "dryer",
        message: "",
        image: 'https://raw.githubusercontent.com/lessacs/project-1/main/images/kenney_furniturePack/Isometric/dryer_SE.png',
    },
    {
        title: "livingRoom-radio",
        message: "",
        image: "https://raw.githubusercontent.com/lessacs/project-1/main/images/kenney_furniturePack/Isometric/radio_SE.png"
    },
    {
        title: "livingRoom-cup-table",
        message: "",
        image: "https://raw.githubusercontent.com/lessacs/project-1/main/images/kenney_furniturePack/Isometric/plantSmall3_SE.png"
    },
    {
        title: "bookshelf-books",
        messages: "",
        image: "https://raw.githubusercontent.com/lessacs/project-1/main/images/kenney_furniturePack/Isometric/books_SE.png"
    },
    {
        title: "laptop",
        message: "",
        image: "https://raw.githubusercontent.com/lessacs/project-1/main/images/kenney_furniturePack/Isometric/laptop_SE.png"
    }



]

cluesElements.forEach(clue => {
    clue.addEventListener("click", () => {
        console.log('click')
        const message = messages.find(msg => msg.title === clue.id)
        console.log(clue.id)
        if(!message) return
        modal.querySelector('h3').textContent = message.title
        modal.querySelector('p').textContent = message.message
        modal.querySelector('img').src = message.image
        modal.showModal()
    })
    
})

closeModalButton.addEventListener("click", () => modal.close())




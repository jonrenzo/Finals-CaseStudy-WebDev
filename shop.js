
const list= document.querySelector(".product-list");
const cartList = document.querySelector(".cart-list");
const total = document.querySelector(".totalPrice");
const body = document.querySelector("body");
const quantity = document.querySelector(".cartCount");


let products = [
    {
        id: 1,
        name: "Pulsar Xlite V3 ES eSports Tournament Ed. Wireless Gaming Mouse (Green) Size2 (PXV3ES24)",
        image: "images/products/mouse1.webp",
        price: 500
    },
    {
        id: 2,
        name: "Akko Ocean Star 3098B Plus Multi-Mode Cherry North-Facing RGB Hot-Swappable Mechanical Keyboard",
        image: "./images/products/keyboard1.webp",
        price: 250
    },
    {
        id: 3,
        name: "Gamesir T4 Cyclone Pro Multi-Platform Wireless Gamepad with Hall Effect Sticks and Triggers (Twilight)",
        image: "./images/products/controller1.webp",
        price: 700
    },
    {
        id: 4,
        name: "Onikuma G52 Space RGB 82 Keys Wired Mechanical Gaming Keyboard (Tea Axis)",
        image: "./images/products/keyboard2.webp",
        price: 790
    },
    {
        id: 5,
        name: "Sony Ult Wear WH-ULT900N Power Sound Wireless Noise Cancelling Headphones",
        image: "./images/products/headset.webp",
        price: 10999
    },
    {
        id: 6,
        name: "Hori XBOX Force Feedback Racing Wheel DLX For XBOX Series X/S / XBOX One (AB05-001A)",
        image: "./images/products/simrace.webp",
        price: 14995
    },
    {
        id: 7,
        name: "Maxx Tech VR Headset Kit for Switch (MXT-SWHVR-2)",
        image: "./images/products/vracc.webp",
        price: 1895
    },
    {
        id: 8,
        name: "Redragon Pulsar Streaming Microphone (Black) (GM303)",
        image: "./images/products/mic.webp",
        price: 1095
    },
    {
        id: 9,
        name: "NZXT kraken 360 360MM AIO Liquid Cooler With LCD Display (Matte Black) (RL-KN360-B1)",
        image: "./images/products/cooler1.webp",
        price: 9495
    },
    {
        id: 10,
        name: "Sony Playstation PS5 Slim Console Disc Version (CFI-2018A01) With Official Playstation Warranty",
        image: "./images/products/ps5.webp",
        price: 30790
    },
    {
        id: 11,
        name: "PS4 Console 1TB (JET BLACK) CUH-2218B B01 REG.3",
        image: "./images/products/ps4.webp",
        price: 17990
    },
    {
        id: 12,
        name: "Xbox Series X Console 1TB SSD",
        image: "./images/products/xbox.webp",
        price: 26450
    },
    {
        id: 13,
        name: "Gigabyte GS32QC 32&#34 QHD (2560x1440) 165Hz 1ms MPRT VA Curved Gaming Monitor",
        image: "./images/products/monitor.webp",
        price: 15950
    },
    {
        id: 14,
        name: "Meta Quest 3 All-in-One VR Gaming Headset (White)",
        image: "./images/products/meta.webp",
        price: 8976
    },
    
    {
        id: 15,
        name: "Nacon Daija Arcade Stick for PS5 & PS4",
        image: "./images/products/joystick.webp",
        price: 27950
    },
    {
        id: 15,
        name: "8BITDO N30 ARCADE STICK FOR SWITCH/ANDROID/WINDOWS/MACOS/STEAM",
        image: "./images/products/joystickk2.webp",
        price: 27950
    },
    {
        id: 16,
        name: "Ultra M520 White Desktop Gaming PC | AMD Ryzen 9 7900X | 64GB RAM | 2TB SSD | RTX 4080",
        image: "./images/products/pc1.webp",
        price: 178675
    },
    {
        id: 17,
        name: "Ultra C700 Desktop Gaming PC | Ryzen 7 5800X3D | 16GB RAM | 2TB SSD | RTX 3080",
        image: "./images/products/pc2.webp",
        price: 135673
    },
    {
        id: 18,
        name: "JBL Quantum Duo Bluetooth Speaker",
        image: "./images/products/speaker.webp",
        price: 5995
    },
    {
        id: 19,
        name: "Thrustmaster Formula Wheel Add-On Ferrari SF1000 Edition",
        image: "./images/products/f1.webp",
        price: 23995
    },
    {
        id: 20,
        name: "Pulsar Superglide Premium Glass Mouse Pad XXL",
        image: "./images/products/mousepad.webp",
        price: 3987
    },
    {
        id: 21,
        name: "Cooler Master MWE 650 Bronze V2 230V 650W 80+ Non Modular Power Supply",
        image: "./images/products/psu.webp",
        price: 3270
    },
    {
        id: 22,
        name: "Mickey Mouse Gaming Chair (N-MKGC)",
        image: "./images/products/chair.webp",
        price: 13995
    },
    {
        id: 23,
        name: "Seagate Game Drive 2TB HDD USB 3.0 for PS5 & PS4 (STLV2000301)",
        image: "./images/products/tb.webp",
        price: 5295
    }
]

const listCart = [];

const initApp = () => {
    products.forEach((value, key) =>{
        let newDiv = document.createElement("div");
        newDiv.classList.add("item");
        newDiv.innerHTML = `
        <div class="bg-white p-4 shadow rounded h-full flex flex-col justify-evenly">
        <img src="${value.image}" class="mb-3 transition duration-500 hover:scale-110">
        <p id="itemPrice" class="text-current font-semibold font-poppins">₱${value.price.toLocaleString()}</p>
        <p id="itemName" class="font-semibold">${value.name}</p>
        <button onclick="addToCart(${key})" class="btn btn-secondary add-to-cart" style="background-color: #00935f;">Add To Cart <i class="fa-solid fa-cart-shopping fa-sm"></i></button>                
        </div>
        `;
        list.appendChild(newDiv);
    })
}
initApp();

let totalPrice = 0;

const addToCart = (key) => {
    if (listCart[key] == null) {
        listCart[key] = JSON.parse(JSON.stringify(products[key]));
        listCart[key].quantity = 1;
    } else {
        listCart[key].quantity++;
    }
    totalPrice += listCart[key].price;
    reloadCart();
}

const removeItem = (key) =>{
    totalPrice -= listCart[key].price;
    delete listCart[key];
    reloadCart();
}

const changeQuantity = (key, quantity) =>{
    const item = listCart[key];
    const oldQuantity = item.quantity;
    if(quantity == 0){
        delete listCart[key];
        totalPrice -= item.price * oldQuantity;
    } else {
        item.quantity = parseInt(quantity);
        totalPrice += item.price * (quantity - oldQuantity);
    }
    reloadCart();
}

const reloadCart = () => {
    cartList.innerHTML = "";
    let count = 0;

    listCart.forEach((value, key) =>{
        if(value != null){
            let newDiv = document.createElement("div");
            newDiv.innerHTML = `
                <div class="cartItem flex items-center justify-evenly space-x-5 mb-2 bg-gray-50 hover:bg-gray-200 p-2 cursor-pointer rounded-md border border-gray-300 transition-colors duration-300">
                    <div class="flex items-center">
                      <img src="${value.image}" alt="">
                    </div>

                    <div class="">
                      <h2 class="font-semibold font-poppins text-sm">${value.name}</h2>
                      <p class="text-red-400 text-sm font-poppins">₱<span class="cartPrice">${value.price}</span></p>
                    </div>

                    <div class="flex items-end justify-end">
                    <input type="number" class="cartQuantity h-8 w-12 rounded border-gray-200 bg-gray-100 p-0 text-center text-xs [-moz-appearance:_textfield] focus:outline-none [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none font-poppins text-black" onchange="changeQuantity(${key}, this.value)" value="${value.quantity}">
                      <button class="p-2 hover:text-red-500 btn-trash" onclick="removeItem(${key})">
                        <i class="fa-solid fa-trash"></i>
                      </button>
                    </div>
                </div>
            `;
            cartList.appendChild(newDiv);
            count += value.quantity;
        }
    })
    
    total.innerText =  "₱"+ totalPrice.toLocaleString();
    quantity.innerText = count;
}


function isNumberKey(evt) {
    var charCode = (evt.which) ? evt.which : event.keyCode;
    if ((charCode < 48 || charCode > 57))
        return false;
    return true;
}
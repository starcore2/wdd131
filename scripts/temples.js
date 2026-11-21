const burger_button = document.querySelector("#menu");
const hamburger = document.querySelector("#hamburger");
const templeInjectionSite = document.querySelector(".templegroup")
const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    // Add more temple objects here...
    {
        templeName: "Oklahoma City Oklahoma",
        location: "Yukon, Oklahoma, United States",
        dedicated: "2000, July, 30",
        area: 10890,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/oklahoma-city-oklahoma/400x250/1-Oklahoma-City-Temple-2231521.jpg",
    },
    {
        templeName: "Anchorage Alaska",
        location: "Anchorage, Alaska, United States",
        dedicated: "1999, January, 9",
        area: 30000,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/anchorage-alaska/320x180/anchorage-temple-lds-253274-wallpaper.jpg",
    },
    {
        templeName: "Houston Texas",
        location: "Klein, Texas, United States",
        dedicated: "1998, June, 13",
        area: 33970,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/houston-texas/2018/400x250/houston-temple04.jpg",
    },

];
const oldCheck = 1900;
const newCheck = 2000;
const largeCheck = 90000;
const smallCheck = 10000;
const homeButton = document.querySelector("#home"); //0
const oldButton = document.querySelector("#old"); //1
const newButton = document.querySelector("#new"); //2
const largeButton = document.querySelector("#large"); //3
const smallButton = document.querySelector("#small"); //4
let state = 0 // This is to skip running code on an already sorted list

burger_button.addEventListener('click', () => {
    burger_button.classList.toggle('open');
    hamburger.classList.toggle('open');
});

/**
 *  <div class="card">
        <h2 class="name"> </h2>
        <p class="location">Location: </p>
        <p class="dedicated">Dedicated: </p>
        <p class="size">Size: </p>
        <img src="" alt="" loading="lazy">
    </div>
 * 
 */
// templeName
// location
// dedicated
// area
// img url

let deckOfCards = "";
function createTempleCards(templeArray) {
    /**
     * this converts the temple array into a card to display.
     */
    let cardStock = "";
    templeArray.forEach(element => {
        cardStock += `<div class="card">
        <h2 class="name">${element.templeName}</h2>
        <p class="location">Location: ${element.location}</p>
        <p class="dedicated">Dedicated: ${element.dedicated}</p>
        <p class="size">Size: ${element.area} sq ft</p>
        <img src="${element.imageUrl}" alt="A photo of ${element.templeName} Temple" loading="lazy">
    </div>`
    });
    return cardStock;
};

function filterTemples(templeArrayValue, value, larger) {
    /**
     * if larger is true it uses templeArrayValue > value
     * else it uses the templeArrayValue < value.
     * This will return a true or false.
     * returns false by default.
     */

    if (larger) {
        if (templeArrayValue > value) {
            return true
        }
        else { return false }
    }
    else {
        if (templeArrayValue < value) {
            return true
        }
        else { return false }
    }

};

function extractYear(templeDedicatedValue) {
    return parseInt(templeDedicatedValue.dedicated);
    // Just in case I need to change the extraction method.
    //This should just grab the year if the internet is to be believed 
    // Parse should give up when it see the ,
};

// function extractArea(templeDedicatedValue){
//     return parseInt(templeDedicatedValue.area)
// }


function newTempleArrayYear(templeArray, check, larger) {
    let newTempleArray = [];
    templeArray.forEach(element => {
        if (filterTemples(extractYear(element), check, larger)) {
            newTempleArray.push(element);
        }
    })
    let newDeckOfCards = "";
    newDeckOfCards = createTempleCards(newTempleArray);
    return newDeckOfCards;
}

function newTempleArrayArea(templeArray, check, larger) {
    let newTempleArray = []
    templeArray.forEach(element => {
        if (filterTemples(element.area, check, larger)) {
            newTempleArray.push(element);
        }
    });
    let newDeckOfCards = "";
    newDeckOfCards = createTempleCards(newTempleArray);
    return newDeckOfCards;
}


deckOfCards = createTempleCards(temples);

//deckOfCards = newTempleArrayYear(temples, oldCheck, false)

//deckOfCards = newTempleArrayYear(temples, newCheck, true)

//deckOfCards = newTempleArrayArea(temples, largeCheck, true)

// deckOfCards = newTempleArrayArea(temples, smallCheck, false)

templeInjectionSite.innerHTML = deckOfCards;

homeButton.addEventListener('click', () => {
    if (state != 0) {
        state = 0;
        deckOfCards = createTempleCards(temples);
        templeInjectionSite.innerHTML = deckOfCards;
    }
});
oldButton.addEventListener('click', () => {
    if (state != 1) {
        state = 1;
        deckOfCards = newTempleArrayYear(temples, oldCheck, false);
        templeInjectionSite.innerHTML = deckOfCards;
    }
});
newButton.addEventListener('click', () => {
    if (state != 2) {
        state = 2;
        deckOfCards = newTempleArrayYear(temples, newCheck, true);
        templeInjectionSite.innerHTML = deckOfCards;
    }
});
largeButton.addEventListener('click', () => {
    if (state != 3) {
        state = 3;
        deckOfCards = newTempleArrayArea(temples, largeCheck, true);
        templeInjectionSite.innerHTML = deckOfCards;
    }
});
smallButton.addEventListener('click', () => {
    if (state != 4) {
        state = 4;
        deckOfCards = newTempleArrayArea(temples, smallCheck, false);
        templeInjectionSite.innerHTML = deckOfCards;
    }
});

/* W05: Programming Tasks */

/* Declare and initialize global variables */

const templesElement = document.querySelector("#temples");
let templeList = [];

/* async displayTemples Function */

const displayTemples = (temples) => {
    temples.forEach(temple => {
        let articleElement = document.createElement("article");

        let h3Element = document.createElement("h3");
        h3Element.textContent = temple.templeName;

        let imgElement = document.createElement("img");
        imgElement.setAttribute("src", temple.imageUrl);
        imgElement.setAttribute("alt", temple.location);

        articleElement.appendChild(h3Element);
        articleElement.appendChild(imgElement);

        templesElement.appendChild(articleElement);
    });
};

/* async getTemples Function using fetch()*/

const getTemples = async () => {
    const response = await fetch("https://byui-cse.github.io/cse121b-ww-course/resources/temples.json");
    if (response.ok) {
        templeList = await response.json();

        displayTemples(templeList);
    }
};

/* reset Function */

const reset = () => {
    templesElement.innerHTML = "";
};

/* filterTemples Function */

const filterTemples = (temples) => {
    reset();

    let filter = document.querySelector("#filtered").value;
    switch (filter) {
        case "utah":
            displayTemples(temples.filter((temple) => temple.location.includes("Utah")));
            break;
        case "notutah":
            displayTemples(temples.filter((temple) => !temple.location.includes("Utah")));
            break;
        case "older":
            displayTemples(temples.filter((temple) => new Date(temple.dedicated) < new Date(1950, 0, 1)));
            break;
        case "all":
            displayTemples(temples);
            break;
    }
};

/* Event Listener */

document.querySelector("#filtered").addEventListener("change", () => {
    filterTemples(templeList);
});

getTemples();
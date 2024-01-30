/* LESSON 3 - Programming Tasks */

/* Profile Object  */

let myProfile = {
    name: "Luismary Mariño",
    photo: "images/pic2.jpg",
    favoriteFoods: ["Arepas", "Pizza", "Fried Rice", "Chocolate Chip Cookies"],
    hobbies: ["Reading", "Watching TV", "Walking"],
    placesLived: []
};

/* Populate Profile Object with placesLive objects */

myProfile.placesLived.push({
    place: "Monagas, VEN",
    length: "19 years"
})

myProfile.placesLived.push({
    place: "West Flanders, BE",
    length: "4 months"
})

/* DOM Manipulation - Output */

/* Name */

document.querySelector("#name").textContent = myProfile.name;

/* Photo with attributes */

document.querySelector("img").setAttribute("src", myProfile.photo);
document.querySelector("img").setAttribute("alt", myProfile.name);

/* Favorite Foods List*/

myProfile.favoriteFoods.forEach((food) => {
    let listElement = document.createElement("li");
    listElement.textContent = food;
    document.querySelector("#favorite-foods").appendChild(listElement);
});

/* Hobbies List */

myProfile.hobbies.forEach((hobby) => {
    let listElement = document.createElement("li");
    listElement.textContent = hobby;
    document.querySelector("#hobbies").appendChild(listElement);
});

/* Places Lived DataList */

myProfile.placesLived.forEach((item) =>{
    let dtElement = document.createElement("dt");
    dtElement.textContent = item.place;

    let ddElement = document.createElement("dd");
    ddElement.textContent = item.length;

    document.querySelector("#places-lived").appendChild(dtElement);
    document.querySelector("#places-lived").appendChild(ddElement);
});



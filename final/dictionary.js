// Final Project - Online Dictionary

// declare and initialize global variables
const defElement = document.querySelector("#definitions");
let defList = [];

const buildSrc = () => {
    //builds and returns the source of the json file with definition
    let word = document.querySelector("input").value;
    let src = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
    return src;
};

const getDef = async () => {
    //async function using fetch to get the definition
    const response = await fetch(buildSrc());
    if (response.ok) {
        defList = await response.json();

        console.log(defList);

        displayDef(defList);
    } else {
        //word was not found
        notAWord();
    }
};

const displayDef = (def) => {
    //displays the information about the desired word
    reset();

    //display the word as title
    let h2Element = document.createElement("h2");
    h2Element.textContent = def[0].word;

    let h4Element = document.createElement("h4");
    h4Element.textContent = "Definition of";

    defElement.append(h4Element, h2Element);

    //for each of the meanings, create an section element with the part of speech as heading and definitions as paragraph
    def[0].meanings.forEach(meaning => {
        let sectionElement = document.createElement("section");

        let h3Element = document.createElement("h3");
        h3Element.textContent = meaning.partOfSpeech;
        sectionElement.appendChild(h3Element);
        
        meaning.definitions.forEach(item => {
            let pElement = document.createElement("p");
            pElement.innerHTML += `<b>Definition:</b> ${item.definition}`;
            
            //if the definition includes an example, add it to the paragraph
            if ("example" in item){
                pElement.innerHTML += `<i>Example: ${item.example}</i>`
            }

           sectionElement.appendChild(pElement);
        })
        
        defElement.appendChild(sectionElement);
   });
};

const notAWord = () => {
    //if the input is not an existing word, display a message
    reset();

    let pElement = document.createElement("p");
    pElement.innerHTML = "It seems like the word you typed <b>does not exist</b>. Check your spelling and try again.";

    pElement.setAttribute("id", "inputError");

    defElement.appendChild(pElement);
}

const reset = () => {
    //clears the html of the div element
    defElement.innerHTML = "";
}

// event listener for search button
document.querySelector("button").addEventListener("click", getDef);

// event listener for enter key
document.querySelector("input").addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
        document.querySelector("button").click();
    }
});
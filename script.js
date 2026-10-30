// create an array containing with variable moods and emojis
const moods = [
    { emoji: "😊", name: "Happy" },
    { emoji: "😢", name: "Sad" },
    { emoji: "😡", name: "Angry" },
];

// get select mood from url 
const moodName = window.location.search.split("=")[1];
const selectedMood = document.getElementById("selectedMood");


for (let i = 0; i < moods.length; i++) {
    if (moods[i].name === moodName) {
        selectedMood.textContent = moods[i].emoji + " " + moods[i].name;
    }
}

function changeHeading() {
    document.getElementById("title").textContent = "Welcome to My Little Journal!";
}

const title = document.getElementById("title");

if (title) {
    changeHeading();
}

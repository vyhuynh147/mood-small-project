const moods = [
    { emoji: "😊", name: "Happy" },
    { emoji: "😢", name: "Sad" },
    { emoji: "😡", name: "Angry" },
];


const moodName = window.location.search.split("=")[1];

const selectedMood = document.getElementById("selectedMood");

for (let i = 0; i < moods.length; i++) {
    if (moods[i].name === moodName) {
        selectedMood.textContent = moods[i].emoji + " " + moods[i].name;
    }
}
const planets = [
    {
        name: "Mercury",
        size: 9,
        distance: 75,
        color: "#aaa49b",
        speed: 4.1,
    },
    {
        name: "Venus",
        size: 15,
        distance: 115,
        color: "#e6b66b",
        speed: 1.6,
    },
    {
        name: "Earth",
        size: 17, 
        distance: 160,
        color: "#3489e8",
        speed: 1,
    },
    {
        name: "Mars",
        size: 13,
        distance: 205,
        color: "#c45b42",
        speed: 0.53,
    },
    {
        name: "Jupiter",
        size: 34,
        distance: 290,
        color: "#d4a77b",
        speed: 0.084,
    },
    {
        name: "Saturn",
        size: 29,
        distance: 365,
        color: "#dfc18b",
        speed: 0.034,
    },
    {
        name: "Uranus",
        size: 22,
        distance: 415,
        color: "#79d4d6",
        speed: 0.012,
    },
    {
        name: "Neptune",
        size: 21,
        distance: 465,
        color: "#4269d8",
        speed: 0.006,
    }
];

const container = document.getElementById("planets");
const info = document.getElementById("info");

let speedMultiplier = 1;
let planetElements = [];

// Create planets and their orbits

planets.forEach((planet, index) => {
    
    // Orbit circle
    const orbit = document.createElement("div");
    orbit.className = "orbit";

    orbit.style.width = planet.distance * 2 + "px";
    orbit.style.height = planet.distance * 2 + "px";

    container.appendChild(orbit);

    // Rotating container
    const rotating = document.createElement("div");
    rotating.className = "planet-container";

    rotating.style.animationDuration =
        (10 / planet.speed) + "s";

    // Planet
    const body = document.createElement("div");
    body.className = "planet";

    body.style.width = planet.size + "px";
    body.style.height = planet.size + "px";
    body.style.background = planet.color;

    body.style.left = planet.distance + "px";
    body.style.top = "0px";

    body.style.boxShadow =
        "inset -4px -3px 7px rgba(0,0,0,0.5)";

    rotating.appendChild(body);
    container.appendChild(rotating);

    planetElements.push(rotating);
});



document.addEventListener("DOMContentLoaded", function() {
    // Data for each airport
    const airports = [
        { name: "Keflavík International Airport", src: "Main page pics/Iceland/iceland1.png", top: "15.62%", left: "26.77%" },
        { name: "Vestmannaeyjar Airport", src: "Main page pics/Iceland/iceland2.png", top: "12.47%", left: "31.69%" },
        { name: "Hornafjörður Airport", src: "Main page pics/Iceland/iceland3.png", top: "10.82%", left: "21.73%" },
        { name: "Egilsstaðir Airport", src: "Main page pics/Iceland/iceland4.png", top: "6.15%", left: "27.48%" },
        { name: "Vopnafjörður Airport", src: "Main page pics/Iceland/iceland5.png", top: "4.66%", left: "34.14%" },
        { name: "Akureyri Airport", src: "Main page pics/Iceland/iceland6.png", top: "3.30%", left: "20.20%" },
        { name: "Malmö Airport", src: "Main page pics/Sweden/sweden1.png", top: "81.41%", left: "52.31%" },
        { name: "Gothenburg-Landvetter Airport", src: "Main page pics/Sweden/sweden2.png", top: "73.15%", left: "48.88%" },
        { name: "Växjö Airport", src: "Main page pics/Sweden/sweden3.png", top: "67.44%", left: "56.07%" },
        { name: "Kalmar Airport", src: "Main page pics/Sweden/sweden4.png", top: "59.78%", left: "53.20%" },
        { name: "Visby Airport", src: "Main page pics/Sweden/sweden5.png", top: "49.16%", left: "51.98%" },
        { name: "Stockholm-Bromma Airport", src: "Main page pics/Sweden/sweden6.png", top: "44.44%", left: "59.39%" },
        { name: "Stockholm-Arlanda Airport", src: "Main page pics/Sweden/sweden7.png", top: "35.59%", left: "63.48%" },
        { name: "Östersund Airport", src: "Main page pics/Sweden/sweden8.png", top: "33.82%", left: "56.52%" },
        { name: "Skellefteå Airport", src: "Main page pics/Sweden/sweden9.png", top: "25.37%", left: "67.90%" },
        { name: "Luleå Airport", src: "Main page pics/Sweden/sweden10.png", top: "23.20%", left: "58.61%" },
        { name: "Kiruna Airportt", src: "Main page pics/Sweden/sweden11.png", top: "18.48%", left: "64.25%" },
        { name: "Kristiansand Airport", src: "Main page pics/Norway/norway1.png", top: "73.75%", left: "36.93%" },
        { name: "Oslo Airport", src: "Main page pics/Norway/norway2.png", top: "59.93%", left: "36.08%" },
        { name: "Bergen Airport", src: "Main page pics/Norway/norway3.png", top: "56.18%", left: "43.60%" },
        { name: "Florø Airport", src: "Main page pics/Norway/norway4.png", top: "40.26%", left: "46.74%" },
        { name: "Trondheim Airport", src: "Main page pics/Norway/norway5.png", top: "26.29%", left: "51.22%" },
        { name: "Bodø Airport", src: "Main page pics/Norway/norway6.png", top: "8.71%", left: "60.75%" },
        { name: "Bardufoss Airport", src: "Main page pics/Norway/norway7.png", top: "6.76%", left: "72.85%" },
        { name: "Harstad Airport", src: "Main page pics/Norway/norway8.png", top: "4.96%", left: "67.29%" },
        { name: "Helsinki-Vantaa Airport", src: "Main page pics/Finland/finland1.png", top: "64.84%", left: "72.50%" },
        { name: "Lappeenranta Airport", src: "Main page pics/Finland/finland2.png", top: "60.93%", left: "78.40%" },
        { name: "Tampere-Pirkkala Airport", src: "Main page pics/Finland/finland3.png", top: "56.69%", left: "68.86%" },
        { name: "Jyväskylä Airport", src: "Main page pics/Finland/finland4.png", top: "55.02%", left: "74.16%" },
        { name: "Kuopio Airport", src: "Main page pics/Finland/finland5.png", top: "51.11%", left: "81.16%" },
        { name: "Oulu Airport", src: "Main page pics/Finland/finland6.png", top: "44.77%", left: "74.88%" },
        { name: "Kajaani Airport", src: "Main page pics/Finland/finland7.png", top: "36.38%", left: "79.53%" },
        { name: "Kuusamo Airport", src: "Main page pics/Finland/finland8.png", top: "20.31%", left: "80.15%" },
        { name: "Kittilä Airport", src: "Main page pics/Finland/finland9.png", top: "19.10%", left: "73.75%" },
        { name: "Ivalo Airport", src: "Main page pics/Finland/finland10.png", top: "7.81%", left: "78.40%" },
        { name: "Rovaniemi", src: "Main page pics/Finland/finland11.png", top: "28.79%", left: "76.14%" },
        { name: "Copenhagen Airport", src: "Main page pics/Denmark/denmark1.png", top: "93.13%", left: "46.00%" },
        { name: "Vojens Airport", src: "Main page pics/Denmark/denmark2.png", top: "92.08%", left: "40.05%" },
        { name: "Karup Airport", src: "Main page pics/Denmark/denmark3.png", top: "85.50%", left: "40.03%" }
    ];

    // Container for the airport icons
    const container = document.getElementById("airport-container");

    // Loop through each airport and create HTML elements
    airports.forEach(airport => {
        // div each airport
        const airportDiv = document.createElement("div");
        airportDiv.classList.add("airport");

        // img element for the airport icon
        const airportImg = document.createElement("img");
        airportImg.src = airport.src;
        airportImg.alt = airport.name;
        airportImg.classList.add("airport-icon");

        // top and left positioning
        airportDiv.style.top = airport.top;
        airportDiv.style.left = airport.left;

        // Create a tooltip element for the name
        const tooltip = document.createElement("div");
        tooltip.classList.add("tooltip");
        tooltip.textContent = airport.name;

        // Append the airport icon to the div
        airportDiv.appendChild(airportImg);
        airportDiv.appendChild(tooltip);

        // Append the airport div to the container
        container.appendChild(airportDiv);
    });
});


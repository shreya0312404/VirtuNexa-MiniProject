const predefinedPlants = [
    {
        "id": 1,
        "name": "Aloe Vera",
        "watering_frequency": 3,
        "pruning_frequency": 30,
        "fertilizing_frequency": 42,
        "sunlight": "Full Sun",
        "description": "Aloe Vera is widely known for its medicinal properties, especially for skin care."
    },
    {
        "id": 2,
        "name": "Basil (Tulsi)",
        "watering_frequency": 3,
        "pruning_frequency": 30,
        "fertilizing_frequency": 15,
        "sunlight": "Full Sun",
        "description": "Tulsi is a sacred plant in India, used in Ayurvedic medicine and worship."
    },
    {
        "id": 3,
        "name": "Marigold",
        "watering_frequency": 5,
        "pruning_frequency": 60,
        "fertilizing_frequency": 30,
        "sunlight": "Full Sun",
        "description": "Marigolds are vibrant flowers commonly used in decorations and religious ceremonies."
    },
    {
        "id": 4,
        "name": "Jasmine",
        "watering_frequency": 7,
        "pruning_frequency": 60,
        "fertilizing_frequency": 30,
        "sunlight": "Full Sun to Partial Shade",
        "description": "Jasmine is known for its fragrant white or yellow flowers, used in perfumes and traditional rituals."
    },
    {
        "id": 5,
        "name": "Neem",
        "watering_frequency": 7,
        "pruning_frequency": 180,
        "fertilizing_frequency": 60,
        "sunlight": "Full Sun",
        "description": "Neem is a medicinal plant known for its antibacterial and anti-inflammatory properties."
    },
    {
        "id": 6,
        "name": "Henna (Mehndi)",
        "watering_frequency": 5,
        "pruning_frequency": 30,
        "fertilizing_frequency": 30,
        "sunlight": "Full Sun",
        "description": "Henna is used for temporary body art and has medicinal properties."
    },
    {
        "id": 7,
        "name": "Tulip",
        "watering_frequency": 5,
        "pruning_frequency": 60,
        "fertilizing_frequency": 30,
        "sunlight": "Full Sun",
        "description": "Tulips are popular flowers with bright, colorful blooms that are widely grown in gardens."
    },
    {
        "id": 8,
        "name": "Lily",
        "watering_frequency": 7,
        "pruning_frequency": 60,
        "fertilizing_frequency": 30,
        "sunlight": "Full Sun to Partial Shade",
        "description": "Lily is a beautiful flowering plant, popular in gardens and as cut flowers."
    },
    {
        "id": 9,
        "name": "Hibiscus",
        "watering_frequency": 5,
        "pruning_frequency": 30,
        "fertilizing_frequency": 30,
        "sunlight": "Full Sun",
        "description": "Hibiscus flowers are known for their large, colorful blooms and are used in herbal teas."
    },
    {
        "id": 10,
        "name": "Mango Tree",
        "watering_frequency": 10,
        "pruning_frequency": 365,
        "fertilizing_frequency": 60,
        "sunlight": "Full Sun",
        "description": "The mango tree is widely grown for its delicious fruits, which are also important in cultural rituals."
    },
    {
        "id": 11,
        "name": "Banana Plant",
        "watering_frequency": 7,
        "pruning_frequency": 180,
        "fertilizing_frequency": 30,
        "sunlight": "Full Sun",
        "description": "Banana plants are grown for their nutritious fruit and large leaves."
    },
    {
        "id": 12,
        "name": "Guava Tree",
        "watering_frequency": 7,
        "pruning_frequency": 180,
        "fertilizing_frequency": 30,
        "sunlight": "Full Sun",
        "description": "Guava trees produce sweet and tangy fruits rich in Vitamin C."
    },
    {
        "id": 13,
        "name": "Curry Leaf Plant",
        "watering_frequency": 5,
        "pruning_frequency": 30,
        "fertilizing_frequency": 30,
        "sunlight": "Full Sun",
        "description": "Curry leaves are commonly used in Indian cooking for their distinct flavor."
    },
    {
        "id": 14,
        "name": "Chili Pepper Plant",
        "watering_frequency": 5,
        "pruning_frequency": 30,
        "fertilizing_frequency": 30,
        "sunlight": "Full Sun",
        "description": "Chili peppers are a common ingredient in Indian cuisine, known for their spiciness."
    },
    {
        "id": 15,
        "name": "Papaya Tree",
        "watering_frequency": 7,
        "pruning_frequency": 180,
        "fertilizing_frequency": 60,
        "sunlight": "Full Sun",
        "description": "Papaya trees are grown for their sweet, tropical fruit."
    },
    {
        "id": 16,
        "name": "Moringa (Drumstick Tree)",
        "watering_frequency": 7,
        "pruning_frequency": 180,
        "fertilizing_frequency": 60,
        "sunlight": "Full Sun",
        "description": "Moringa is known for its highly nutritious leaves and is used in various traditional medicines."
    },
    {
        "id": 17,
        "name": "Champa",
        "watering_frequency": 7,
        "pruning_frequency": 180,
        "fertilizing_frequency": 60,
        "sunlight": "Full Sun",
        "description": "Champa is a fragrant flowering tree, often used in religious and cultural practices."
    },
    {
        "id": 18,
        "name": "Coconut Tree",
        "watering_frequency": 10,
        "pruning_frequency": 365,
        "fertilizing_frequency": 60,
        "sunlight": "Full Sun",
        "description": "Coconut trees are widely grown for their edible fruit and are used in cooking, oil, and religious ceremonies."
    },
    {
        "id": 19,
        "name": "Lotus",
        "watering_frequency": 7,
        "pruning_frequency": 180,
        "fertilizing_frequency": 30,
        "sunlight": "Full Sun",
        "description": "The lotus is a sacred flower often used in Hindu and Buddhist symbolism."
    },
    {
        "id": 20,
        "name": "Bamboo",
        "watering_frequency": 7,
        "pruning_frequency": 180,
        "fertilizing_frequency": 30,
        "sunlight": "Full Sun to Partial Shade",
        "description": "Bamboo is a versatile plant used for construction, crafting, and as a decorative element."
    },
    {
        "id": 21,
        "name": "Peepal Tree",
        "watering_frequency": 10,
        "pruning_frequency": 365,
        "fertilizing_frequency": 60,
        "sunlight": "Full Sun",
        "description": "The Peepal tree is considered sacred in Hinduism and Buddhism."
    },
    {
        "id": 22,
        "name": "Bo Tree",
        "watering_frequency": 10,
        "pruning_frequency": 365,
        "fertilizing_frequency": 60,
        "sunlight": "Full Sun",
        "description": "The Bo tree is known as the tree under which Buddha attained enlightenment."
    },
    {
        "id": 23,
        "name": "Ashoka Tree",
        "watering_frequency": 7,
        "pruning_frequency": 180,
        "fertilizing_frequency": 60,
        "sunlight": "Full Sun",
        "description": "Ashoka tree is considered auspicious and is used in various religious rituals."
    },
    {
        "id": 24,
        "name": "Sandalwood Tree",
        "watering_frequency": 7,
        "pruning_frequency": 180,
        "fertilizing_frequency": 60,
        "sunlight": "Full Sun",
        "description": "Sandalwood is known for its fragrant wood, which is used in incense and cosmetics."
    },
    {
        "id": 25,
        "name": "Bael Tree",
        "watering_frequency": 7,
        "pruning_frequency": 180,
        "fertilizing_frequency": 60,
        "sunlight": "Full Sun",
        "description": "Bael tree is sacred and its fruit is used in Hindu rituals and Ayurvedic medicine."
    },
    {
        "id": 26,
        "name": "Neem Tree",
        "watering_frequency": 7,
        "pruning_frequency": 180,
        "fertilizing_frequency": 60,
        "sunlight": "Full Sun",
        "description": "Neem trees have medicinal properties and are used in natural remedies."
    },
    {
        "id": 27,
        "name": "Tamarind Tree",
        "watering_frequency": 7,
        "pruning_frequency": 180,
        "fertilizing_frequency": 60,
        "sunlight": "Full Sun",
        "description": "Tamarind trees produce sour fruits commonly used in Indian cuisine."
    },
    {
        "id": 28,
        "name": "Indian Gooseberry (Amla)",
        "watering_frequency": 7,
        "pruning_frequency": 180,
        "fertilizing_frequency": 60,
        "sunlight": "Full Sun",
        "description": "Amla is rich in Vitamin C and is used for its medicinal and nutritional properties."
    },
    {
        "id": 29,
        "name": "Red Poppy",
        "watering_frequency": 5,
        "pruning_frequency": 30,
        "fertilizing_frequency": 30,
        "sunlight": "Full Sun",
        "description": "Red poppy flowers are known for their vibrant color and are often seen in Indian fields."
    },
    {
        "id": 30,
        "name": "Mint (Pudina)",
        "watering_frequency": 5,
        "pruning_frequency": 30,
        "fertilizing_frequency": 30,
        "sunlight": "Full Sun",
        "description": "Mint is a fragrant herb commonly used in tea and cooking."
    }
];


// Load saved plants from localStorage
let plantData = JSON.parse(localStorage.getItem("plantData")) || [];

// Toggle function for page navigation
function togglePage(pageId) {
    const sections = document.querySelectorAll('.page-content');
    sections.forEach(section => {
        section.style.display = 'none';
    });

    const selectedPage = document.getElementById(pageId);
    if (selectedPage) {
        selectedPage.style.display = 'block';
    }

    // Highlight the active link in the navbar
    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('onclick') === `togglePage('${pageId}')`) {
            link.classList.add('active');
        }
    });

    // Close mobile menu after clicking a link (for mobile view)
    const navbar = document.getElementById('navbar');
    navbar.classList.remove('open');
}

// Toggle mobile menu visibility
function toggleMenu() {
    document.getElementById('navbar').classList.toggle('open');
}


// Initialize the page by showing the 'home' page
window.onload = function () {
    togglePage('home');
    displayPlants();
};

// Show Manual Input Form
function showManualInput() {
    document.getElementById("manual-form").style.display = "block";
    document.getElementById("suggestion-form").style.display = "none";
}

// Show Suggestion Input Form
function showSuggestionInput() {
    document.getElementById("manual-form").style.display = "none";
    document.getElementById("suggestion-form").style.display = "block";
    populatePlantDropdown();
}

// Populate dropdown with predefined plant names
function populatePlantDropdown() {
    const plantDropdown = document.getElementById("plant-type");
    plantDropdown.innerHTML = '';

    predefinedPlants.forEach(plant => {
        const option = document.createElement("option");
        option.value = plant.name;
        option.textContent = plant.name;
        plantDropdown.appendChild(option);
    });
}

// Handle Manual Form Submission
document.getElementById("manual-form").addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("plant-name").value;
    const watering = parseInt(document.getElementById("watering-frequency").value);
    const pruning = parseInt(document.getElementById("pruning-frequency").value);
    const fertilizing = parseInt(document.getElementById("fertilizing-frequency").value);
    const sunlight = document.getElementById("sunlight").value;
    const description = document.getElementById("description").value;
    const lastWatered = document.getElementById("manual-last-watered").value;
    const lastPruned = document.getElementById("manual-last-pruned").value;
    const lastFertilized = document.getElementById("manual-last-fertilized").value;

    // Validate positive frequencies
    if (watering <= 0 || pruning <= 0 || fertilizing <= 0) {
        alert("Please enter valid positive numbers for frequency.");
        return;
    }

    const newPlant = {
        id: plantData.length + 1,
        name,
        watering_frequency: watering,
        pruning_frequency: pruning,
        fertilizing_frequency: fertilizing,
        sunlight,
        description,
        last_watered: lastWatered,
        last_pruned: lastPruned,
        last_fertilized: lastFertilized
    };

    plantData.push(newPlant);
    localStorage.setItem("plantData", JSON.stringify(plantData));

    document.getElementById("manual-form").reset();
    displayPlants();

    alert("Plant added successfully!");
});

// Handle Suggestion Form Submission
document.getElementById("suggestion-form").addEventListener("submit", function (e) {
    e.preventDefault();

    const selectedPlantName = document.getElementById("plant-type").value;
    const selectedPlant = predefinedPlants.find(p => p.name === selectedPlantName);

    const lastWatered = document.getElementById("suggestion-last-watered").value;
    const lastPruned = document.getElementById("suggestion-last-pruned").value;
    const lastFertilized = document.getElementById("suggestion-last-fertilized").value;

    if (selectedPlant) {
        const newPlant = {
            ...selectedPlant,
            id: plantData.length + 1,
            last_watered: lastWatered,
            last_pruned: lastPruned,
            last_fertilized: lastFertilized
        };

        plantData.push(newPlant);
        localStorage.setItem("plantData", JSON.stringify(plantData));

        displayPlants();
    }

    document.getElementById("suggestion-form").reset();
    alert("Plant added successfully!");
});

function displayPlants() {
    const plantList = document.getElementById("plant-list");
    const plantsContainer = document.getElementById("plants-container");
    plantsContainer.innerHTML = ''; // Clear existing plant list

    plantData.forEach(plant => {
        const plantItem = document.createElement("div");
        plantItem.classList.add("plant-item");

        plantItem.innerHTML = `
            <h3>${plant.name}</h3>
            <p><strong>Watering:</strong> Every ${plant.watering_frequency} days</p>
            <p><strong>Pruning:</strong> Every ${plant.pruning_frequency} days</p>
            <p><strong>Fertilizing:</strong> Every ${plant.fertilizing_frequency} days</p>
            <p><strong>Sunlight:</strong> ${plant.sunlight}</p>
            <p><strong>Description:</strong> ${plant.description}</p>
            <button onclick="showReminders(${plant.id})">Reminders</button>
            <button onclick="deletePlant(${plant.id})" class="delete-btn">Delete</button>
        `;

        plantsContainer.appendChild(plantItem);
    });
}


// Delete a Plant
function deletePlant(plantId) {
    plantData = plantData.filter(plant => plant.id !== plantId);
    localStorage.setItem("plantData", JSON.stringify(plantData));
    displayPlants();
}

// Show Plant Care Reminders
function showReminders(plantId) {
    const plant = plantData.find(p => p.id === plantId);
    const modal = document.getElementById("reminder-modal");
    const modalContent = document.getElementById("modal-content");

    if (!plant) return;

    const nextWateringDate = plant.last_watered ? calculateNextReminder(plant.last_watered, plant.watering_frequency) : "Not recorded";
    const nextPruningDate = plant.last_pruned ? calculateNextReminder(plant.last_pruned, plant.pruning_frequency) : "Not recorded";
    const nextFertilizingDate = plant.last_fertilized ? calculateNextReminder(plant.last_fertilized, plant.fertilizing_frequency) : "Not recorded";

    modalContent.innerHTML = `
        <h2>Reminders for ${plant.name}</h2>
        <p><strong>Next Watering:</strong> ${nextWateringDate.toLocaleDateString ? nextWateringDate.toLocaleDateString() : nextWateringDate}</p>
        <p><strong>Next Pruning:</strong> ${nextPruningDate.toLocaleDateString ? nextPruningDate.toLocaleDateString() : nextPruningDate}</p>
        <p><strong>Next Fertilizing:</strong> ${nextFertilizingDate.toLocaleDateString ? nextFertilizingDate.toLocaleDateString() : nextFertilizingDate}</p>
        <button onclick="closeModal()">Close</button>
    `;

    modal.style.display = "flex";
}

// Close Modal Function
function closeModal() {
    document.getElementById("reminder-modal").style.display = "none";
}

// Calculate Next Reminder Date
function calculateNextReminder(lastDate, frequency) {
    if (!lastDate || isNaN(Date.parse(lastDate))) return "Not recorded"; // Check for invalid date
    const lastReminderDate = new Date(lastDate);
    const nextReminderDate = new Date(lastReminderDate);
    nextReminderDate.setDate(lastReminderDate.getDate() + frequency);
    return nextReminderDate;
}
// Toggle mobile menu visibility
function toggleMenu() {
    const navbar = document.getElementById('navbar');
    navbar.querySelector('ul').classList.toggle('open'); // Toggle the 'open' class on the <ul> element
}

// Close the mobile menu when a link is clicked
const navLinks = document.querySelectorAll('#navbar ul li a');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        // Close the menu when any link is clicked
        const navbar = document.getElementById('navbar');
        navbar.querySelector('ul').classList.remove('open');
    });
});




// Close the modal if the overlay is clicked
document.getElementById("reminder-modal").addEventListener("click", function (event) {
    if (event.target === this) closeModal();
});

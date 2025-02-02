// Sample dataset for predefined plant suggestions (30 common plants)
const predefinedPlants = [
    {
        "id": 1,
        "name": "Aloe Vera",
        "watering_frequency": 3,
        "pruning_frequency": 30,
        "fertilizing_frequency": 42,
        "sunlight": "Full Sun",
        "description": "Aloe Vera is a succulent plant species of the genus Aloe."
    },
    {
        "id": 2,
        "name": "Cactus",
        "watering_frequency": 7,
        "pruning_frequency": 365,
        "fertilizing_frequency": 28,
        "sunlight": "Full Sun",
        "description": "Cactus are succulent plants that thrive in dry environments."
    },
    {
        "id": 3,
        "name": "Fiddle Leaf Fig",
        "watering_frequency": 7,
        "pruning_frequency": 180,
        "fertilizing_frequency": 30,
        "sunlight": "Bright Indirect Light",
        "description": "Fiddle Leaf Fig is a tropical plant known for its large glossy leaves."
    },
    {
        "id": 4,
        "name": "Spider Plant",
        "watering_frequency": 7,
        "pruning_frequency": 180,
        "fertilizing_frequency": 30,
        "sunlight": "Indirect Light",
        "description": "Spider plant is an easy-to-grow houseplant that thrives in indirect light."
    },
    {
        "id": 5,
        "name": "Snake Plant",
        "watering_frequency": 10,
        "pruning_frequency": 365,
        "fertilizing_frequency": 60,
        "sunlight": "Indirect Light",
        "description": "Snake plants are low-maintenance plants that can thrive in low light."
    },
    {
        "id": 6,
        "name": "Pothos",
        "watering_frequency": 7,
        "pruning_frequency": 180,
        "fertilizing_frequency": 30,
        "sunlight": "Low to Medium Light",
        "description": "Pothos are hardy plants that are perfect for beginners."
    },
    {
        "id": 7,
        "name": "Peace Lily",
        "watering_frequency": 7,
        "pruning_frequency": 180,
        "fertilizing_frequency": 30,
        "sunlight": "Indirect Light",
        "description": "Peace lilies are known for their white blooms and ability to purify the air."
    },
    {
        "id": 8,
        "name": "ZZ Plant",
        "watering_frequency": 14,
        "pruning_frequency": 365,
        "fertilizing_frequency": 60,
        "sunlight": "Indirect Light",
        "description": "ZZ plants are hardy, low-light plants with glossy green leaves."
    },
    {
        "id": 9,
        "name": "Dracaena",
        "watering_frequency": 7,
        "pruning_frequency": 180,
        "fertilizing_frequency": 30,
        "sunlight": "Bright Indirect Light",
        "description": "Dracaenas are versatile plants that grow well in many indoor settings."
    },
    {
        "id": 10,
        "name": "English Ivy",
        "watering_frequency": 5,
        "pruning_frequency": 180,
        "fertilizing_frequency": 30,
        "sunlight": "Indirect Light",
        "description": "English Ivy is a fast-growing vine perfect for covering trellises or pots."
    },
    {
        "id": 11,
        "name": "Aloe Vera",
        "watering_frequency": 3,
        "pruning_frequency": 30,
        "fertilizing_frequency": 42,
        "sunlight": "Full Sun",
        "description": "Aloe Vera is a succulent plant species of the genus Aloe."
    },
    {
        "id": 12,
        "name": "Golden Pothos",
        "watering_frequency": 7,
        "pruning_frequency": 180,
        "fertilizing_frequency": 30,
        "sunlight": "Low to Medium Light",
        "description": "Golden pothos are perfect for beginners and great for hanging baskets."
    },
    {
        "id": 13,
        "name": "Bamboo Palm",
        "watering_frequency": 7,
        "pruning_frequency": 180,
        "fertilizing_frequency": 30,
        "sunlight": "Indirect Light",
        "description": "Bamboo palms are ideal for low-light conditions and help purify the air."
    },
    {
        "id": 14,
        "name": "Pilea Peperomioides",
        "watering_frequency": 7,
        "pruning_frequency": 180,
        "fertilizing_frequency": 30,
        "sunlight": "Indirect Light",
        "description": "Pilea is a popular houseplant with round leaves and is easy to care for."
    },
    {
        "id": 15,
        "name": "Ficus Tree",
        "watering_frequency": 7,
        "pruning_frequency": 180,
        "fertilizing_frequency": 30,
        "sunlight": "Bright Indirect Light",
        "description": "Ficus trees are large indoor plants with attractive foliage."
    },
    {
        "id": 16,
        "name": "Basil",
        "watering_frequency": 3,
        "pruning_frequency": 30,
        "fertilizing_frequency": 15,
        "sunlight": "Full Sun",
        "description": "Basil is a fragrant herb commonly used in cooking."
    },
    {
        "id": 17,
        "name": "Lavender",
        "watering_frequency": 7,
        "pruning_frequency": 60,
        "fertilizing_frequency": 30,
        "sunlight": "Full Sun",
        "description": "Lavender is a fragrant herb known for its calming aroma."
    },
    {
        "id": 18,
        "name": "Chives",
        "watering_frequency": 7,
        "pruning_frequency": 60,
        "fertilizing_frequency": 30,
        "sunlight": "Full Sun",
        "description": "Chives are a hardy herb with mild onion-like flavor."
    },
    {
        "id": 19,
        "name": "Mint",
        "watering_frequency": 5,
        "pruning_frequency": 30,
        "fertilizing_frequency": 30,
        "sunlight": "Full Sun",
        "description": "Mint is a highly fragrant herb commonly used in tea and cooking."
    },
    {
        "id": 20,
        "name": "Rosemary",
        "watering_frequency": 7,
        "pruning_frequency": 30,
        "fertilizing_frequency": 30,
        "sunlight": "Full Sun",
        "description": "Rosemary is a fragrant herb used in cooking and has medicinal properties."
    },
    {
        "id": 21,
        "name": "Geranium",
        "watering_frequency": 7,
        "pruning_frequency": 60,
        "fertilizing_frequency": 30,
        "sunlight": "Full Sun",
        "description": "Geraniums are flowering plants with colorful blooms."
    },
    {
        "id": 22,
        "name": "Begonia",
        "watering_frequency": 7,
        "pruning_frequency": 60,
        "fertilizing_frequency": 30,
        "sunlight": "Indirect Light",
        "description": "Begonias are beautiful plants with attractive foliage and flowers."
    },
    {
        "id": 23,
        "name": "Maranta",
        "watering_frequency": 7,
        "pruning_frequency": 180,
        "fertilizing_frequency": 30,
        "sunlight": "Indirect Light",
        "description": "Maranta is known for its beautiful foliage, often called 'prayer plants.'"
    },
    {
        "id": 24,
        "name": "Eucalyptus",
        "watering_frequency": 10,
        "pruning_frequency": 180,
        "fertilizing_frequency": 60,
        "sunlight": "Full Sun",
        "description": "Eucalyptus trees are known for their aromatic leaves."
    },
    {
        "id": 25,
        "name": "Cucumber",
        "watering_frequency": 3,
        "pruning_frequency": 30,
        "fertilizing_frequency": 30,
        "sunlight": "Full Sun",
        "description": "Cucumbers are a fast-growing, refreshing vegetable commonly grown in gardens."
    },
    {
        "id": 26,
        "name": "Zinnia",
        "watering_frequency": 7,
        "pruning_frequency": 60,
        "fertilizing_frequency": 30,
        "sunlight": "Full Sun",
        "description": "Zinnias are colorful, easy-to-grow flowers that brighten up any garden."
    },
    {
        "id": 27,
        "name": "Peperomia",
        "watering_frequency": 7,
        "pruning_frequency": 180,
        "fertilizing_frequency": 30,
        "sunlight": "Indirect Light",
        "description": "Peperomias are compact, easy-care plants with interesting foliage."
    },
    {
        "id": 28,
        "name": "Hoya",
        "watering_frequency": 10,
        "pruning_frequency": 180,
        "fertilizing_frequency": 60,
        "sunlight": "Indirect Light",
        "description": "Hoyas are often known as wax plants due to their thick, waxy leaves."
    },
    {
        "id": 29,
        "name": "Coleus",
        "watering_frequency": 5,
        "pruning_frequency": 30,
        "fertilizing_frequency": 30,
        "sunlight": "Indirect Light",
        "description": "Coleus is a colorful plant often grown for its vibrant foliage."
    },
    {
        "id": 30,
        "name": "Impatiens",
        "watering_frequency": 5,
        "pruning_frequency": 60,
        "fertilizing_frequency": 30,
        "sunlight": "Partial Shade",
        "description": "Impatiens are shade-loving flowers that bloom in vibrant colors."
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

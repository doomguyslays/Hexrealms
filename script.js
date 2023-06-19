// Define variables
let resources = 0;
let resourceMultiplier = 1;
let upgradeCost = 10;

// Get DOM elements
const resourceCountElement = document.getElementById("resource-count");
const collectButton = document.getElementById("collect-btn");
const upgradeButton = document.getElementById("upgrade-btn");

// Function to update the resource count element
function updateResourceCount() {
  resourceCountElement.textContent = resources;
}

// Function to handle resource collection
function collectResource() {
  resources += resourceMultiplier;
  updateResourceCount();
}

// Function to handle the upgrade
function upgrade() {
  if (resources >= upgradeCost) {
    resources -= upgradeCost;
    resourceMultiplier++;
    upgradeCost *= 2;
    updateResourceCount();
    updateUpgradeButton();
  }
}

// Function to update the upgrade button text and disable it if the player can't afford the upgrade
function updateUpgradeButton() {
  upgradeButton.textContent = `Upgrade (Cost: ${upgradeCost})`;
  upgradeButton.disabled = resources < upgradeCost;
}

// Event listeners
collectButton.addEventListener("click", collectResource);
upgradeButton.addEventListener("click", upgrade);

// Initialize the game
updateResourceCount();
updateUpgradeButton();

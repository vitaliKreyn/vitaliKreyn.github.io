document.addEventListener('DOMContentLoaded', () => {
    const clickerButton = document.getElementById('clickerButton');
    const clickCountDisplay = document.getElementById('clickCount');
    const upgradeButton = document.getElementById('upgradeButton');
    const upgradeCostDisplay = document.getElementById('upgradeCost');
    const clickValueDisplay = document.getElementById('clickValue');
    const energyText = document.getElementById('energyText');
    const boosterButton = document.getElementById('boosterButton');
    const boosterCostDisplay = document.getElementById('boosterCost');
    const boosterLevelDisplay = document.getElementById('boosterLevel');

    let clickCount = 0;
    let clickValue = 1;
    let upgradeCost = 100;
    let energy = 100;
    let boosterLevel = 1;
    let boosterCost = 50;
    let energyReplenishRate = 1; // Points per second

    function updateEnergyText() {
        energyText.textContent = energy;
    }

    clickerButton.addEventListener('click', () => {
        if (energy > 0) {
            clickCount += clickValue;
            clickCountDisplay.textContent = clickCount;
            energy -= clickValue; // Decrease energy by 1 per click
            if (energy < 0) energy = 0;
            updateEnergyText();
        } else {
            alert("Out of energy! Wait for it to replenish.");
        }
    });

    upgradeButton.addEventListener('click', () => {
        if (clickCount >= upgradeCost) {
            clickCount -= upgradeCost;
            clickValue++;
            upgradeCost = Math.floor(upgradeCost * 2.5);
            clickCountDisplay.textContent = clickCount;
            clickValueDisplay.textContent = clickValue;
            upgradeCostDisplay.textContent = upgradeCost;
        } else {
            alert("Not enough clicks to upgrade!");
        }
    });

    boosterButton.addEventListener('click', () => {
        if (clickCount >= boosterCost) {
            clickCount -= boosterCost;
            boosterLevel++;
            energyReplenishRate *= 2;
            boosterCost = Math.floor(boosterCost * 2);
            clickCountDisplay.textContent = clickCount;
            boosterLevelDisplay.textContent = boosterLevel;
            boosterCostDisplay.textContent = boosterCost;
        } else {
            alert("Not enough clicks to buy booster!");
        }
    });

    setInterval(() => {
        if (energy < 100) {
            energy += energyReplenishRate;
            if (energy > 100) energy = 100;
            updateEnergyText();
        }
    }, 1000);
});

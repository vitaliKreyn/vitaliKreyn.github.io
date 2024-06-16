document.addEventListener('DOMContentLoaded', () => {
    const clickerButton = document.getElementById('clickerButton');
    const clickCountDisplay = document.getElementById('clickCount');
    const upgradeButton = document.getElementById('upgradeButton');
    const upgradeCostDisplay = document.getElementById('upgradeCost');
    const clickValueDisplay = document.getElementById('clickValue');
    const energyText = document.getElementById('energyText');
    const maxEnergyText = document.getElementById('maxEnergyText');
    const maxEnergyButton = document.getElementById('maxEnergyButton');
    const maxEnergyCostDisplay = document.getElementById('maxEnergyCost');
    const maxEnergyLevelDisplay = document.getElementById('maxEnergyLevel');
    const boosterButton = document.getElementById('boosterButton');
    const boosterCostDisplay = document.getElementById('boosterCost');
    const boosterLevelDisplay = document.getElementById('boosterLevel');

    let clickCount = 0;
    let clickValue = 1;
    let upgradeCost = 100;
    let energy = 100;
    let maxEnergy = 100;
    let maxEnergyLevel = 1;
    let maxEnergyCost = 30;
    let boosterLevel = 1;
    let boosterCost = 50;
    let energyReplenishRate = 1; // Points per second

    function updateEnergyText() {
        energyText.textContent = energy;
        maxEnergyText.textContent = maxEnergy;
    }

    clickerButton.addEventListener('click', () => {
        if (energy > 0) {
            clickCount += clickValue;
            clickCountDisplay.textContent = clickCount;
            energy -= clickValue; // Decrease energy by 1 per click
            if (energy < 0) energy = 0;
            updateEnergyText();
        } else {
        }
    });

    upgradeButton.addEventListener('click', () => {
        if (clickCount >= upgradeCost) {
            clickCount -= upgradeCost;
            clickValue++;
            upgradeCost = Math.floor(upgradeCost * 2);
            clickCountDisplay.textContent = clickCount;
            clickValueDisplay.textContent = clickValue;
            upgradeCostDisplay.textContent = upgradeCost;
        } else {
        }
    });

    maxEnergyButton.addEventListener('click', () => {
        if (clickCount >= maxEnergyCost) {
            clickCount -= maxEnergyCost;
            maxEnergyLevel++;
            maxEnergy += 100; // Increase maximum energy by 20
            maxEnergyCost = Math.floor(maxEnergyCost * 2);
            clickCountDisplay.textContent = clickCount;
            maxEnergyLevelDisplay.textContent = maxEnergyLevel;
            maxEnergyCostDisplay.textContent = maxEnergyCost;
            updateEnergyText();
        } else {
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
        }
    });


    setInterval(() => {
        if (energy < maxEnergy) {
            energy += energyReplenishRate;
            if (energy > maxEnergy) energy = maxEnergy;
            updateEnergyText();
        }
    }, 1000);

    openUpgradesButton.addEventListener('click', () => {
        document.querySelector('.container').style.display = 'none';
        upgradesContainer.style.display = 'block';
    });

    backToGameButton.addEventListener('click', () => {
        upgradesContainer.style.display = 'none';
        document.querySelector('.container').style.display = 'block';
    });
});

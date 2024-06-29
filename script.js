document.addEventListener('DOMContentLoaded', () => {
    const clickerButton = document.getElementById('clickerButton');
    const clickCountDisplay = document.getElementById('clickCount');
    const upgradeButton = document.getElementById('upgradeButton');
    const upgradeCostDisplay = document.getElementById('upgradeCost');
    const clickValueDisplay = document.getElementById('clickValue');
    const energyBar = document.getElementById('energyBar');
    const energyText = document.getElementById('energyText');
    const maxEnergyText = document.getElementById('maxEnergyText');
    const maxEnergyButton = document.getElementById('maxEnergyButton');
    const maxEnergyCostDisplay = document.getElementById('maxEnergyCost');
    const maxEnergyLevelDisplay = document.getElementById('maxEnergyLevel');
    const boosterButton = document.getElementById('boosterButton');
    const boosterCostDisplay = document.getElementById('boosterCost');
    const boosterLevelDisplay = document.getElementById('boosterLevel');
    const openUpgradesButton = document.getElementById('openUpgradesButton');
    const backToGameButton = document.getElementById('backToGameButton');
    const openTasksButton = document.getElementById('openTasksButton');
    const backToGameFromTasksButton = document.getElementById('backToGameFromTasksButton');
    const gameContainer = document.getElementById('gameContainer');
    const upgradesContainer = document.getElementById('upgradesContainer');
    const tasksContainer = document.getElementById('tasksContainer');

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
    const maxBoosterLevel = 3;

    function updateEnergyDisplay() {
        const energyPercentage = (energy / maxEnergy) * 100;
        energyBar.style.width = `${energyPercentage}%`;
        energyText.textContent = energy;
        maxEnergyText.textContent = maxEnergy;
    }

    clickerButton.addEventListener('click', () => {
        if (energy > 0) {
            clickCount += clickValue;
            clickCountDisplay.textContent = clickCount;
            energy -= clickValue; // Decrease energy by 1 per click
            if (energy < 0) energy = 0;
            updateEnergyDisplay();
                    // Tilt effect
        const buttonRect = clickerButton.getBoundingClientRect();
        const offsetX = event.clientX - buttonRect.left;
        const offsetY = event.clientY - buttonRect.top;
        const centerX = buttonRect.width / 2;
        const centerY = buttonRect.height / 2;
        const rotateX = (centerY - offsetY) / 10;
        const rotateY = (offsetX - centerX) / 10;

        clickerButton.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        clickerButton.classList.add('tilt');

        // Remove tilt effect after some time
        setTimeout(() => {
            clickerButton.style.transform = 'rotateX(0deg) rotateY(0deg)';
        }, 300);
        } else {
        }
    });

    upgradeButton.addEventListener('click', () => {
        if (clickCount >= upgradeCost) {
            clickCount -= upgradeCost;
            clickValue++;
            upgradeCost = Math.floor(upgradeCost * 1.5);
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
            maxEnergy += 20; // Increase maximum energy by 20
            maxEnergyCost = Math.floor(maxEnergyCost * 1.5);
            clickCountDisplay.textContent = clickCount;
            maxEnergyLevelDisplay.textContent = maxEnergyLevel;
            maxEnergyCostDisplay.textContent = maxEnergyCost;
            updateEnergyDisplay();
        } else {
        }
    });

    boosterButton.addEventListener('click', () => {
        if (boosterLevel < maxBoosterLevel) {
            if (clickCount >= boosterCost) {
                clickCount -= boosterCost;
                boosterLevel++;
                energyReplenishRate *= 1.5;
                boosterCost = Math.floor(boosterCost * 2);
                clickCountDisplay.textContent = clickCount;
                boosterLevelDisplay.textContent = boosterLevel;
                boosterCostDisplay.textContent = boosterCost;
                if (boosterLevel === maxBoosterLevel) {
                    boosterButton.disabled = true;
                }
            } else {
            }
        } else {
        }
    });

    setInterval(() => {
        if (energy < maxEnergy) {
            energy += energyReplenishRate;
            if (energy > maxEnergy) energy = maxEnergy;
            updateEnergyDisplay();
        }
    }, 1000);

    openUpgradesButton.addEventListener('click', () => {
        gameContainer.style.display = 'none';
        upgradesContainer.style.display = 'block';
    });

    backToGameButton.addEventListener('click', () => {
        upgradesContainer.style.display = 'none';
        gameContainer.style.display = 'block';
    });

    openTasksButton.addEventListener('click', () => {
        gameContainer.style.display = 'none';
        tasksContainer.style.display = 'block';
    });

    backToGameFromTasksButton.addEventListener('click', () => {
        tasksContainer.style.display = 'none';
        gameContainer.style.display = 'block';
    });
});

function calculateReward() {
    const weight = parseFloat(document.getElementById("weight").value);
    const wasteType = document.getElementById("wasteType").value;
    let rewardPerKg;

    switch (wasteType) {
        case "compostable":
            rewardPerKg = 1000;
            break;
        case "plastico":
            rewardPerKg = 1000;
            break;
        case "vidrio":
            rewardPerKg = 1000;
            break;
        case "archivo":
            rewardPerKg = 1000;
            break;
        default:
            rewardPerKg = 1000;
            break;
    }

    const reward = weight * rewardPerKg;
    document.getElementById("result").innerText = `Ganancia estimada: $${reward.toFixed(2)} pesos`;

    alert(`Datos enviados correctamente.\nGanancia: $${reward.toFixed(2)}`);
}

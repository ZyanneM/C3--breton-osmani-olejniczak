const fs = import('fs');
const path = import('path');
function exportToCSV(data) {
    // En-tête du CSV
    const header = Object.keys(data[0]).join(',');

    // Contenu du CSV
    const csvData = data.map(row => Object.values(row).map(value => `"${value}"`).join(',')).join('\n');

    return `${header}\n${csvData}`;
}
function saveCSVtoTempFolder(data, fileName) {
    const tempFolderPath = './temp';

    if (!fs.existsSync(tempFolderPath)) {
        fs.mkdirSync(tempFolderPath);
    }

    const filePath = path.join(tempFolderPath, fileName + '.csv');
    const csvData = exportToCSV(data);

    fs.writeFileSync(filePath, csvData);
    console.log(`Fichier CSV exporté et enregistré dans le dossier temporaire : ${filePath}`);
    return filePath;
}

export { exportToCSV, saveCSVtoTempFolder };
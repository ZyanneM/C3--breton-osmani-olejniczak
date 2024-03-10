import fs from 'fs';
import path from 'path';

function exportToCSV(data) {
    const header = Object.keys(data[0]).join(',');
    const csvData = data.map(row => Object.values(row).map(value => `"${value}"`).join(',')).join('\n');
    return `${header}\n${csvData}`;
}

async function saveCSVtoTempFolder(data, fileName) {
    const tempFolderPath = './temp';  // Spécifiez directement le chemin du dossier temporaire

    try {
        await fs.promises.access(tempFolderPath, fs.constants.F_OK); // Vérifiez si le dossier existe
    } catch (err) {
        fs.mkdirSync(tempFolderPath);
    }

    const filePath = path.join(tempFolderPath, fileName + '.csv');

    try {
        await fs.promises.access(filePath, fs.constants.F_OK); // Vérifiez si le fichier existe
        console.error('Le fichier existe déjà');
        return null;  // Ou une autre logique pour gérer le cas où le fichier existe déjà
    } catch (err) {
        fs.writeFileSync(filePath, exportToCSV(data));
        console.log(`Fichier CSV exporté et enregistré dans le dossier temporaire : ${filePath}`);
        return filePath;
    }
}

export { exportToCSV, saveCSVtoTempFolder };

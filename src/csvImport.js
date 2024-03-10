import path from 'path';
import CSVReader from './csvReader'; 

/**
 * Fonction pour importer un fichier CSV et retourner les données sous forme d'un tableau d'objets.
 * @param {string} filePath - Le chemin du fichier CSV à importer.
 * @returns {Promise<Array>} Une promesse résolue avec les données lues du fichier CSV.
 */
async function importCSV(filePath) {
  try {
    const csvReader = new CSVReader(filePath);
    const data = await csvReader.readCSV();
    return data;
  } catch (error) {
    throw new Error(`Erreur lors de l'import du fichier CSV : ${error.message}`);
  }
}

// Exemple d'utilisation de la fonction importCSV
const filePath = path.resolve(__dirname, '../src/test.csv');
importCSV(filePath)
  .then((data) => {
    console.log('Données lues à partir du fichier CSV :', data);
  })
  .catch((error) => {
    console.error('Erreur lors de l\'import du fichier CSV :', error);
  });

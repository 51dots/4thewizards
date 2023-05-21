const fs = require('fs');
const path = require('path');

// Set the directory containing the JSON files to pack
const dirPath = './spreadsheet';

// Get the list of JSON files in the directory
const jsonFiles = fs.readdirSync(dirPath)
                    .filter(file => file.endsWith('.json'));

// Create an array to hold all the JSON data
let allJsonData = [];

// Loop through each JSON file and append its data to the array
for (const file of jsonFiles) {
  const filePath = path.join(dirPath, file);
  const data = fs.readFileSync(filePath, 'utf8');
  const jsonData = JSON.parse(data);
  allJsonData.push(jsonData);
}

// Write the combined JSON data to a new file with indentation
const outputFilePath = path.join(dirPath, 'wizardPower.json');
fs.writeFileSync(outputFilePath, JSON.stringify(allJsonData, null, 2));

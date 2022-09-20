// TODO: Create a function that returns a license badge based on which license is passed in
function renderLicenseBadge(license) {
    let badge = '';
    if (license === 'Apache') {
      badge = '![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)';
    } else if (license === 'GNU') {
      badge = '![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)';
    } else if (license === 'MIT') {
      badge = '![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)';
    } else {
      badge = '';
    }
    return badge;
  }




// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

module.exports = generateMarkdown;
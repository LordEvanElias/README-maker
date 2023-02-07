// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== "none") {
    return `<img src="https://img.shields.io/badge/license-${license}-blue.svg">`;
  } else {
    return "";
  }
}

// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== "none") {
    return `* [License](#license)`;
  } else {
    return "";
  }
}

// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== "none") {
    return ` 
  
  # License 
  
  > This project is licensed under ${license}`;
  } else {
    return "";
  }
}

// Generates Markdown
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}
  ${renderLicenseSection(data.license)};
  
  # Description

 > ${data.description}

  
  # Table of Contents
   * [Installaton](#installation)
   * [Usage](#usage)
   * [Contribution](#contribution)
   * [Tests](#tests)
  
  ${renderLicenseLink(data.license)}

  # Installation
  > ${data.installation}
  # Usage
  > ${data.usage}
  # Contribution
  > ${data.contribution}
  # Tests
  > ${data.tests}
  # Questions
  ## For more details, please contact me at ${data.email}`;
}

module.exports = generateMarkdown;

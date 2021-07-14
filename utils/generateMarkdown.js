// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let str = "";
  switch (license) {
    case "Apache 2.0 License":
      str = "https://img.shields.io/badge/License-Apache%202.0-blue.svg";
    case "BSD 3-Clause License":
      str = "https://img.shields.io/badge/License-BSD%203--Clause-blue.svg";
    case "MIT License":
      str = "https://img.shields.io/badge/License-MIT-yellow.svg";
    case "IBM Public License Version 1.0":
      str = "https://img.shields.io/badge/License-IPL%201.0-blue.svg";
    default:
      str = "";
  }

  return str;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let str = "";
  switch (license) {
    case "Apache 2.0 License":
      str = "https://opensource.org/licenses/Apache-2.0";
    case "BSD 3-Clause License":
      str = "https://opensource.org/licenses/BSD-3-Clause";
    case "MIT License":
      str = "https://opensource.org/licenses/MIT";
    case "IBM Public License Version 1.0":
      str = "https://opensource.org/licenses/IPL-1.0";
    default:
      str = "";
  }

  return str;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  return `[![License](${renderLicenseBadge(license)})](${renderLicenseLink(license)})`
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  
  ${renderLicenseSection(data.license)}
  
  # Description
  
  ${data.description}
  
  # Table of Content
  
  [Installation](#Installation)
  [Installation](#Usage)
  [Installation](#Contribution)
  [Installation](#Test)
  [Installation](#Questions)
  
  # Installation Instructions
  
  ${data.install}
  
  # Usage Information
  
  ${data.usage}
  
  # Contribution Guidelines
  
  ${data.contribution}
  
  # Test Instructions
  
  ${data.test}
  
  # Questions
  
  additional information of how to reach
  ${data.email} ${data.github}`;
}

module.exports = generateMarkdown;

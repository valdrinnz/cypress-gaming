# Cypress Gaming 🚀 
Make sure you have the following installed:

- [Node.js](https://nodejs.org/)

## Getting Started
#### Clone the repository to your local machine:
 ```bash
 git clone https://github.com/valdrinnz/cypress-gaming
 cd your-project
 ```
#### Install project dependencies:
 ```bash
 npm install
 ```
 Create a `cypress.env.json` file in the project root for storing confidential data. Add your sensitive information to this file, there is needed to be added your email and password like below.

    Example `cypress.env.json` content:

    ```js
    {
      "email": "your_email",
      "password": "your_password",
    }
    ```

    refer to attached pic please
    
 #### Running Cypress Test Locally - Interactive Mode:
 ```bash
 npx cypress open
 ```
#### Running Cypress Test Locally - Headless Mode:
 ```bash
 npx cypress run
 ```
Happy testing! 🌈✨
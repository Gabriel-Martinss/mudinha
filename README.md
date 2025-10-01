Mudinha - Plant Care & Marketplace App
Welcome to the Mudinha project! This is an Ionic/Angular application designed to help users care for their plants and participate in a community marketplace to buy and sell plants.

This project is being developed as a practical exercise for a mobile development course.

Prerequisites
Before you begin, ensure you have the following tools installed on your system. These instructions are based on the course materials provided.

Node.js: A JavaScript runtime environment.

NPM: Node Package Manager, which comes with Node.js.

Ionic CLI: The command-line interface for Ionic.

Angular CLI: The command-line interface for Angular.

Visual Studio Code: The recommended code editor.

1. Environment Setup
Follow these steps to configure your development environment.

1.1. Install Node.js
Node.js is essential for running the Ionic and Angular frameworks.

Download: Go to the official Node.js website and download the LTS (Long-Term Support) version for your operating system.
https://nodejs.org/en/download/

Install: Run the installer and follow the on-screen instructions.

Verify Installation: Open your terminal (or the "Node.js command prompt" on Windows) and run the following command to check if it was installed correctly:

node -v

This command should display the installed Node.js version. NPM is installed automatically with Node.js. To verify its version, run:

npm -v

1.2. Install Ionic & Angular CLI
The Ionic and Angular command-line tools are required to create, build, and run the project. Install them globally using npm.

Installation Command: Open your terminal and run the following command:

npm install -g @ionic/cli @angular/cli

Verify Installation: Check that the CLIs were installed correctly by running:

ionic -v
ng version

2. Getting Started with the Project
Once your environment is set up, you can run the project.

2.1. Clone the Repository (If Applicable)
If the project is on a Git repository, clone it to your local machine:

git clone <repository-url>
cd mudinha

2.2. Install Project Dependencies
Navigate to the project's root directory and install the required packages listed in package.json.

npm install

2.3. Run the Application
To start the local development server and view the application in your browser, run the following command. The app will automatically reload if you change any of the source files.

ionic serve

The application will be accessible at http://localhost:8100.

3. Creating a New Project from Scratch
If you need to create a new Ionic project based on the course guidelines, you can use the following command:

# General command structure
ionic start <project-name> <template> --type=angular

# Example for this project
ionic start mudinha tabs --type=angular

Available Scripts
In the project directory, you can run the following scripts from package.json:

npm start: Runs the app in development mode.

npm run build: Builds the app for production to the www folder.

npm run test: Runs the unit tests via Karma.

npm run lint: Lints the project's TypeScript and HTML files.
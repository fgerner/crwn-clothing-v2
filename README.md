# Freds Clothing - E-Commerce Platform

A modern e-commerce application built with React, Firebase, and Styled Components. This project is a comprehensive clothing store featuring user authentication, product categories, and a shopping cart system.

## 🚀 Tech Stack

- **Frontend:** React (v17), React Router Dom (v6)
- **Styling:** Styled Components, Sass
- **Backend/Database:** Firebase (Authentication, Firestore)
- **State Management:** Context API
- **Testing:** Jest, React Testing Library
- **Tooling:** Create React App

## 📋 Requirements

- [Node.js](https://nodejs.org/) (v14 or higher recommended)
- npm or yarn

## 🛠 Setup & Installation

### 1. Fork and Clone
One quick note about cloning this project. If you wish to make commits and push your own code, you'll need to fork the project first. Forking allows you to have your own copy of this repository by adding a duplicate version in your own profile!

You can see the fork button in the top right corner of every GitHub project; click it and a copy of the project will be added to your GitHub profile under the same name as the original project.

<img width="612" alt="github fork" src="https://user-images.githubusercontent.com/10578605/157998981-4bfd1f83-825c-4664-b22d-b2c7d471dc70.png">

After forking the project, simply clone it the way you would from the new forked project in your own GitHub repository and you can commit and push to it freely!

### 2. Install Dependencies
In your terminal after you clone your project down, run:
```bash
npm install
# or
yarn
```

### 3. Firebase Configuration
The project uses Firebase for authentication and data storage. 
Remember to replace the config variable in your `src/utils/firebase/firebase.utils.js` with your own config object from the firebase dashboard! 

Navigate to the project settings gear icon > project settings and scroll down to the config code. Copy the object in the code and replace the `firebaseConfig` variable in your cloned code.

<img width="1261" alt="Screen Shot 2022-03-11 at 8 51 22 PM" src="https://user-images.githubusercontent.com/10578605/157999158-10e921cc-9ee5-46f6-a0c5-1ae5686f54f3.png">

## 📜 Available Scripts

In the project directory, you can run:

- `npm start`: Runs the app in the development mode at [http://localhost:3000](http://localhost:3000).
- `npm run build`: Builds the app for production to the `build` folder.
- `npm test`: Launches the test runner in the interactive watch mode.
- `npm run eject`: **Note: this is a one-way operation. Once you `eject`, you can't go back!**

## 📂 Project Structure

```text
src/
├── assets/             # Static assets (images, icons)
├── components/         # Reusable UI components
├── contexts/           # React Context API providers
├── routes/             # Page-level components and routing
├── utils/              # Utility functions and Firebase config
├── App.js              # Main App component
├── index.js            # Entry point
└── shop-data.js        # Initial shop data
```

## 🔐 Environment Variables

Currently, Firebase configuration is hardcoded in `src/utils/firebase/firebase.utils.js`.
- TODO: Migrate Firebase credentials to a `.env` file for better security.

## 🧪 Testing

The project uses Jest and React Testing Library. To run tests:
```bash
npm test
```

## 🌿 Branching Strategy

After forking this repository and cloning it down, you will have access to all the lesson branches with code at different checkpoints throughout the course. If for some reason you need to work from the codebase at one of these lesson branch checkpoints, follow these steps:

1. Checkout to the lesson-# (let's use lesson-15 as an example) branch
```bash
git checkout lesson-15
```
2. Branch off from lesson-15. This will create a new branch where the code of lesson-15 is the basis for your new branch.
```bash
git checkout -b my-main-branch
```
3. Now you can just code on this branch, push code from this branch up to your forked repo etc.

## 📄 License

- TODO: Add LICENSE file to the repository.

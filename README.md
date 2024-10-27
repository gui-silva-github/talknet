## TalkNet

Talknet is a powerful messaging system inspired by WhatsApp, designed to deliver seamless, real-time communication between users.

The platform enables registered users to chat with each other instantly, storing all message data securely in Firebase. 

React powers the front-end logic, creating an efficient and responsive interface that adapts to user actions and device screens for an optimized chat experience.

<hr>

## Recursos

- **Real-Time Messaging**: Messages are instantly updated across users' screens using Firebase’s real-time database.

- **User Authentication**: Secure sign-up and login system, allowing users to register and authenticate their accounts.

- **Data Synchronization**: All messages and user data are synchronized across devices in real time.

- **Responsive UI**: A user-friendly interface built with React that adapts to various screen sizes, ensuring a smooth experience on mobile and desktop.

<hr>

## Requisitos

- [Node.js](https://nodejs.org/) and [npm](https://www.npmjs.com/)
- [Firebase account](https://firebase.google.com/) for setting up a project and real-time database.

<hr>

## Como usar na própria máquina?

1. **Clone the Repository**:
    ```bash
    git clone https://github.com/gui-silva-github/talknet.git
    cd talknet
    ```

2. **Install Dependencies**:
    ```bash
    npm install
    ```

3. **Setup Firebase**:  
   - Create a Firebase project [here](https://firebase.google.com/) and configure the real-time database.
   - Change the values of each attribute in firebaseConfig in src/config/firebase.js:
    ```bash
    apiKey=your_api_key
    authDomain=your_auth_domain
    projectId=your_project_id
    storageBucket=your_storage_bucket
    messagingSenderId=your_messaging_sender_id
    appId=your_app_id
    measurementId=your_measurementId
    ```

4. **Run the App**:
    ```bash
    npm run dev
    ```

<hr>

## Tecnologias

![Visual Studio Code](https://img.shields.io/badge/Visual%20Studio%20Code-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Firebase](https://img.shields.io/badge/firebase-a08021?style=for-the-badge&logo=firebase&logoColor=ffcd34)
![NPM](https://img.shields.io/badge/NPM-%23CB3837.svg?style=for-the-badge&logo=npm&logoColor=white)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![SASS](https://img.shields.io/badge/Sass-CC6699?style=flat&logo=sass&logoColor=white)




Twitty

Twitty is a simple Twitter clone built with React and Firebase. It allows users to create an account, post tweets, follow other users, and see their timeline.
Table of Contents

    Introduction
    Features
    Technologies Used
    Installation
    Usage
    Contributing
    License

Introduction

The aim of this project is to create a simple Twitter clone that can be used as a starting point for building more complex applications. The application has been designed to be easy to use, with a clean and modern interface that is easy to navigate.
Features

The application has the following features:

    User authentication
    Post tweets
    Follow other users
    See timeline

Technologies Used

The following technologies were used to build this project:

    React
    Firebase

Installation

To run this project locally, follow these steps:

    Clone the repository to your local machine:

    bash

git clone https://github.com/Przems0n711/Twitty.git

Navigate to the project directory:

bash

cd Twitty

Install the project dependencies:

npm install

Create a .env file in the root directory of the project and add the following variables:

makefile

REACT_APP_API_KEY=<your-firebase-api-key>
REACT_APP_AUTH_DOMAIN=<your-firebase-auth-domain>
REACT_APP_DATABASE_URL=<your-firebase-database-url>
REACT_APP_PROJECT_ID=<your-firebase-project-id>
REACT_APP_STORAGE_BUCKET=<your-firebase-storage-bucket>
REACT_APP_MESSAGING_SENDER_ID=<your-firebase-messaging-sender-id>
REACT_APP_APP_ID=<your-firebase-app-id>

Replace each of the variables with the corresponding values from your Firebase console.

Start the application:

sql

    npm start

    Open your browser and navigate to http://localhost:3000.

Usage

Once you have the application running, you can create an account by clicking on the "Sign Up" button on the home page. After creating an account, you can log in to post tweets, follow other users, and see your timeline.
Contributing

We welcome contributions from everyone. Before contributing, please read the code of conduct and contribution guidelines.
License

This project is licensed under the MIT License.

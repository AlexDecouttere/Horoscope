# Horoscope API

## Overview

The Horoscope API is a simple Node.js and Express app that returns the zodiac sign based on a provided birthdate. This app utilizes the `horoscope` library to determine the sign and can be deployed as a Docker container.
## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Running the Application](#running-the-application)
- [Testing](#testing)
## Installation

To install and run the Horoscope API locally:

1. Clone this repository:
   ```bash
   git clone https://github.com/your-username/horoscope-app.git
   cd horoscope-app
2. Install Dependencies
    ```bash
   npm install

## Usage
1. To start the application, run:
    ```bash
   node app.js
   
## API Endpoints
 Get Zodiac Sign

Endpoint: /horoscope

Method: GET

Query Parameters:

    birthdate (string, required): The birthdate in YYYY-MM-DD format.

Example Request:

    curl "http://localhost:3000/horoscope?birthdate=1990-05-15"

Example Response:

    {
    "birthdate": "1990-05-15",
    "zodiacSign": "Taurus"
    }

## Running the Application
1. Running Locally
To run the app with Node.js:
 ```bash
  npm start
```
This will start the app on the port defined in your .env file, or on port 3000 by default.
2. Running with Docker

To build and run the app in a Docker container:

Build the Docker image:

 ```bash
docker build -t horoscope-app .
```

Run the Docker container:
 ```bash
    docker run -p 3000:3000 horoscope-app
```

This will start the app in a container and make it accessible on http://localhost:3000.

## Testing
Automated tests ensure the functionality of the app and check for any breaking changes. Run the tests with:
 ```bash
    npm test
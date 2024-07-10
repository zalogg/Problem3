# Online CoffeeShop - Microservice for Serving Images

Members: Jonathan Chasipanta - Gonzalo Guachamin

This project is a microservice developed with Node.js and Express that performs CRUD operations for users.

## Requirements

- Node v20.13.1
- Docker version 26.0.0 

## Installation

1. Clone this repository:
    ```bash
    git clone 

2. Install dependencies:
    ```bash
    npm install
    ```

## Usage

1. Start the server:
    ```bash
    npm start
    node server.js
    ```

2. Open your browser and navigate to http://localhost:3005 to view the frontend interface.
## Docker Usage

1. Build the Docker image:
    ```bash
    docker build -t image-name .
    ```

2. Run a container using the created image:
    ```bash
    docker run -p 8080:3000 -d --name container_name image_name
    ```

3. Open your browser and navigate to http://localhost:8080 to view the frontend interface.

   


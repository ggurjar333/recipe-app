# Recipe Sharing Web Application

This is a web application that allows users to create, share, and discover their favorite recipes. It's built with TypeScript, React for the frontend, and Django for the backend.

## Table of Contents

- [Features](#features)
- [Folder Structure](#folder-structure)
- [Getting Started](#getting-started)
  - [Frontend](#frontend)
  - [Backend](#backend)
- [Contributing](#contributing)
- [License](#license)

## Features

- User Registration and Authentication
- Add and Share Recipes
- Browse and Search for Recipes
- RESTful API for Recipe Management
- Docker and Kubernetes Deployment

## Folder Structure


## Getting Started

### Frontend

1. Clone this repository.
    ```bash
    git clone https://github.com/ggurjar333/recipe-app.git
    cd recipe-app
    ``` 

2. Install dependencies.
    ```bash
    npm install
    ```

3. Start the development server.
    ```bash
    npm start
    ```

4. Open your web browser and access the application at http://localhost:3000.

### Backend
1. Navigate to the backend directory.
    ```bash
    cd ../recipe-app-backend
    ```
2. Create a Python virtual environment and activate it.
    ```bash
    python -m venv venv
    source venv/bin/activate
    ```

3. Install Python dependencies.
    ```bash
    pip install -r requirements.txt
    ```

4. Apply database migrations.
    ```bash
    python manage.py migrate
    ```
5. Start the Django development server.
    ```bash
    python manage.py runserver
    ```

### Contributing
1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Make your changes and write tests if applicable.
4. Run tests to ensure all is working.
5. Commit your changes.
6. Push to your fork and submit a pull request.

### License
This project is licensed under the MIT License.
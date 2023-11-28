# Task Manager - A JavaScript Backend Application

This project is a simple task manager backend built using JavaScript, Node.js, Express, and MongoDB.

## Table of Contents

- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
## Features

- CRUD operations for managing tasks.
- MongoDB database for data storage.
- Express server for handling HTTP requests.
- Error handling and validation.

## Getting Started

### Prerequisites

Before you begin, ensure you have the following installed on your machine:

- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/try/download/community)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/rahulNamavaram24/task-manager-backend.git
   ```

2. Install dependencies:

   ```bash
   cd task-manager-backend
   npm install
   ```

3. Set up your environment variables:

   Create a `.env` file in the root of your project and define the following variables:

   ```env
   MONGO_URL=your-mongodb-connection-string
   PORT=4000
   ```

## Usage

Start the server:

```bash
npm start
```

The server will be running at `http://localhost:4000` (or the port specified in your `.env` file).

## API Endpoints

- `GET /api/v1/tasks`: Get all tasks.
- `POST /api/v1/tasks`: Create a new task.
- `GET /api/v1/tasks/:id`: Get a single task by ID.
- `PATCH /api/v1/tasks/:id`: Update a task by ID.
- `DELETE /api/v1/tasks/:id`: Delete a task by ID.

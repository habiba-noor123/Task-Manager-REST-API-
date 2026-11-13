# Task Manager REST API

## Bano Qabil – Assignment 1

### Project Description
This is a Task Manager REST API built using Node.js and Express.js.

Tasks are stored in a JavaScript array. No database is used.

## Project Features
- Create new tasks
- View all tasks
- View a single task by ID
- Update existing tasks
- Delete tasks
- Validate task titles
- Handle HTTP status codes

## Technologies Used
- Node.js
- Express.js
- JavaScript
- Postman

## Installation

Install dependencies:

```bash
npm install
```

## How to Run

### 1. Express API

```bash
node server.js
```

Server runs on port 5000.

### 2. Core HTTP Server

```bash
node http-server.js
```

Server runs on port 3000.

### 3. Command Line Tool

```bash
node cli.js "Learn Node.js"
```

## Express API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| GET | /api/v1/tasks | Get all tasks |
| GET | /api/v1/tasks/:id | Get task by ID |
| POST | /api/v1/tasks | Create a new task |
| PUT | /api/v1/tasks/:id | Update a task |
| DELETE | /api/v1/tasks/:id | Delete a task |

## HTTP Status Codes

- 200 – OK
- 201 – Created
- 400 – Bad Request
- 404 – Not Found

## Core HTTP Server Routes

- GET /
- GET /tasks
- GET /about

## Data Storage

Tasks are stored in an in-memory JavaScript array. Data resets when the server restarts.

## API Testing

All API endpoints were tested using Postman.

**Assignment:** Bano Qabil Assignment 1 – Task Manager REST API.

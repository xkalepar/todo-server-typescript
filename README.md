# todo-server-typescript

Live Demo: [https://todos-api-without-db.onrender.com](https://todos-api-without-db.onrender.com)

## Setup

In the terminal, follow these steps:

1. Install dependencies:

npm install

2. Build and watch for changes:

tsc -w

3. Open a new terminal and start the server:

npm run dev

## API Endpoints

- **Get all todos**
- URL: `http://localhost:6000/todos/`
- Method: GET

- **Create a new todo**
- URL: `http://localhost:6000/todos/`
- Method: POST

- **Update a todo**
- URL: `http://localhost:6000/todos/:id`
- Method: PATCH

- **Delete a todo**
- URL: `http://localhost:6000/todos/:id`
- Method: DELETE

Please note that the URLs provided assume you are running the server locally. If you are using a different host or port, make sure to update the URLs accordingly.

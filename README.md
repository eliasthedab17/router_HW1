Below is a `README.md` file that mirrors the original style (same headings and formatting) while describing your current project. You can copy this text into your README file:

---

# Dynamic API Server with Node.js & Express

## Description
This project creates a dynamic Node.js API server that serves multiple endpoints for managing users and products. It allows clients to perform CRUD operations on users and products seamlessly, providing a clean and structured RESTful experience.

## Features

### Dynamic API Endpoints
- **Users API:**
  - `GET /api/users`: Retrieves all users.
  - `GET /api/users/:id`: Retrieves a specific user by ID.
  - `POST /api/users`: Adds a new user.
  - `PUT /api/users/:id`: Updates an existing user.
  - `DELETE /api/users/:id`: Deletes a user.

- **Products API:**
  - `GET /api/products`: Retrieves all products.
  - `GET /api/products/:id`: Retrieves a specific product by ID.
  - `POST /api/products`: Adds a new product (requires valid price and stock).
  - `PUT /api/products/:id`: Updates an existing product (requires valid price and stock).
  - `DELETE /api/products/:id`: Deletes a product.

### Custom Error Handling
- Provides a custom 404 error page for invalid routes.
- Returns error messages for missing users/products or invalid data.

### Clean Directory Structure
- Routes are organized into separate files (`users.js` and `products.js`) within the **routes/** folder.
- A central **data.js** file simulates a database for both users and products.

## How It Works
- The server is built using Node.js and Express.
- It listens for incoming requests on port `3000`.
- The application uses modular routing to handle API endpoints for users and products.
- A simple HTML welcome page is served at the root (`/`).
- Invalid routes are caught and a custom 404 message is returned.

## Usage
Start the server using the following commands:

```bash
npm install
npm start
```

Then open your browser and navigate to:
- [http://localhost:3000/](http://localhost:3000/) for the Main Page.
- [http://localhost:3000/api/users](http://localhost:3000/api/users) for the Users API.
- [http://localhost:3000/api/products](http://localhost:3000/api/products) for the Products API.

Test the endpoints using your browser, Postman, or any other API testing tool.

## Folder Structure
```
project/
│
├── routes/
│   ├── users.js         # User-related routes
│   └── products.js      # Product-related routes
│
├── data.js              # Simulated database
├── app.js               # Main server file
├── package.json         # Project metadata and dependencies
├── package-lock.json    # Exact dependency versions
```

## Authors
- אליאס דבאג  
- נור עמאר

---

### Sources
- Express Documentation: [https://expressjs.com/](https://expressjs.com/) citeturn0search0
- Node.js Documentation: [https://nodejs.org/en/docs/](https://nodejs.org/en/docs/) citeturn0search0

This README maintains the same structure and font hierarchy as your original sample while detailing the features of your current project.

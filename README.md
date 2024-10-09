<details>
<summary>BOOKSHELF</summary>

# Book Search Application

# Develop a React application allowing users to search for books using the Open Library API and maintain a personal bookshelf in the browser using localStorage.

Deploy at onrender platform <a href="https://bookshelf-k0iy.onrender.com/">Try Here</a>

## Setup Instructions

1. Clone the repository:

   ```bash
   git clone <https://github.com/Sangam5756/BOOKSHELF.git>
   cd BOOKSHELF
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Run the application:
   ```bash
   npm run dev
   ```

# Features

Real-time Search: Users can search for books in real-time as they type.
<br>
Add to Bookshelf: Users can add books to their personal bookshelf.

Persistent Storage: Bookshelf data is stored persistently using the Web Storage API (localStorage).
<br>
Two Pages: A search page and a personal bookshelf page.

# SCREENSHOTS

 <br>
 
 ![1](https://github.com/Sangam5756/BOOKSHELF/assets/132483734/cac22575-f411-4578-bcc6-778129d14824)
![2](https://github.com/Sangam5756/BOOKSHELF/assets/132483734/a749f7e2-1642-4700-b5c7-1e7a3fffcf33)
![3](https://github.com/Sangam5756/BOOKSHELF/assets/132483734/b325bcbc-ec18-4bab-b227-677c7524ddcf)
![4](https://github.com/Sangam5756/BOOKSHELF/assets/132483734/ff775b58-7cd3-4a39-bf71-afb09a668bbb)

</details>



<details>
<summary>Employee_Management_Admin_Panel</summary>

# Employee Management System (Admin Panel)

This is a simple **Employee Management System** with an **Admin Panel** built using **Express.js** and **EJS** for templating. The system allows an admin to manage employees, including creating, editing, deleting, and searching for employees, as well as managing user login and registration.

## Features

- **User Authentication:**
  - Admin login and registration system.
  - Session management using `express-session`.

- **Employee Management:**
  - CRUD operations (Create, Read, Update, Delete) for employee data.
  - Search functionality for employees.
  - View and edit employee information.

- **Security:**
  - Role-based access control using session management.
  - Middleware to protect routes and ensure only logged-in users can access certain pages.

## Technologies Used

- **Backend:**
  - Express.js (Node.js framework)
  - EJS (Embedded JavaScript templating engine)
  - Express Session (Session management)
  - Body Parser (To handle form data)
  
- **Frontend:**
  - HTML, CSS, and EJS for the admin panel views.
  
- **Middleware:**
  - Custom middleware for authentication and session handling.

## Project Structure

```bash
├── public/
│   └── # Static files (CSS, JS, images)
├── routes/
│   ├── admin.routes.js   # Admin routes for employee management
│   ├── login.route.js    # Login route
│   └── register.route.js # Register route
├── controller/
│   ├── admin.controller.js  # Controller for admin logic
│   ├── login.controller.js  # Controller for login logic
│   └── register.controller.js # Controller for registration logic
├── views/
│   ├── employee/   # EJS files for employee management (list, edit, etc.)
│   ├── login.ejs   # EJS file for login page
│   └── register.ejs # EJS file for register page
├── middleware.js    # Middleware to require login
├── app.js           # Main server file
└── package.json     # Project dependencies


</details>

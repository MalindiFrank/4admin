## 4admin

#### A simple e-commerce admin dashboard built using Angular to manage products and users. This project uses the ``fakestoreapi`` to generate date for site. Visit the [fakestoreapi](https://fakestoreapi.com) website for their API documentation. 


### Objective
Build an admin dashboard to:
- Authenticate users.
- Manage products (view, add, edit, delete).
- Manage users (view user list).

---

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.0.7.

### Getting Started

Nodejs is required for this project, install nodejs here [Nodejs](https://nodejs.org/en/download/current)

Clone this repo and run the following commands:

1. Clone this repository:
   ```bash
   git clone https://github.com/MalindiFrank/4admin.git
   ```

2. Navigate to the project directory:
   ```bash
   cd 4admin
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Run the development server:
   ```bash
   ng serve
   ```

5. Open your browser and navigate to:
   ```
   http://localhost:4200
   ```

---

Once the server is running, open your browser and navigate to `http://localhost:4200/` or the specified path. The application will automatically reload whenever you modify any of files.

### Features

#### User Authentication
- **Login Page**: Authenticate using the FakeStore API.
  - Endpoint: `https://fakestoreapi.com/auth/login`
  - On successful login, store the received token in local storage.
  - Redirect the user to the main dashboard upon login.

#### Product Management
- **Product List**: Fetch and display all products.
  - Endpoint: `https://fakestoreapi.com/products` (GET)
- **Product Details**: View detailed information about a selected product.
  - Endpoint: `https://fakestoreapi.com/products/{id}` (GET)
- **Add Product**: Add a new product using a form.
  - Endpoint: `https://fakestoreapi.com/products` (POST)
- **Update Product**: Edit product details.
  - Endpoint: `https://fakestoreapi.com/products/{id}` (PUT)
- **Delete Product**: Remove a product.
  - Endpoint: `https://fakestoreapi.com/products/{id}` (DELETE)

#### User Management
- **List Users**: Fetch and display a list of users.
  - Endpoint: `https://fakestoreapi.com/users` (GET)
  - Display basic information like username, email, and role (if available).

---

### Technical Requirements

#### API Requests
Utilize Angular's modules to perform API requests:
- **GET**: Retrieve data.
- **POST**: Create new data.
- **PUT**: Update existing data.
- **DELETE**: Remove data.

#### Components
- **Login Component**: For user authentication.
- **Product List Component**: Display all products.
- **Product Details Component**: Show detailed product info.
- **Product Form Component**: Add or edit products.
- **User List Component**: Show all users.

#### Routing
- Define routes for each feature to ensure seamless navigation.
- Protect routes with an authentication guard to restrict unauthorized access.

#### Error Handling
- Handle API errors gracefully.
- Display user-friendly error messages.

#### Styling
- Apply basic styling using Angular Material or custom CSS.
- Ensure a professional and clean user interface.

---

### Suggested Features

#### Filter/Search Products
- Enable filtering or searching within the product list for better usability.

#### Pagination
- Implement pagination for product and user lists to enhance performance and user experience.

#### Responsive Design
- Make the app mobile-friendly for better accessibility across devices.

---

### API Endpoints

#### Authentication
- **Login**: `https://fakestoreapi.com/auth/login` (POST)

#### Products
- **Get All Products**: `https://fakestoreapi.com/products` (GET)
- **Get One Product**: `https://fakestoreapi.com/products/{id}` (GET)
- **Add Product**: `https://fakestoreapi.com/products` (POST)
- **Update Product**: `https://fakestoreapi.com/products/{id}` (PUT)
- **Delete Product**: `https://fakestoreapi.com/products/{id}` (DELETE)

#### Users
- **List All Users**: `https://fakestoreapi.com/users` (GET)

---


## Contributing
Contributions are very well encouraged! Please fork this repository and submit a pull request for any improvements or bug fixes.

---

### License
This project is licensed under the MIT License. See the LICENSE file for details.

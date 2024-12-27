# E-Commerce Cart Application

## Overview
This application is a simple e-commerce cart system that enables users to explore products, filter them based on specific criteria, and manage their shopping cart effectively. The application is built with NextJS and Tailwind CSS.

## Core Features
1. **Search Functionality**:
   - Users can search for products by typing keywords into the search bar.
   - Search results dynamically update to show relevant products.

2. **Product Filtering**:
   - Users can filter products by price in two ways:
     - High to Low
     - Low to High

3. **Cart Management**:
   - Add products to the cart.
   - Change the quantity of products in the cart.
   - Remove products from the cart.

## Technologies Used
- **NextJS**: For building the user interface.
- **Tailwind CSS**: For styling and responsive design.
- **React Context API**: For state management of cart items.
- **LocalStorage**: To persist cart data across page refreshes.

## Getting Started
1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
4. Open the application in your browser at `http://localhost:3000`.

## Additional Features (Future Enhancements)
1. **Advanced Filters**:
   - Add filters to sort products by rating.
   - Include an "In Stock" filter to display only available products.

2. **Pagination**:
   - Implement pagination for better performance and user experience when dealing with large datasets.

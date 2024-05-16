# Homble Frontend Assessment

## Installation

1. Clone the repository or download the project files.
2. Open a terminal or command prompt and navigate to the project directory.
3. Run the following command to install the required dependencies: `npm install`. I've made use of 'react-bootstrap' for styling.
4. Now that the dependencies are installed run `npm start` to run the project on local host.
5. Open `http://localhost:3000/` on browser.

## Structure

I've added the following standard directories under the src folder

- _components:_ contains AddProductModal and NavigationBar
- _context:_ contains ToastProvider which allows us to display toast notifications
- _hooks:_ contains two custom hooks that handles interactions with the provided APIs
- _assets:_ contains SVGs used in the project

## Assessment Tasks

### Task 1: Product Listing Page

**Objective**: Create a page to display a list of products sorted by price - ✅

**Details**:

1. Fetch product data from the server - ✅
2. Sort the products based on their selling price - ✅
3. Display the products in a responsive grid - ✅

   - 3 columns on large screens
   - 2 columns on medium screens
   - 1 column on mobile devices

4. Use skeleton components while products are loading - ✅
5. On Click of the product tile it should redirect to the specific product page - ✅
6. Create an “Add Product Button” - ✅
7. Opens a modal with 3 input fields and “Add” button - ✅

   - Product Name
   - Product Description
   - Product Allergen Info
   - On Click “Add” - Should submit a post request to endpoint: `/products`

### Task 2: Individual Product Details

**Objective**: Build a product details page - ✅

**Details**:

1. Fetch individual product data from the server using the endpoint: `/products/:id` - ✅
2. Display product information including product name, price, description, allergens, and usage instructions - ✅
3. Implement expandable/collapsible sections for the description, allergen information, and usage (all sections should be able to expand/collapse independently) - ✅
4. Show a “Loading…” text when details are loading - ✅ (shows loading gif)

### Task 3: Code Improvement

**Objective**: Optimize and enhance the resilience of your implementation - ✅

**Details**:

1. Develop a custom hook for fetching data from the server and sending requests - ✅
2. Ensure you handle errors—simply show a text message: “Something went wrong.” - ✅
3. Memoize the computed values - ✅ (**implemented memoization in Dashboard**)

### Bar Raiser: Dashboard

This is optional but would help us understand your current proficiency level, so do give it a try anyways.

**Objective:** Creating a dashboard (a table interface) for managing products.

**Details:**

- Get list of products with ids, selling price and name from endpoint `/dashboard` - ✅
- Create a table like interface with headings and buttons to sort the data - ✅
- Implement sorting functionality that allows sorting by product ID, selling price, or name - ✅
- Enable a Check button - ✅
  - Provide a "Check" button for each element (row).
  - Clicking this button should remove the element from the page without reloading, allowing for continuous operations.
- Add a search bar on top of table that supports "contains" search for product name or ID - ✅

# MEANecomm
#### My attempt to build a stable ecommerce platform using the "MEAN" stack.
This repository's structure *should* be pretty self-explanatory:
- `/` - The root of the project, nothing interesting here.
- `/Server` - Contains all of the server-side logic for the application.
- `/Client` - Contains all of the client-side logic for the application.

I'm going to do my try and include a `README` in each major directory to help break things down and make it easier to understand (this helps me make sure I know what's going on, and may help somebody else learn something new.)

This project is not going to consist of anything spectacular, it is merely my attempt to build an ecommerce platform using the "MEAN" stack. Everything contained within this repository is licensed under an MIT license, which can be found [`here`](https://github.com/devbrynden/MEANecomm/blob/main/LICENSE.md).

## Requirements
This is a pretty generic list of "requirements" that I think any simple ecommerce platform should consist of. This list is not in any particular order, and is likely to change moving forward.

1.  **User Authentication and Authorization:**
    -   User registration and login.
    -   Authentication middleware to protect routes.
    -   User roles (customer, seller, admin).
2.  **Product Management:**
    -   CRUD operations for products.
    -   Categories and subcategories management.
    -   Product search and filtering.
3.  **Shopping Cart:**
    -   Add/remove products to/from cart.
    -   Adjust product quantities.
    -   Checkout process.
4.  **Order Management:**
    -   Place orders.
    -   View order history.
    -   Order status tracking.
6.  **Payment Integration:**
    -   Integration with payment gateways (e.g., Stripe, PayPal) for secure transactions.
6.  **Admin Panel:**
    -   Dashboard for managing users, products, orders, and categories.
    -   Role-based access control for admin functionalities.
7.  **Reviews and Ratings:**
    -   Allow users to leave reviews and ratings for products.
    -   Display average ratings and reviews on product pages.
8.  **Responsive Design:**
    -   Ensure the platform is responsive and accessible across various devices and screen sizes.
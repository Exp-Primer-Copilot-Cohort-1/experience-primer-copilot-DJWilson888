// Create web server 
// 1. Get the express module
const express = require('express');
// 2. Create an instance of the server
const app = express();
// 3. Create a port number
const port = 3000;
// 4. Create a route
app.get('/', (req, res) => res.send('Hello World!'));
// 5. Start the server
app.listen(port, () => console.log(`Example app listening on port ${port}!`));

// 6. Create a route for comments
app.get('/comments', (req, res) => res.send('Comments page'));

// 7. Create a route for contacts
app.get('/contacts', (req, res) => res.send('Contacts page'));

// 8. Create a route for products
app.get('/products', (req, res) => res.send('Products page'));

// 9. Create a route for services
app.get('/services', (req, res) => res.send('Services page'));

// 10. Create a route for news
app.get('/news', (req, res) => res.send('News page'));

// 11. Create a route for about us
app.get('/about', (req, res) => res.send('About page'));

// 12. Create a route for careers
app.get('/careers', (req, res) => res.send('Careers page'));

// 13. Create a route for login
app.get('/login', (req, res) => res.send('Login page'));

// 14. Create a route for signup
app.get('/signup', (req, res) => res.send('Signup page'));

// 15. Create a route for logout
app.get('/logout', (req, res) => res.send('Logout page'));

// 16. Create a route for home
app.get('/home', (req, res) => res.send('Home page'));

// 17. Create a route for cart
app.get('/cart', (req, res) => res.send('Cart page'));

// 18. Create a route for checkout
app.get('/checkout', (req, res) => res.send('Checkout page'));

// 19. Create a route for profile
app.get('/profile', (req, res) => res.send('Profile page'));

// 20. Create a route for forgot password
const express = require('express');
app.get('/forgotpassword', (req, res) => res.send('Forgot Password page'));

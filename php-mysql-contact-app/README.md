# PHP MySQL Contact App

## Overview
This project is a simple PHP and MySQL application that allows users to submit their contact information and queries through a contact form. The submitted data is stored in a MySQL database, making it easy to manage and respond to user inquiries.

## Project Structure
```
php-mysql-contact-app
├── public
│   ├── contact.html          # HTML structure for the contact page
│   ├── css
│   │   └── styles.css       # CSS styles for the contact page
│   └── js
│       └── scripts.js       # JavaScript for client-side functionality
├── src
│   ├── db
│   │   └── connection.php    # Database connection script
│   └── handlers
│       └── contact_handler.php # Handles form submissions
├── .env                      # Environment variables for sensitive data
├── .htaccess                 # Apache server configuration
└── README.md                 # Project documentation
```

## Setup Instructions

1. **Clone the Repository**
   Clone this repository to your local machine using:
   ```
   git clone <repository-url>
   ```

2. **Install Dependencies**
   Ensure you have PHP and MySQL installed on your machine. You may also need to install Composer for managing dependencies.

3. **Configure Environment Variables**
   Create a `.env` file in the root directory and add your database credentials:
   ```
   DB_HOST=localhost
   DB_USER=your_username
   DB_PASS=your_password
   DB_NAME=your_database
   ```

4. **Set Up the Database**
   Create a MySQL database and a table to store the contact form submissions. You can use the following SQL command as an example:
   ```sql
   CREATE TABLE contacts (
       id INT AUTO_INCREMENT PRIMARY KEY,
       name VARCHAR(255) NOT NULL,
       email VARCHAR(255) NOT NULL,
       subject VARCHAR(255) NOT NULL,
       message TEXT NOT NULL,
       created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
   );
   ```

5. **Configure Apache**
   If you're using Apache, ensure that the `.htaccess` file is configured correctly to handle URL rewriting and other directives.

6. **Access the Application**
   Open your web browser and navigate to `http://localhost/php-mysql-contact-app/public/contact.html` to access the contact form.

## Usage
- Fill out the contact form with your name, email, subject, and message.
- Upon submission, the form data will be sent to the server and stored in the MySQL database.
- You can modify the `src/handlers/contact_handler.php` file to customize how the form data is processed.

## Contributing
Contributions are welcome! Please feel free to submit a pull request or open an issue for any enhancements or bug fixes.

## License
This project is open-source and available under the MIT License.
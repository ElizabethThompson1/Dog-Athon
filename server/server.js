const express = require('express');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/userRoutes'); // Move this line below the definition of snipcartApiKey
// const cartRoutes = require('./routes/cartRoutes');
const eventRoutes = require('./routes/eventRoutes');
const gearRoutes = require('./routes/gearRoutes');
const snipcart = require('./routes/snipcart');
const dotenv = require('dotenv');
const cors = require('cors');
const multer = require('multer');
const path = require('path');
const fs = require('fs');
dotenv.config();

// Define snipcartApiKey
const snipcartApiKey = process.env.SNIPCART_API_KEY;

// Configure storage for Multer
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const uploadDir = 'uploads/';

    fs.mkdir(uploadDir, { recursive: true }, function (err) {
      if (err) {
        console.error('Error creating upload directory:', err);
      }

      cb(null, uploadDir);
    });
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
  }
});

const upload = multer({ storage: storage });

// Initialize Express app
const app = express();
app.use(bodyParser.json());

app.use(cors());

// Authentication endpoints
// Require userRoutes.js and pass snipcartApiKey to it
const userRoutesWithApiKey = require('./routes/userRoutes')(snipcartApiKey);
app.use('/users', userRoutesWithApiKey);

// Routes for cart data
// app.use('/carts', cartRoutes);

// Routes for snipcart data
app.use('/snipcart', snipcart);

// Routes for event data
app.use('/events', eventRoutes);

// Routes for gear item data
app.use('/gear', gearRoutes);

// Start the server
const PORT = process.env.PORT || 3309;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

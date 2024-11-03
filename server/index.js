// const express = require("express");
// const cors = require("cors");
// const path = require("path");

// const app = express();
// app.use(cors());

// app.listen(process.env.PORT || 3001, () => {
//   console.log(`Server listening on ${process.env.PORT || 3001}`);
// });

// app.get("/api/:name", (req, res) => {
//   res.json({ message: `Hello ${req.params.name}, from server!` });
// });

// // Have Node serve the files for our built React app
// // app.use(express.static(path.resolve(__dirname, "./client/build")));
// app.use(express.static(path.join(__dirname, "/client/build")));

// // All other GET requests not handled before will return our React app
// app.get("*", (req, res) => {
//   res.sendFile(path.resolve(__dirname, "./client/build", "index.html"));
// });


// server/index.js
const express = require("express");
const cors = require("cors");
const path = require("path");
const { Pool } = require("pg");

const app = express();
app.use(cors());
app.use(express.json()); // To parse JSON data from POST requests

const pool = new Pool({
  connectionString: process.env.DATABASE_URL, // Neon.tech connection string
  ssl: { rejectUnauthorized: false }
});

app.listen(process.env.PORT || 3001, () => {
  console.log(`Server listening on ${process.env.PORT || 3001}`);
});

// POST endpoint for form submissions
app.post("/api/submit-form", async (req, res) => {
  const {
    firstName,
    lastName,
    eventDate,
    eventCity,
    email,
    phone,
    serviceType,
    guestCount,
    eventDetails
  } = req.body;

  try {
    const result = await pool.query(
      `INSERT INTO contact_form_submissions (first_name, last_name, event_date, event_city, email, phone, service_type, guest_count, event_details)
       VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING *`,
      [firstName, lastName, eventDate, eventCity, email, phone, serviceType, guestCount, eventDetails]
    );
    res.status(200).json({ message: 'Form submitted successfully', data: result.rows[0] });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error submitting form', error });
  }
});

// Serve React app
app.use(express.static(path.join(__dirname, "/client/build")));

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./client/build", "index.html"));
});




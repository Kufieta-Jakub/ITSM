const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");

const app = express();
app.use(cors()); // pozwala Reactowi łączyć się z backendem

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "itsmapp"
});

// endpoint do pobrania ticketów
app.get("/api/tickets", (req, res) => {
  db.query("SELECT * FROM tickets", (err, results) => {
    if (err) {
      return res.status(500).json({ error: "Błąd bazy danych" });
    }
    res.json({ tickets: results });
  });
});

app.get("/api/numTicketsSummary", (req, res) => {
  const query = `
    SELECT
      COUNT(*) AS total,
      SUM(CASE WHEN Status = 'New' THEN 1 ELSE 0 END) AS new,
      SUM(CASE WHEN Status = 'Resolved' THEN 1 ELSE 0 END) AS resolved
    FROM tickets
  `;

  db.query(query, (err, results) => {
    if (err) {
      return res.status(500).json({ error: "Błąd bazy danych" });
    }
    // results[0] zawiera obiekt z trzema liczbami
    res.json(results[0]);
  });
});


app.listen(3100, () => {
  console.log("Server działa na http://localhost:3100");
});

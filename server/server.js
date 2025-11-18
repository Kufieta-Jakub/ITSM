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
  db.query(`
    SELECT 
      t.Id,
      t.Title,
      c.Name,
      c.Surname,
      t.Status,
      t.Creation_Date
      FROM tickets t
      JOIN clients c ON t.Client_Id = c.Id
  `, (err, results) => {
    if (err) {
      return res.status(500).json({ error: "Błąd bazy danych" });
    }
    res.json({ tickets: results });
  });
});

app.get("/api/getLastTicketId", (req, res) => {
  db.query(`
    SELECT 
      MAX(Id) as Id
      FROM tickets;
  `, (err, results) => {
    if (err) {
      return res.status(500).json({ error: "Błąd bazy danych" });
    }
    res.json({ lastId: results[0].Id });
  });
});


app.get("/api/getClientWith/:value", (req, res) => {
  const value = `%${req.params.value}%`;
  db.query(
    `SELECT Id, Name, Surname, Company FROM clients WHERE CONCAT(Name, ' ',Surname) LIKE ?`,
    [value],
    (err, results) => {
      if (err) return res.status(500).json({ error: "Błąd bazy danych" });
      res.json({ clients: results });
    }
  );
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

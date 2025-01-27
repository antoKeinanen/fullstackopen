const express = require("express");

const app = express();
app.use(express.json());

let contacts = [
  {
    name: "Arto Hellas",
    number: "040-123456",
    id: "1",
  },
  {
    name: "Ada Lovelace",
    number: "39-44-5323523",
    id: "2",
  },
  {
    name: "Dan Abramov",
    number: "12-43-234345",
    id: "3",
  },
  {
    name: "Mary Poppendieck",
    number: "39-23-6423122",
    id: "4",
  },
];

app.get("/api/persons", (req, res) => {
  res.json(contacts);
});

app.get("/api/persons/:id", (req, res) => {
  const id = req.params.id;
  const found = contacts.find((c) => c.id == id);

  if (!found) {
    console.error("Failed to get person with id", id);
    res.sendStatus(404);
    return;
  }

  res.json(found);
});

app.post("/api/persons", (req, res) => {
  const person = req.body;

  const id = (Math.floor(Math.random() * (1_000_000 - 100)) + 100).toString();
  person["id"] = id;

  contacts.push(person);

  res.status(201);
  res.json(person);
});

app.delete("/api/persons/:id", (req, res) => {
  const id = req.params.id;
  const preFiltered = contacts.length;
  contacts = contacts.filter((c) => c.id != id);

  if (preFiltered == contacts.length) {
    console.error("Failed to delete person with id", id);
    res.sendStatus(404);
    return;
  }

  res.sendStatus(204);
});

app.get("/info", (req, res) => {
  const now = new Date().toString();
  res.send(`Phonebook has info for ${contacts.length} people <br> ${now}`);
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

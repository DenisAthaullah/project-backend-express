import express from "express";

const app = express();
app.use(express.json());

//Dummy data
let users = [
    { id: 1, name: "ucup" },
    { id: 2, name: "rucup" },
];

//method get
app.get("/users", (req, res) =>{
    res.json(users);
});

//method post
app.post("/users", (req, res) =>{
    const { name } = req.body;
    const newUser = { id: users.length + 1, name:name };
    users.push(newUser)
    res.status(201).json(newUser);
});


app.get("/tes", (req, res) => {
    res.send("selamat datang di sistem saya...");
})

app.listen(5001, () => console.log("Server running on http://localhost:5001"))
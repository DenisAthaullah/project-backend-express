import express from "express";

const app = express();

app.get("/tes", (req, res) => {
    res.send("selamat datang di sistem saya...");
})

app.listen(5001, () => console.log("Server running on http://localhost:5001"))
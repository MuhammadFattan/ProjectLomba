const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middlewere
app.use(cors());
app.use(express.json());

// Koneksi ke MongoDB
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log("MongoDB connected"))
.catch((err) => console.error(" MongoDB error:", err));

//schema & model komentar
const commentSchema = new mongoose.Schema({
    name: String,
    text: String,
    date: { type: Date, default: Date.now}
});

const Comment = mongoose.model("Comment", commentSchema);

// GET komentar
app.get("/comments", async (req, res) => {
    const comments = await Comment.find().sort({ date: -1 }); // Terbaru
    res.json(comments);
});

// POST tambah komentar
app.post("/comments", async (req, res) => {
    const { name, text } = req.body;
    if (!name || !text) {
        return res.status(400).json({ error: "Nama dan komentar wajib diisi" });
    }
    const newComment = new Comment({ name, text });
    await newComment.save();
    res.json(newComment);
});

// Start server
app.listen(PORT, () => {
    console.log(`Server berjalan di port:${PORT}`);
});
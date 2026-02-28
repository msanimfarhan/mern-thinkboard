import express from "express";

const app = express();

app.get("/api/notes", (req,res) =>{
    res.status(200).send("you got 30 notes");
});

app.post("/api/notes", (req,res) =>{
    res.status(201).json({message : "post created successfully"});
});

app.update("/api/notes", (req,res) =>{
    res.status(201).json({message : "post updated successfully"});
});

app.listen(5001, ()=>{
    console.log("Server started on port: 5001");
});
import express from "express";

export const app = express();

app.get('/status', (req, res) => {
    res.status(200).json({message: 'API server ready'});
})

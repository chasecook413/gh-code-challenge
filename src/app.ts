import express from "express";
import {getPullRequests} from "./integrations/github";

export const app = express();

app.get('/status', (req, res) => {
    res.status(200).json({message: 'API server ready'});
});

app.get("/github/:owner/:repo/pull-requests", async (req, res) => {
    const owner = req.params['owner'];
    const repo = req.params['repo'];
    try {
        const data = await getPullRequests(owner, repo);
        res.status(200).json({message: "Pull request data retreived", data});
    } catch (err) {
        console.error(err);
        res.status(500).json({message: "Unable to retrieve pull requests"});
    }
});

app.use((req, res) => {
    return res.status(404).json({message: "Invalid path"});
});

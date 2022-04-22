import express from "express";
import * as GithubRoute from "./routes/github";
import {notFoundResponse} from "./utils/api-helper";

export const app = express();

app.get("/github/:owner/:repo/pull-requests", GithubRoute.getPullRequests);
app.use((req, res) => {
    return notFoundResponse(res);
});

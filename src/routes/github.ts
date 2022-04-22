import {Request, Response} from "express";
import * as Github from "../integrations/github";
import {errorResponse, successResponse} from "../utils/api-helper";

export async function getPullRequests(req: Request, res: Response) {
    const owner = req.params['owner'];
    const repo = req.params['repo'];
    try {
        const data = await Github.getPullRequests(owner, repo);
        return successResponse(res, "Pull request data retreived", data);
    } catch (err) {
        console.error(err);
        return errorResponse(res, "Unable to retrieve pull requests");
    }
}

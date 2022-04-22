import axios from "axios";
import {PullRequest, PullRequestListEntry} from "./interfaces";
const GITHUB_API_URL = process.env.GITHUB_API_URL || "https://api.github.com";

export async function getPullRequest(owner: string, repo: string, pullNumber: number): Promise<PullRequest> {
    const response = await axios.get<PullRequest>(`${GITHUB_API_URL}/repos/${owner}/${repo}/pulls/${pullNumber}`);
    return response.data;
}

export async function getPullRequests(owner: string, repo: string) {
    const pullRequestsResponse = await axios.get<PullRequestListEntry[]>(`${GITHUB_API_URL}/repos/${owner}/${repo}/pulls`);
    const pullRequestList = pullRequestsResponse.data;
    let manipulatedData = await Promise.all(pullRequestList.map(async (pullRequestEntry: PullRequestListEntry): Promise<any> => {
        const pullRequest = await getPullRequest(owner, repo, pullRequestEntry.number);
        return {
            number: pullRequest.number,
            title: pullRequest.title,
            author: pullRequest.user.login,
            commit_count: pullRequest.commits,
        }
    }));

    // since we got them asynchronously, we should order them to look like the example
    manipulatedData.sort((a, b) => {
        return a.number - b.number;
    });

    let id = 0;
    // they also tack an id on there in their example..
    manipulatedData = manipulatedData.map(a => {
        a.id = ++id;
        return a;
    });
    return manipulatedData;
}

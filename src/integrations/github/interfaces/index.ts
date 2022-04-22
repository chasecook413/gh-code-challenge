
interface PullRequestUser {
    login: string;
}

export interface PullRequest {
    title: string;
    number: number;
    user: PullRequestUser;
    commits: number;
}

export interface PullRequestListEntry {
    number: number;
}

export interface PullRequestAPIResponse {
    number: number;
    title: string;
    author: string;
    commit_count: number;
    id?: number;
}


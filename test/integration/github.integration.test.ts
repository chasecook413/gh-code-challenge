import axios from "axios";
const API_URL = process.env.API_URL || 'http://localhost:8080';
const URL_PATH = '/github';
const TEST_PULL_REQUEST = [
    {
        number: 1,
        title: 'test test test',
        author: 'chasecook413',
        commit_count: 1,
        id: 1
    }
];

describe("/github API endpoints", () => {
    it("should respond 200 with valid data given an existing repo", async () => {
        const pullRequestsResponse = await axios.get(`${API_URL}${URL_PATH}/chasecook413/ts-tunnel/pull-requests`);
        const pullRequests = pullRequestsResponse.data;
        expect(pullRequestsResponse.status).toEqual(200);
        expect(pullRequests.data).toStrictEqual(TEST_PULL_REQUEST);
    });

    it("should respond 500 given a non-existent repo", async () => {
        const p = axios.get(`${API_URL}${URL_PATH}/chasecook413/non-existing-repo/pull-requests`);
        await expect(p).rejects.toThrow('Request failed with status code 500');
    });
});


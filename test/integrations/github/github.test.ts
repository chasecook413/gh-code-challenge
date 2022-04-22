import { getPullRequests } from "../../../src/integrations/github";
const TEST_PULL_REQUEST = [
    {
        number: 1,
        title: 'test test test',
        author: 'chasecook413',
        commit_count: 1,
        id: 1
    }
];

describe("test add function", () => {
    it("should retrieve a single pull request successfully", async () => {
        const pullRequests = await getPullRequests('chasecook413', 'ts-tunnel');
        expect(pullRequests).toHaveLength(1);
        expect(pullRequests).toStrictEqual(TEST_PULL_REQUEST);
    });

    it("should throw an error on an invalid repo", async () => {
        await expect(getPullRequests('chasecook413', 'testing'))
            .rejects
            .toThrow('Request failed with status code 404');
    });
});

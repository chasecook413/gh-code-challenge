## Git Integration API

A wrapper API that integrates with Github, and potentially other Git tools, to interact and retrieve data about code projects.

This project uses Typescript, Express, as well as Jest for performing unit and API tests. 

### Starting the API

Install dependencies:
    
    npm install

Starting the API server:

    npm start

### Building the API:

The above option uses [ts-node](https://www.npmjs.com/package/ts-node) to execute typescript without pre-compiling. This helps when developing locally, but it may be preferable to compile the code before running outside of development. To build, run:

    npm run build

The compiled code will be available in the `/dist` folder at the root of the project. 

### Testing:

Tests are split into unit tests and integration tests. To run unit tests, it's simply:

    npm run test:unit

To execute integration tests, the API server needs to be running either locally or somewhere else.

    npm run test:integration

The above command assumes you are running the API server locally on port 8080 by default. To execute against another environment, you can supply the following environment variable:

    API_URL=http://your-testing-server:8080 npm run test:integration

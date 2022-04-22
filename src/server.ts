import { app } from "./app";
const port = process.env.PORT || 8080;

async function main() {
    app.listen(port, () => {
        console.log(`API Server started on port ${port}`);
    });
}

main().catch((err) => {
    console.error(`Error: ${err.message}`);
    console.error('Exiting');
});

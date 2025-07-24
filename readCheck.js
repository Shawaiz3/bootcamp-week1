//Task 3

import { readJson } from "./safeRead.js";
async function main() {
    try {
        const data = await readJson('./MOCK_DATA.json');
        console.log(`Parsed Data`, data);
    } catch (err) {
        if (err === "FileError") {
            console.log("custom file error: ", err.message);
        } else {
            console.log("Error From Main: ", err.message)
        }
    }

}
main();
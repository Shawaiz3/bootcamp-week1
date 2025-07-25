//Task 3
import { FileError, readJson } from "./safeRead.js";

const readFile = async function () {
    try {
        const data = await readJson('./MOCK_DATA.json');
        console.log(`Parsed Data`, data);
    } catch (err) {
        // log the other errors except file error here . and pass the file error to main catch block
        if (!(err instanceof FileError)) {
            console.log("Error Other than File error: ", err.message)
        } else {
            throw err;
        }
    }
}

async function main() {
    try {
        await readFile()
    } catch (err) {
        if (err instanceof FileError) // checks if the error is the instance of custom error class of not
            {
            console.log("custom file error: ", err.message);
        }
    }

}
main();

//async ,  sync
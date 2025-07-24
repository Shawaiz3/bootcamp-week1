//Task 3

import fs from "fs/promises";

class FileError extends Error {
    constructor(message) {
        super(message);
        this.name = "FileError";
    }
}

export async function readJson(path) {
    try {
        const data = await fs.readFile(path, 'utf-8');
        return JSON.parse(data);
    }
    catch (err) {
        throw new FileError(`Error in file ${err.message}`);
    }
}

import { writeFile, readFile, appendFile } from "fs/promises";

const addContent = async (fname, content) => {
    await writeFile(fname, content);
    console.log(`${content} written in file: ${fname}`);
};

const readContent = async (fname) => {
    const data = await readFile(fname, "utf-8");
    return data;
};

const appendData = async (fname, content) => {
    await appendFile(fname, "\n" + content);
};

await addContent("notes.txt", "FS is easy in JS");
await appendData("notes.txt", "No, it's hard.");

console.log(await readContent("notes.txt"));
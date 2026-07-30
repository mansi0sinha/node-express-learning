/*
Question:
Given a directory containing multiple files of different types,
write a Node.js program to organize the files into separate folders
based on their extensions (e.g., Images, Videos, Documents, Code).
Create the required folders if they do not exist and move each file
to its appropriate folder.
*/
const fs = require("fs");
const path = require("path");
const types = {
    Images: ["jpg", "png", "jpeg", "gif"],
    Videos: ["mp4", "mkv", "avi"],
    Music: ["mp3", "wav"],
    Documents: ["pdf", "docx", "txt"],
    Code: ["js", "cpp", "java", "py"]
}
const files = fs.readdirSync("./practice/organizeFile");
const rootdir = "./practice/organizeFile/";
for (const file of files) {
    //check if file it is a file or folder
    const stats = fs.statSync(path.join(rootdir, file));
    if (stats.isFile()) {
        let ext = path.extname(file).slice(1);
        let result = Object.entries(types).find(([key, value]) => {
            return value.includes(ext);
        });
        let folder = result ? result[0] : "Others";
        if (!fs.existsSync(path.join(rootdir, folder))) {
            fs.mkdirSync(path.join(rootdir, folder));
        }
        let oldPath = path.join(rootdir, file);
        let newPath = path.join(rootdir, folder, file);
        fs.renameSync(oldPath, newPath);
    }
    else {
        continue;
    }
}
console.log("Files Organized");
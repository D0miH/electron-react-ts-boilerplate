import { app, BrowserWindow } from "electron";
import path from "path";
import url from "url";

async function createWindow() {
    // Create the browser window.
    let win = new BrowserWindow({
        width: 800,
        height: 600
    });

    // and load the index.html of the app.
    if (process.env.NODE_ENV !== "production") {
        win.loadURL("http://localhost:3000");
    } else {
        win.loadURL(
            url.format({
                pathname: path.join(__dirname, "index.html"),
                protocol: "file:",
                slashes: true
            })
        );
    }
}

app.on("ready", createWindow);

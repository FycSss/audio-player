import { BrowserWindow as e, app as t } from "electron";
import n from "path";
//#region electron/main.ts
var r = process.env.NODE_ENV === "development";
function i() {
	let t = new e({
		width: 1200,
		height: 800,
		webPreferences: {
			preload: n.join(__dirname, "preload.js"),
			nodeIntegration: !0,
			contextIsolation: !1
		},
		backgroundColor: "#000000",
		title: "WaveForge Player"
	});
	r ? (t.loadURL("http://localhost:5173"), t.webContents.openDevTools()) : t.loadFile(n.join(__dirname, "../dist/index.html"));
}
t.whenReady().then(() => {
	i(), t.on("activate", () => {
		e.getAllWindows().length === 0 && i();
	});
}), t.on("window-all-closed", () => {
	process.platform !== "darwin" && t.quit();
});
//#endregion
export {};

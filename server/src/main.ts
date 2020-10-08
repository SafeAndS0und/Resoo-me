import express from "express";
import cors from "cors";
import { Page } from "./browser";

const app = express();
const port = 3001;

app.use(express.urlencoded());
app.use(express.json());
app.use(cors());

// app.get("/", async (req, res) => {
//   const body = req.query;
//   const url = body.url as string;
//   const filename = body.filename as string;
//   const browser = await puppeteer.launch();
//   const page = await browser.newPage();
//
//   await page.goto(url, {
//     waitUntil: "networkidle2",
//   });
//   const buffer = await page.pdf({ format: "A4" });
//   await browser.close();
//   console.log(url, filename);
//   res.set({
//     "Content-Type": "application/octet-stream",
//     "Content-Disposition": `attachment; filename=${filename || "resume"}.pdf`,
//     "Content-Length": buffer.length,
//   });
//   res.send(buffer);
// });

const main = async () => {
  const page = await Page();

  app.post("/", async (req, res) => {
    const body = req.body;
    const fn = body.fn;
    const ln = body.ln;
    await page.goto(`http://192.168.100.13:3000/resume?fn=${fn}&ln=${ln}`, {
      waitUntil: "networkidle2",
    });
    const buffer = await page.pdf({ format: "A4" });
    res.set({
      "Content-Type": "application/octet-stream",
      "Content-Disposition": `attachment; filename=resume.pdf`,
      "Content-Length": buffer.length,
    });
    res.send(buffer);
  });

  app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
  });
};

main();

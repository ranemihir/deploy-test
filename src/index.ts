import express from "express";

const app = express();
const PORT = 3000;

// @ts-ignore
app.get("/", (_req, res) => {
    res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      <title>🚀 Welcome</title>
      <style>
        body {
          font-family: 'Segoe UI', sans-serif;
          background: linear-gradient(120deg, #2c3e50, #3498db);
          color: #fff;
          text-align: center;
          padding: 10% 5%;
        }
        h1 {
          font-size: 3em;
          margin-bottom: 0.2em;
        }
        p {
          font-size: 1.2em;
        }
        .card {
          background-color: rgba(255,255,255,0.1);
          padding: 2em;
          border-radius: 12px;
          box-shadow: 0 10px 25px rgba(0,0,0,0.2);
          display: inline-block;
          margin-top: 2em;
        }
      </style>
    </head>
    <body>
      <h1>Blackbox AI Assignment</h1>
    </body>
    </html>
  `);
});

app.listen(PORT, "0.0.0.0", () => {
    console.log(`🌐 Server is running on http://0.0.0.0:${PORT}`);
});

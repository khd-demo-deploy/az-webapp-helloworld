const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html>
    <head>
      <title>Hello World - Azure App Service</title>
      <style>
        body { font-family: 'Segoe UI', sans-serif; display: flex; justify-content: center; align-items: center; min-height: 100vh; margin: 0; background: linear-gradient(135deg, #0078d4, #00bcf2); color: #fff; }
        .container { text-align: center; background: rgba(255,255,255,0.1); padding: 3rem; border-radius: 12px; backdrop-filter: blur(10px); }
        h1 { font-size: 2.5rem; margin-bottom: 0.5rem; }
        p { font-size: 1.2rem; opacity: 0.9; }
      </style>
    </head>
    <body>
      <div class="container">
        <h1>Hello, World! 🌍</h1>
        <p>Running on Azure App Service</p>
        <p><small>Node.js ${process.version}</small></p>
      </div>
    </body>
    </html>
  `);
});

app.get("/api/health", (req, res) => {
  res.json({ status: "healthy", timestamp: new Date().toISOString() });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

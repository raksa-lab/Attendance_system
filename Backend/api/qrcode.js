// server.js
const express = require('express');
const QRCode = require('qrcode');
const app = express();

const youtubeLink = "https://www.youtube.com/watch?v=TalaAYUD3NI";

app.get('/generate', async (req, res) => {
  try {
    // Generate QR code as base64 image URL
    const qrImage = await QRCode.toDataURL(youtubeLink);

    // Send complete HTML page with QR image embedded
    res.send(`
      <!DOCTYPE html>
      <html>
      <head>
        <title>QR Code Generator</title>
        <style>
          body { font-family: Arial, sans-serif; padding: 20px; }
          img { margin-top: 20px; }
        </style>
      </head>
      <body>
        <h2>QR Code for:</h2>
        <a href="${youtubeLink}" target="_blank">${youtubeLink}</a>
        <br/>
        <img src="${qrImage}" alt="QR Code" />
      </body>
      </html>
    `);
  } catch (err) {
    console.error('QR generation error:', err);
    res.status(500).send('❌ Error generating QR code');
  }
});

const PORT = 3002;
app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});

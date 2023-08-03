const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname, 'public')));
app.use('/asset', express.static(path.join(__dirname, 'asset')));

app.get('*', (req, res) => {
  const prefix = req.url.replace('/', '');
  const html = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Abidzar 5th Birthdays !</title>
        <link rel="stylesheet" href="/asset/styles.css">
        <link rel="icon" href="./asset/rocket.ico" type="image/x-icon">
    </head>
    <body>
        <div>
            <div class="invitation"> 
                <h2 class="color-first">Hallo ${prefix}</h2>
                <h2 class="color-second">Kamu Diundang Ke</h2>
            </div>
        <div class="event">
            <h2 class="abidzars-class">Abidzar's</h2>
            <h2 class="birthday-class">5TH BIRTHDAYS</h2>
        </div>
        <div class="information">
            <h2 class="date-class"> 05 | Agustus | 2023</h2>
            <h3 class="day-time">Sabtu, 10.00 WIB</h3>
            <h4 class="place">KFC GOLDEN CITY</h4>
            <h4 class="address">Jl. KALI ABANG TENGAH, TLK PUCUNG, KEC. BEKASI UTARA</h4>
        </div>
        <div class="button-container">
    <a href="https://www.google.com/maps/place/KFC+Golden+City+Bekasi/@-6.2077732,107.018334,17z/data=!3m1!4b1!4m6!3m5!1s0x2e69894db2102d8d:0x72a3a2213f8d4c13!8m2!3d-6.2077785!4d107.0209089!16s%2Fg%2F11df5tb232?entry=ttu" target="_blank" class="custom-button">Lihat Lokasi</a>
</div>
        </div>
        <script src="/asset/script.js"></script>
    </body>
    </html>
  `;
  res.send(html);
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

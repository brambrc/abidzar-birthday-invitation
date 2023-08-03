const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname, 'public')));

app.get('*', (req, res) => {
  const prefix = req.url.replace('/', '');
  const html = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Responsive Background</title>
        <link rel="stylesheet" href="./asset/styles.css">
    </head>
    <body>
        <div>
            <div class="invitation"> 
                <h2 class="color-first">Hallo ${prefix}</h2>
                <h2 class="color-second">Kamu Diundang Ke :</h2>
            </div>
            <!-- ... Rest of your content ... -->
        </div>
        <script src="./asset/script.js"></script>
    </body>
    </html>
  `;
  res.send(html);
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

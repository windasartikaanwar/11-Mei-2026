import express from 'express';

const app = express();

// endpoint home
app.get('/', (req, res) => {
    res.send(`
        <html>
        <head>
            <title>Home</title>

            <style>
                body{
                    font-family: Arial, sans-serif;
                    background-color: #f5ebe0;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    height: 100vh;
                    margin: 0;
                }

                .box{
                    background: #fffaf5;
                    padding: 40px;
                    border-radius: 20px;
                    text-align: center;
                    box-shadow: 0 4px 10px rgba(0,0,0,0.1);
                }

                a{
                    text-decoration: none;
                    background: #b08968;
                    color: white;
                    padding: 12px 20px;
                    border-radius: 10px;
                }

                a:hover{
                    background: #7f5539;
                }
            </style>
        </head>

        <body>

            <div class="box">
                <h1>Welcome To My Website</h1>
                <p>Klik tombol di bawah untuk melihat portofolio</p>

                <a href="/about">Lihat Portofolio</a>
            </div>

        </body>
        </html>
    `);
});

// endpoint about
app.get('/about', (req, res) => {
    res.send(`
        <html>

        <head>
            <title>Portofolio Winda</title>

            <style>
                body{
                    font-family: Arial, sans-serif;
                    background-color: #f5ebe0;
                    margin: 0;
                    padding: 30px;
                }

                .container{
                    background-color: #fffaf5;
                    max-width: 750px;
                    margin: auto;
                    padding: 35px;
                    border-radius: 18px;
                    box-shadow: 0 4px 12px rgba(0,0,0,0.1);
                    border: 2px solid #e6ccb2;
                }

                h1{
                    text-align: center;
                    color: #7f5539;
                }

                h2{
                    color: #9c6644;
                    margin-top: 25px;
                    border-bottom: 2px solid #ddb892;
                    padding-bottom: 5px;
                }

                p{
                    line-height: 1.8;
                    color: #5c4033;
                    text-align: justify;
                }

                ul{
                    padding-left: 20px;
                }

                li{
                    margin-bottom: 10px;
                    color: #5c4033;
                }

                .motto{
                    margin-top: 25px;
                    background: #e6ccb2;
                    padding: 15px;
                    border-radius: 12px;
                    text-align: center;
                    font-style: italic;
                    color: #5c4033;
                }
            </style>
        </head>

        <body>

            <div class="container">

                <h1>PORTOFOLIO</h1>

                <p>
                    Haiii, kenalin aku <b>Winda Sartika Anwar</b>.
                    Aku mahasiswi D4 Teknik Elektronika Industri
                    Jurusan Teknik Elektro Politeknik Negeri Padang angkatan 2023.
                </p>

                <p>
                    Aku berasal dari SMA Negeri 4 Padang.
                    Teman-teman biasanya manggil aku Winda, Win, Nda, dan Pinguin.
                </p>

                <p>
                    Aku suka belajar tentang elektronika, mikrokontroler,
                    IoT, dan project-project seru lainnya.
                </p>

                <h2>Data Diri</h2>

                <ul>
                    <li>Nama : Winda Sartika Anwar</li>
                    <li>TTL : Padang, 05 Oktober 2004</li>
                    <li>Kampus : Politeknik Negeri Padang</li>
                    <li>Jurusan : Teknik Elektro</li>
                    <li>Program Studi : D4 Teknik Elektronika Industri</li>
                </ul>

                <h2>Keahlian</h2>

                <ul>
                    <li>Arduino</li>
                    <li>IoT Dasar</li>
                    <li>Mikrokontroler Dasar</li>
                    <li>Web Server ESP32</li>
                </ul>

                <div class="motto">
                    <b>Motto:</b> "Keep growing through every challenge."
                </div>

            </div>

        </body>
        </html>
    `);
});

app.listen(5000, () => {
    console.log('Server berjalan di http://localhost:5000');
});
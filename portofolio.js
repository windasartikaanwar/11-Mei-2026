import express from 'express'

const app = express();

app.get('/', (req, res) => {
    res.send(`
    <html>
    <head>
        <title>Portofolio Winda</title>

        <style>
            body{
                font-family: Arial, sans-serif;
                background-color: #f4f4f4;
                margin: 0;
                padding: 20px;
            }

            .container{
                background: white;
                max-width: 700px;
                margin: auto;
                padding: 25px;
                border-radius: 12px;
                box-shadow: 0 2px 8px rgba(0,0,0,0.1);
            }

            h1{
                text-align: center;
                color: #444;
            }

            h2{
                color: #666;
                margin-top: 25px;
            }

            p{
                line-height: 1.7;
                text-align: justify;
            }

            ul{
                padding-left: 20px;
            }

            li{
                margin-bottom: 8px;
            }

            .motto{
                margin-top: 20px;
                text-align: center;
                font-style: italic;
                color: #555;
            }

            a{
                text-decoration: none;
                color: #4a4a4a;
                font-weight: bold;
            }

            a:hover{
                color: #777;
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
                Aku suka belajar tentang elektronika, mikrokontroler, IoT, 
                dan project-project seru lainnya. Walaupun kadang tugas 
                dan coding bikin pusing, tapi semuanya tetap dijalani 
                pelan-pelan sampai sekarang.
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

            <br>

            <center>
                <a href="/about">About Me</a>
            </center>

        </div>

    </body>
    </html>
    `);
});

app.get('/about', (req, res) => {
    res.send(`
    <html>
    <head>
        <title>About Winda</title>

        <style>
            body{
                font-family: Arial, sans-serif;
                background-color: #f4f4f4;
                padding: 20px;
            }

            .container{
                background: white;
                max-width: 600px;
                margin: auto;
                padding: 25px;
                border-radius: 12px;
                box-shadow: 0 2px 8px rgba(0,0,0,0.1);
            }

            h1{
                text-align: center;
                color: #444;
            }

            p{
                line-height: 1.8;
            }

            a{
                text-decoration: none;
                color: #4a4a4a;
                font-weight: bold;
            }
        </style>
    </head>

    <body>

        <div class="container">

            <h1>About Me</h1>

            <p><b>Nama :</b> Winda Sartika Anwar</p>
            <p><b>Tempat, Tanggal Lahir :</b> Padang, 05 Oktober 2004</p>
            <p><b>Kampus :</b> Politeknik Negeri Padang</p>
            <p><b>Jurusan :</b> Teknik Elektro</p>
            <p><b>Program Studi :</b> D4 Teknik Elektronika Industri</p>

            <br>

            <a href="/">← Kembali ke Home</a>

        </div>

    </body>
    </html>
    `);
});

app.listen(5000, () => {
    console.info('Aplikasi jalan di http://localhost:5000')
});
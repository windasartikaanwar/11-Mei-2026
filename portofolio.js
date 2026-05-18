import express from 'express'

const app = express();

// membaca folder public
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.send(`
    <!DOCTYPE html>
    <html lang="id">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">

        <title>Portofolio Winda</title>

        <link rel="stylesheet" href="/style.css">
    </head>

    <body>

        <div class="bg"></div>

        <nav>

            <h1 class="logo">WINDA</h1>

            <ul>
                <li><a href="/">Home</a></li>
            </ul>

        </nav>

        <header>

            <div class="hero-text">

                <p class="hello">Hello Everyone 👋</p>

                <h1>Winda Sartika Anwar</h1>

                <h2>D4 Teknik Elektronika Industri</h2>

                <p class="desc">
                    Haiii, kenalin aku Winda. Aku mahasiswi D4 Teknik 
                    Elektronika Industri Jurusan Teknik Elektro 
                    Politeknik Negeri Padang angkatan 2023.
                </p>

                <p class="desc">
                    Aku berasal dari SMA Negeri 4 Padang. 
                    Teman-teman biasanya manggil aku Winda, Win, Nda, dan Pinguin.
                </p>

                <p class="desc">
                    Aku suka belajar tentang elektronika, mikrokontroler, IoT, 
                    dan project-project seru lainnya.
                </p>

                <div class="buttons">
                    <a href="#" class="btn">About Me</a>
                </div>

            </div>

            <div class="hero-image">

                <div class="circle">
                    <img src="/winda.jpg" alt="Foto Winda">
                </div>

            </div>

        </header>

        <section class="card">

            <h2>Data Diri</h2>

            <div class="info">
                <p><span>Nama :</span> Winda Sartika Anwar</p>
                <p><span>TTL :</span> Padang, 05 Oktober 2004</p>
                <p><span>Kampus :</span> Politeknik Negeri Padang</p>
                <p><span>Jurusan :</span> Teknik Elektro</p>
                <p><span>Program Studi :</span> D4 Teknik Elektronika Industri</p>
            </div>

        </section>

        <section class="card">

            <h2>Keahlian</h2>

            <div class="skills">
                <div class="skill">Arduino</div>
                <div class="skill">IoT Dasar</div>
                <div class="skill">ESP32</div>
                <div class="skill">HTML & CSS</div>
            </div>

        </section>

        <footer>
            "Keep growing through every challenge."
        </footer>

    </body>
    </html>
    `);
});

app.listen(5000, () => {
    console.info('Aplikasi jalan di http://localhost:5000')
});
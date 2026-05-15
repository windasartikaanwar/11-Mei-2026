import express from 'express'

const app = express();

app.get('/', (req, res) => {
    res.send(`
        <h1>Web Portofolio Winda</h1>
        <p>Selamat datang di web portofolio saya</p>
    `);
});

app.get('/about', (req, res) => {
    res.json({
        status: 'ok',
        message: 'Tentang Saya',
        data: {
            nama: 'Winda Sartika Anwar',
            tempat_tanggal_lahir: 'Padang, 05 Oktober 2004',
            perguruan_tinggi: 'Politeknik Negeri Padang',
            jurusan: 'Teknik Elektro',
            program_studi: 'D4 Teknik Elektronika Industri',
            angkatan: '2023',
            deskripsi: 'Haiii, kenalin aku Winda Sartika Anwar. Aku berasal dari SMA Negeri 4 Padang dan sekarang lagi menjalani perkuliahan di Teknik Elektronika Industri PNP. Teman-teman biasanya manggil aku Winda, Win, Nda, dan ada juga yang manggil Pinguin. Aku anak bungsu dan kesayangan mama banget, jadi dulu termasuk anak yang manja dan apa-apa harus sama mama wkwk. Tapi sekarang aku udah mulai belajar mandiri kok, apalagi nanti mau magang jadi harus lebih bisa ngurus diri sendiri juga. Aku orangnya suka bercanda, suka mencoba hal baru, kadang overthinking, tapi tetap berusaha jadi pribadi yang lebih baik setiap harinya. Walaupun jurusan ini kadang bikin pusing karena tugas, praktikum, dan coding yang error tiba-tiba, tapi semuanya tetap dijalani pelan-pelan sampai sekarang. Aku juga suka belajar tentang elektronika, mikrokontroler, IoT, dan project-project seru lainnya. Semoga ke depannya bisa terus berkembang, lulus tepat waktu, membanggakan orang tua, dan jadi orang sukses nantinya. Makasih ya udah mampir ke web portofolio aku!'
        }
    });
});

app.get('/contact', (req, res) => {
    res.json({
        instagram: '@username_ig',
        github: 'github.com/usernamegithub',
        email: 'emailkamu@gmail.com'
    });
});

app.listen(5000, () => {
    console.info('Aplikasi jalan di http://localhost:5000')
});
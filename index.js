import express from 'express'; 

const app = express(); 

app.get('/service',(req, res) => {
    // request
    const ip =req.ip;
    console.info(ip);
    //response
res.status (200).json({
    status: "ok",
    message: "aplikasi service jalan",
    data:{
            timestamp: new Date(Date.now())
    }

});
});
app.get('/home',(req, res) => {
    res.send(`
        <button>click me</button>
        
    `);
});
app.listen(3000,() => {
        console.info('aplikasi jalan di http://localhost:3000');
})
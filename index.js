/// Importações 
const express = require('express')
const exphbs = require('express-handlebars')

const app = express()

const hbs = exphbs.create({
    partialsDir: ["views/partials/"],
});


app.use(express.static('public'))

app.engine("handlebars", hbs.engine)
app.set("view engine", "handlebars")
// Fim Importações 

app.get('/', (req, res) => {
    res.render('home');
})

app.get('/hardware', (req, res) => {
    const produtos = [
        {
            title: "Ryzen 7 5700 G",
            category: "CPU",
            body: "Processador",
            comments: 1,
        },
        {
            title: "Rx 580",
            category: "GPU",
            body: "Placa de vídeo",
            comments: 2,
        },
        {
            title: "RAM 16GB",
            category: "Memória",
            body: "Memória",
            comments: 3,
        },
        {
            title: "RTX 3070Ti",
            category: "GPU",
            body: "Placa de vídeo",
            comments: 4,
        },
        {
            title: "i7 10700K",
            category: "CPU",
            body: "Teste",
            comments: 5,
        },
    ];

    res.render("hardware", { produtos })
});


const port = 3000;
app.listen(port, () => {
    console.log(`Rodando na porta ${port}` )
})
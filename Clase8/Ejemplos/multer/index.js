const express = require('express');
const multer = require('multer');

const app = express();

app.use(express.urlencoded({ extended: true }));

const storage = multer.diskStorage({
    estination: (req, file, cb) => {
        cb(null, 'uploads')
    },
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}-${file.originalname}`)
    }

});

const upload = multer({ storage: storage });

app.get('/', (req, res, next) => {
    //res.json({message: 'WELCOME'})
    res.sendFile(__dirname + '/index.html')
});

app.post('/uploadfile', upload.single('myFile'), (req, res, next) => {
    const file = req.file
    if (!file) {
        const error = new Error('Error subiendo archivo')
        error.httpStatusCode = 400
        return next(error)
    }
    res.send(file)
});

app.post('/uploadmultiple', upload.array('myFiles', 12), (req, res, next) => {
    const files = req.files
    if (!files) {
        const error = new Error('Error subiendo archivo')
        error.httpStatusCode = 400
        return next(error)
    }
    res.send(files)
});


const PORT = 8080

const server = app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${server.address().port}`)
});

server.on('error', error => console.log(`Error en servidor ${error}`));

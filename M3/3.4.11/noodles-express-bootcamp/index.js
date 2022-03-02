import express from 'express';
import multer from 'multer';
 
const app = express();
app.set('view engine', 'ejs');

const multerUpload = multer({ dest: 'uploads/' });

const PORT = 3004;

function handleUpload(req, res) {
  console.log(req.file);
  res.send('it worked!!');
}

app.get('/upload', (req, res) => res.render("upload"));
app.post('/upload', multerUpload.single('photo'), handleUpload);
app.listen(PORT);
